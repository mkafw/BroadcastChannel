# 🚀 BroadcastChannel 一键部署指南

## 📋 部署前检查清单

- [x] Fork 项目到 GitHub: https://github.com/mkafw/BroadcastChannel
- [x] Telegram 频道: https://t.me/siweishiya
- [x] 紫金色主题已配置
- [x] Q版桌宠已添加

---

## 🎯 快速部署（3步）

### 第1步：配置环境变量

登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → 你的项目 → Settings → Environment variables

添加以下变量：

```
CHANNEL=siweishiya
LOCALE=zh-cn
TIMEZONE=Asia/Shanghai
COMMENTS=true
REACTIONS=true
RSS_BEAUTIFY=true
```

### 第2步：添加Q版桌宠到布局

编辑 `src/layouts/Layout.astro`，在 `</body>` 前添加：

```astro
<!-- Q版紫金小公主桌宠 -->
<Fragment set:html={await fetch('/src/components/ChibiPet.html').then(r => r.text())} />
```

### 第3步：重新部署

Pages 项目 → Deployments → "Retry deployment"

等待 2-3 分钟，访问你的网站！

---

## 🎨 部署后效果

访问 `https://你的项目名.pages.dev`，你将看到：

1. ✅ Telegram 频道内容自动同步
2. ✅ 紫金色玻璃质感主题
3. ✅ Q版紫金小公主在右下角
4. ✅ 响应式设计，移动端完美适配

---

## 🔧 故障排除

### 网站空白？
- 检查 CHANNEL=siweishiya 是否正确
- 访问 https://t.me/s/siweishiya 确认频道公开

### 桌宠不显示？
- 检查是否正确添加到 Layout.astro
- 查看浏览器控制台错误信息

### 需要更新内容？
- Telegram 发新消息 → 自动同步
- 或手动 Retry deployment

---

## 📚 相关文件

- 项目地址: https://github.com/mkafw/BroadcastChannel
- 主题文档: https://github.com/mkafw/BroadcastChannel/blob/main/THEME-PURPLE-GOLD.md
- 桌宠文档: https://github.com/mkafw/BroadcastChannel/blob/main/PET-GUIDE.md

---

**准备好部署了吗？按照上面的3个步骤操作即可！** 🎉
