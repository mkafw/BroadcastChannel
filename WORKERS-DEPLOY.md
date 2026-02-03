# 🚀 Cloudflare Workers 部署指南

> 从 Cloudflare Pages 迁移到 Workers 静态站点托管

---

## 📋 迁移说明

Cloudflare 现在推荐使用 **Workers + 静态资源托管** 替代传统的 Pages。

**Workers 的优势：**
- ✅ 更快的全球部署
- ✅ 更好的性能
- ✅ 统一平台管理
- ✅ 支持 Edge Functions

---

## 🎯 一键部署（3步）

### 第1步：本地安装依赖

```bash
# 克隆项目
git clone https://github.com/mkafw/BroadcastChannel.git
cd BroadcastChannel

# 安装依赖
pnpm install

# 安装 wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login
```

### 第2步：配置环境变量

编辑 `wrangler.toml` 或 `wrangler.jsonc`，确认以下配置：

```toml
# 频道设置（必须修改）
[vars]
CHANNEL = "siweishiya"
LOCALE = "zh-cn"
TIMEZONE = "Asia/Shanghai"
COMMENTS = "true"
REACTIONS = "true"
RSS_BEAUTIFY = "true"
```

**需要 Bot Token？** 在 Workers Dashboard 中设置：
1. 登录 https://dash.cloudflare.com
2. Workers & Pages → 你的 Worker → Settings → Variables
3. 添加 `TG_BOT_TOKEN` = 你的Token

### 第3步：部署

```bash
# 构建并部署
npm run deploy

# 或使用 pnpm
pnpm run deploy
```

等待部署完成，你会看到：
```
✨ Successfully deployed to:
https://siweishiya-blog.your-subdomain.workers.dev
```

---

## 🔧 配置文件说明

### wrangler.toml
```toml
name = "siweishiya-blog"                    # Worker 名称
compatibility_date = "2025-01-01"           # 兼容性日期
compatibility_flags = ["nodejs_compat"]     # Node.js 兼容模式

# 静态资源托管配置
[assets]
directory = "./dist"                        # 构建输出目录
binding = "ASSETS"                          # 资源绑定名称
html_handling = "auto-trailing-slash"        # 自动处理 URL 斜杠
not_found_handling = "404-page"             # 404 页面处理

# 环境变量
[vars]
CHANNEL = "siweishiya"
LOCALE = "zh-cn"
TIMEZONE = "Asia/Shanghai"
COMMENTS = "true"
REACTIONS = "true"
RSS_BEAUTIFY = "true"

# Workers 限制
[limits]
cpu_ms = 30000                              # CPU 时间限制 30秒
```

---

## 🎨 项目特色

### 已配置的内容

| 功能 | 文件 | 说明 |
|------|------|------|
| ✅ Q版紫金小公主 | `src/components/ChibiPet.html` | 右下角桌宠，点击互动 |
| ✅ 紫金色主题 | `src/assets/purple-gold-glass-theme.css` | 玻璃质感奢华风格 |
| ✅ Telegram Bot API | `wrangler.toml` | 稳定获取频道消息 |
| ✅ Astro SSR | `astro.config.mjs` | Cloudflare 适配器 |

### Workers 部署包含
- 🚀 全球 CDN 加速
- 🎨 紫金色玻璃质感主题
- 👸 Q版紫金小公主桌宠
- 📱 响应式设计
- 🔍 SEO 优化
- 📡 RSS 订阅

---

## 📚 常用命令

```bash
# 开发模式（本地测试）
wrangler dev

# 构建
npm run build

# 部署到 Workers
wrangler deploy

# 或使用 package.json 脚本
npm run deploy        # 构建 + 部署
npm run dev:workers   # Workers 开发模式
npm run preview:workers # 预览 Workers 环境
```

---

## 🌐 自定义域名

### 方法1: Wrangler CLI
```toml
[[routes]]
pattern = "blog.yourdomain.com/*"
custom_domain = true
```

### 方法2: Dashboard 设置
1. 登录 https://dash.cloudflare.com
2. Workers & Pages → 你的 Worker → Settings → Triggers
3. 点击 "Add Custom Domain"
4. 输入你的域名
5. 在 DNS 中添加 CNAME 记录指向 Workers

---

## 🔐 环境变量配置

### 在 Workers Dashboard 中设置

1. Workers & Pages → 你的 Worker → Settings → Variables
2. 添加以下变量：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `CHANNEL` | `siweishiya` | Telegram 频道 |
| `TG_BOT_TOKEN` | `你的Token` | Bot API Token（敏感） |
| `LOCALE` | `zh-cn` | 语言 |
| `TIMEZONE` | `Asia/Shanghai` | 时区 |

**注意：** `TG_BOT_TOKEN` 应该设置为 **Secret**，不是普通变量！

---

## 🚨 故障排除

### 1. 部署失败
```bash
# 检查配置
wrangler config list

# 重新登录
wrangler logout
wrangler login
```

### 2. 网站空白
- 检查 `CHANNEL` 是否正确
- 访问 https://t.me/s/siweishiya 确认频道公开
- 检查 Workers Logs：Dashboard → Worker → Logs

### 3. 桌宠不显示
- 检查 `src/layouts/base.astro` 是否包含桌宠代码
- 查看浏览器控制台错误

### 4. Bot Token 无效
- 确认 Bot 已添加到频道管理员
- 重新生成 Token 并更新 Secret

---

## 📞 相关链接

- **项目地址**: https://github.com/mkafw/BroadcastChannel
- **Workers 文档**: https://developers.cloudflare.com/workers/
- **Wrangler CLI**: https://developers.cloudflare.com/workers/wrangler/
- **Astro Cloudflare**: https://docs.astro.build/en/guides/deploy/cloudflare/

---

**🎉 准备迁移了吗？按照上面的步骤，2分钟就能完成部署！**