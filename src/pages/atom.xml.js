import * as cheerio from 'cheerio'
import sanitizeHtml from 'sanitize-html'
import { getEnv } from '../lib/env'
import { getChannelInfo } from '../lib/telegram'

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function getMimeType(url, defaultType = 'application/octet-stream') {
  if (!url) {
    return defaultType
  }

  const extension = url.split('?')[0].split('.').pop()?.toLowerCase()
  const mimeTypes = {
    // Images
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    // Videos
    mp4: 'video/mp4',
    webm: 'video/webm',
    ogv: 'video/ogg',
    mov: 'video/quicktime',
    // Audio
    mp3: 'audio/mpeg',
    ogg: 'audio/ogg',
    wav: 'audio/wav',
    m4a: 'audio/mp4',
    aac: 'audio/aac',
  }
  return mimeTypes[extension] || defaultType
}

export async function GET(Astro) {
  const { SITE_URL } = Astro.locals
  const tag = Astro.url.searchParams.get('tag')
  const channel = await getChannelInfo(Astro, {
    q: tag ? `#${tag}` : '',
  })
  const posts = channel.posts || []

  const request = Astro.request
  const url = new URL(request.url)
  url.pathname = SITE_URL
  url.search = ''

  const feedUrl = new URL(request.url)
  const siteUrl = url.toString()
  const title = escapeXml(`${tag ? `${tag} | ` : ''}${channel.title}`)
  const description = escapeXml(channel.description || '')
  const updated = posts.length > 0 ? new Date(posts[0].datetime).toISOString() : new Date().toISOString()

  let atomFeed = `<?xml version="1.0" encoding="utf-8"?>`

  if (getEnv(import.meta.env, Astro, 'RSS_BEAUTIFY')) {
    atomFeed += `<?xml-stylesheet type="text/xsl" href="/rss.xsl"?>`
  }

  atomFeed += `
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${title}</title>
  <link href="${escapeXml(feedUrl.toString())}" rel="self" type="application/atom+xml"/>
  <link href="${escapeXml(siteUrl)}" rel="alternate" type="text/html"/>
  <id>${escapeXml(siteUrl)}</id>
  <updated>${updated}</updated>`

  if (description) {
    atomFeed += `
  <subtitle>${description}</subtitle>`
  }

  if (channel.avatar) {
    atomFeed += `
  <icon>${escapeXml(channel.avatar)}</icon>
  <logo>${escapeXml(channel.avatar)}</logo>`
  }

  for (const item of posts) {
    const postUrl = `${siteUrl}posts/${item.id}`
    const postTitle = escapeXml(item.title || '')
    const postDate = new Date(item.datetime).toISOString()

    const cleanContent = sanitizeHtml(item.content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'video', 'audio']),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        video: ['src', 'width', 'height', 'poster'],
        audio: ['src', 'controls'],
        img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading', 'class'],
      },
      exclusiveFilter(frame) {
        return frame.tag === 'img' && frame.attribs?.class?.includes('modal-img')
      },
    })

    const summary = escapeXml(item.description || item.text?.substring(0, 200) || '')

    atomFeed += `
  <entry>
    <title>${postTitle}</title>
    <link href="${escapeXml(postUrl)}" rel="alternate" type="text/html"/>
    <id>${escapeXml(postUrl)}</id>
    <published>${postDate}</published>
    <updated>${postDate}</updated>`

    if (summary) {
      atomFeed += `
    <summary type="text">${summary}</summary>`
    }

    atomFeed += `
    <content type="html"><![CDATA[${cleanContent}]]></content>`

    // Extract media from content for enhanced link elements
    const $ = cheerio.load(item.content)

    // Add image links
    $('.tgme_widget_message_photo_wrap').each((_, photo) => {
      const url = $(photo).attr('style')?.match(/url\(["'](.*?)["']/)?.[1]
      if (url) {
        atomFeed += `
    <link href="${escapeXml(url)}" rel="image" type="${getMimeType(url, 'image/jpeg')}"/>`
      }
    })

    // Add video links
    $('.tgme_widget_message_video_wrap video, .tgme_widget_message_roundvideo_wrap video').each((_, video) => {
      const src = $(video).attr('src')
      if (src) {
        atomFeed += `
    <link href="${escapeXml(src)}" rel="enclosure" type="${getMimeType(src, 'video/mp4')}"/>`
      }
    })

    // Add audio links (voice messages and audio files)
    $('audio').each((_, audio) => {
      const src = $(audio).attr('src')
      if (src) {
        atomFeed += `
    <link href="${escapeXml(src)}" rel="enclosure" type="${getMimeType(src, 'audio/mpeg')}"/>`
      }
    })

    // Add link preview images
    $('.link_preview_image').each((_, img) => {
      const src = $(img).attr('src')
      if (src) {
        atomFeed += `
    <link href="${escapeXml(src)}" rel="preview" type="${getMimeType(src, 'image/jpeg')}"/>`
      }
    })

    // Add tags as categories
    if (item.tags && item.tags.length > 0) {
      for (const tagName of item.tags) {
        atomFeed += `
    <category term="${escapeXml(tagName)}"/>`
      }
    }

    atomFeed += `
  </entry>`
  }

  atomFeed += `
</feed>`

  return new Response(atomFeed, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
