# 🎨 紫金色玻璃质感主题 (Purple-Gold Glass Theme)

> **风格**: Apple 奢华风 + Glassmorphism (玻璃拟态)  
> **配色**: 紫金渐变 + 玻璃透明  
> **特色**: 雍容华贵、高端大气、现代感强

---

## ✨ 设计特点

### 🪞 玻璃质感 (Glassmorphism)
- **半透明背景**: 使用 `backdrop-filter: blur()` 实现毛玻璃效果
- **边框光泽**: 金色细边框增添奢华感
- **悬浮阴影**: 紫色渐变阴影营造层次感

### 🎨 紫金色配色
| 颜色 | 色值 | 用途 |
|------|------|------|
| **主紫色** | `#6B46C1` | 主色调、链接、按钮 |
| **浅紫色** | `#9F7AEA` | 悬停状态、高亮 |
| **深紫色** | `#553C9A` | 阴影、深色背景 |
| **金色** | `#D4AF37` | 强调色、时间戳、边框 |
| **浅金色** | `#F4E4BC` | 渐变、悬停效果 |
| **深金色** | `#B8860B` | 深色模式强调 |

### 🍎 Apple 风格元素
- **大圆角**: 20px-40px 圆角，柔和现代
- **渐变文字**: 紫金色渐变标题
- **精致动画**: 0.2s-0.6s 流畅过渡
- **系统字体**: -apple-system, PingFang SC 等原生字体

---

## 📦 使用方法

### 方式 1: 直接引用 CSS 文件

在 HTML 文件的 `<head>` 中添加：

```html
<link rel="stylesheet" href="/src/assets/purple-gold-glass-theme.css">
```

### 方式 2: 导入到主样式文件

在 `src/styles/global.css` 或主样式文件中：

```css
@import './assets/purple-gold-glass-theme.css';
```

### 方式 3: 按需使用 CSS 变量

```css
/* 在你的样式文件中 */
:root {
  --my-primary: #6B46C1;
  --my-accent: #D4AF37;
}

.my-button {
  background: linear-gradient(135deg, var(--my-primary), var(--my-accent));
}
```

---

## 🎯 可用的 CSS 类

### 布局组件

```html
<!-- 玻璃卡片 -->
<div class="glass-card">
  内容区域
</div>

<!-- 导航栏 -->
<nav class="navbar-glass">
  导航内容
</nav>

<!-- 文章卡片 -->
<article class="post-card">
  <h2 class="title-gradient">文章标题</h2>
  <span class="timestamp">2026-02-03</span>
  <p>文章内容...</p>
</article>

<!-- 页脚 -->
<footer class="footer-glass">
  页脚内容
</footer>
```

### 按钮样式

```html
<!-- 金色按钮 -->
<button class="btn-gold">立即行动</button>

<!-- 紫色玻璃按钮 -->
<button class="btn-purple-glass">了解更多</button>
```

### 文字和标签

```html
<!-- 渐变标题 -->
<h1 class="title-gradient">紫金色标题</h1>

<!-- 时间戳 -->
<span class="timestamp">刚刚发布</span>

<!-- 标签 -->
<span class="tag">思考</span>
<span class="tag">笔记</span>

<!-- 金色分隔线 -->
<div class="divider-gold"></div>
```

### 媒体和交互

```html
<!-- 图片容器 -->
<div class="image-container">
  <img src="image.jpg" alt="描述">
</div>

<!-- 搜索框 -->
<input type="search" class="search-input" placeholder="搜索...">

<!-- 表情反应 -->
<span class="reaction">👍 12</span>
<span class="reaction active">❤️ 8</span>

<!-- RSS 徽章 -->
<a href="/rss.xml" class="rss-badge">RSS</a>
```

### 内容元素

```html
<!-- 引用块 -->
<blockquote>
  这是一段引用文字，带有紫金边框
</blockquote>

<!-- 代码块 -->
<pre><code>console.log('Hello World');</code></pre>

<!-- 行内代码 -->
<p>使用 <code>npm install</code> 安装依赖</p>
```

---

## 🎨 CSS 变量参考

### 颜色变量
```css
var(--primary-purple)        /* 主紫色 #6B46C1 */
var(--primary-purple-light)  /* 浅紫色 #9F7AEA */
var(--primary-purple-dark)   /* 深紫色 #553C9A */
var(--accent-gold)           /* 金色 #D4AF37 */
var(--accent-gold-light)     /* 浅金色 #F4E4BC */
var(--accent-gold-dark)      /* 深金色 #B8860B */
```

### 玻璃效果变量
```css
var(--glass-bg)              /* 玻璃背景 rgba(107, 70, 193, 0.15) */
var(--glass-bg-light)        /* 浅色玻璃 rgba(255, 255, 255, 0.1) */
var(--glass-border)          /* 玻璃边框 rgba(212, 175, 55, 0.3) */
var(--glass-shadow)          /* 玻璃阴影 */
```

### 尺寸变量
```css
var(--radius-sm)             /* 12px 小圆角 */
var(--radius-md)             /* 20px 中圆角 */
var(--radius-lg)             /* 28px 大圆角 */
var(--radius-xl)             /* 40px 超大圆角 */
```

### 阴影变量
```css
var(--shadow-sm)             /* 小阴影 */
var(--shadow-md)             /* 中阴影 */
var(--shadow-lg)             /* 大阴影 */
var(--shadow-gold)           /* 金色阴影 */
```

### 模糊变量
```css
var(--blur-sm)               /* blur(10px) 小模糊 */
var(--blur-md)               /* blur(20px) 中模糊 */
var(--blur-lg)               /* blur(40px) 大模糊 */
```

### 动画变量
```css
var(--transition-fast)       /* 0.2s 快速过渡 */
var(--transition-smooth)     /* 0.4s 平滑过渡 */
var(--transition-slow)       /* 0.6s 慢速过渡 */
```

---

## 📱 响应式设计

主题已内置响应式支持：

- **桌面端**: 完整效果，大圆角
- **平板端**: 中等效果，适中圆角
- **移动端**: 优化布局，小圆角

```css
/* 移动端优化示例 */
@media (max-width: 768px) {
  .glass-card {
    border-radius: var(--radius-md);
    margin: 12px;
  }
  
  .post-card {
    padding: 20px;
  }
}
```

---

## 🌙 深色模式建议

如需深色模式，可添加：

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #f8f9fa;
    --text-secondary: #a0a0b0;
    --glass-bg-light: rgba(26, 26, 46, 0.6);
  }
  
  body {
    background: linear-gradient(135deg, 
      rgba(26, 26, 46, 0.95) 0%, 
      rgba(85, 60, 154, 0.9) 50%,
      rgba(26, 26, 46, 0.95) 100%);
  }
}
```

---

## 🎯 使用示例

### 完整页面示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>紫金色玻璃主题示例</title>
  <link rel="stylesheet" href="/src/assets/purple-gold-glass-theme.css">
  <style>
    /* 页面特定样式 */
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
  </style>
</head>
<body>
  <!-- 导航栏 -->
  <nav class="navbar-glass">
    <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
      <h1 class="title-gradient" style="margin: 0;">思为式呀</h1>
      <div>
        <a href="#">首页</a>
        <a href="#">归档</a>
        <a href="#">关于</a>
      </div>
    </div>
  </nav>

  <div class="container" style="margin-top: 40px;">
    <!-- 文章卡片 -->
    <article class="post-card">
      <h2 class="title-gradient">探索思维的边界</h2>
      <div class="timestamp">2026-02-03 · 思考</div>
      <div class="divider-gold"></div>
      <p>这是一篇关于思考和创意的文章...</p>
      <div style="margin-top: 20px;">
        <span class="tag">思考</span>
        <span class="tag">创意</span>
        <span class="tag">笔记</span>
      </div>
      <div style="margin-top: 20px;">
        <button class="btn-gold">阅读全文</button>
        <span class="reaction" style="margin-left: 12px;">👍 24</span>
        <span class="reaction">💬 8</span>
      </div>
    </article>

    <!-- 引用块 -->
    <blockquote>
      "思考是人类最珍贵的财富，每一个想法都可能改变世界。"
    </blockquote>

    <!-- 图片展示 -->
    <div class="image-container" style="margin: 24px 0;">
      <img src="https://picsum.photos/800/400" alt="示例图片">
    </div>
  </div>

  <!-- 页脚 -->
  <footer class="footer-glass">
    <div class="container" style="text-align: center;">
      <p class="title-gradient" style="font-size: 1.2rem;">思为式呀</p>
      <p style="color: var(--text-secondary);">思考 · 记录 · 分享</p>
      <div style="margin-top: 20px;">
        <a href="#" class="rss-badge">RSS 订阅</a>
      </div>
    </div>
  </footer>
</body>
</html>
```

---

## 🔧 自定义修改

### 修改主色调

在引入主题 CSS **之后**覆盖变量：

```css
:root {
  --primary-purple: #你的紫色;
  --accent-gold: #你的金色;
}
```

### 调整玻璃模糊度

```css
.glass-card {
  backdrop-filter: blur(30px); /* 增加模糊 */
}
```

### 修改圆角大小

```css
:root {
  --radius-lg: 40px; /* 更大的圆角 */
}
```

---

## 📚 相关资源

- **主题文件**: `src/assets/purple-gold-glass-theme.css`
- **BroadcastChannel 项目**: https://github.com/miantiao-me/BroadcastChannel
- **设计灵感**: Apple Design + Glassmorphism CSS
- **字体推荐**: -apple-system, PingFang SC, Segoe UI

---

## 📝 更新日志

### v1.0 (2026-02-03)
- ✅ 初始版本发布
- ✅ 紫金色配色方案
- ✅ Glassmorphism 玻璃效果
- ✅ Apple 风格圆角和阴影
- ✅ 响应式设计支持
- ✅ 40+ 可用 CSS 类
- ✅ 完整的 CSS 变量系统

---

## 💡 设计建议

1. **不要过度使用玻璃效果**: 重要内容区域使用，次要内容用纯色
2. **保持留白**: Apple 风格强调留白，不要堆砌元素
3. **图片质量**: 使用高清图片，配合 `image-container` 的玻璃边框
4. **动画节制**: 悬停效果提升体验，但不要过度动画
5. **一致性**: 保持圆角、颜色、间距的一致性

---

## 🤝 贡献

欢迎提交 Issue 和 PR 改进主题！

---

**主题设计**: Claude Code  
**适用项目**: BroadcastChannel  
**许可证**: AGPL-3.0 (跟随原项目)
