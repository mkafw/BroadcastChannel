import { XMLParser } from 'fast-xml-parser'

export async function fetchRSSFeed(feedUrl) {
  try {
    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)'
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const xml = await response.text()
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_"
    })
    
    const result = parser.parse(xml)
    
    // 处理 RSS 2.0
    if (result.rss?.channel?.item) {
      const items = Array.isArray(result.rss.channel.item) 
        ? result.rss.channel.item 
        : [result.rss.channel.item]
      
      return items.map(item => ({
        title: item.title || '无标题',
        link: item.link || '',
        description: item.description || item.summary || '',
        pubDate: item.pubDate || item.published || new Date().toISOString(),
        author: item.author || item['dc:creator'] || ''
      }))
    }
    
    // 处理 Atom
    if (result.feed?.entry) {
      const entries = Array.isArray(result.feed.entry) 
        ? result.feed.entry 
        : [result.feed.entry]
      
      return entries.map(entry => ({
        title: entry.title?.['#text'] || entry.title || '无标题',
        link: entry.link?.['@_href'] || entry.link || '',
        description: entry.summary || entry.content || '',
        pubDate: entry.published || entry.updated || new Date().toISOString(),
        author: entry.author?.name || ''
      }))
    }
    
    return []
  } catch (error) {
    console.error(`Failed to fetch RSS from ${feedUrl}:`, error)
    return []
  }
}

export async function fetchAllRSSFeeds(subscriptions) {
  const allArticles = []
  
  for (const sub of subscriptions) {
    try {
      const articles = await fetchRSSFeed(sub.feedUrl)
      articles.forEach(article => {
        allArticles.push({
          ...article,
          source: sub.title,
          sourceUrl: sub.url,
          category: sub.category
        })
      })
    } catch (error) {
      console.error(`Failed to fetch from ${sub.title}:`, error)
    }
  }
  
  // 按发布时间排序
  return allArticles.sort((a, b) => {
    return new Date(b.pubDate) - new Date(a.pubDate)
  })
}
