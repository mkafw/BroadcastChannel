import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseOPML(opmlContent) {
  const outlines = opmlContent.match(/<outline[^>]*\/>/g) || [];
  const feeds = [];
  
  outlines.forEach(outline => {
    const textMatch = outline.match(/text="([^"]*)"/);
    const titleMatch = outline.match(/title="([^"]*)"/);
    const xmlUrlMatch = outline.match(/xmlUrl="([^"]*)"/);
    
    if (xmlUrlMatch) {
      feeds.push({
        title: titleMatch ? titleMatch[1] : textMatch ? textMatch[1] : 'Unknown',
        xmlUrl: xmlUrlMatch[1],
        category: '文章'
      });
    }
  });
  
  return feeds;
}

const opmlPath = path.join(__dirname, '..', 'src', 'data', 'BestBlogs_RSS_Articles.opml');
const opmlContent = fs.readFileSync(opmlPath, 'utf-8');
const feeds = parseOPML(opmlContent);

// 保存为 JSON
const jsonPath = path.join(__dirname, '..', 'src', 'data', 'rss-sources.json');
fs.writeFileSync(jsonPath, JSON.stringify(feeds, null, 2));

console.log(`✅ Parsed ${feeds.length} RSS feeds`);
console.log(`💾 Saved to ${jsonPath}`);
console.log('\n前5个源：');
feeds.slice(0, 5).forEach((feed, i) => {
  console.log(`  ${i + 1}. ${feed.title} - ${feed.xmlUrl}`);
});
