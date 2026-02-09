---
name: 📡 RSS 订阅
about: 添加一个新的 RSS 订阅源
title: '[RSS] 订阅名称'
labels: rss-subscription
assignees: ''
---

## RSS 订阅信息

请填写以下信息：

```json
{
  "title": "博客名称",
  "url": "https://example.com",
  "feedUrl": "https://example.com/rss.xml",
  "description": "博客描述",
  "category": "技术"
}
```

### 字段说明

- **title**: 博客/网站的名称
- **url**: 网站首页地址
- **feedUrl**: RSS 订阅地址（必须）
- **description**: 简短描述（可选）
- **category**: 分类，如：技术、生活、新闻、其他

---

💡 **提示**: 填写完上面的 JSON 后，点击 "Submit new issue" 即可添加订阅。
