# 📦 Pages → Workers 迁移指南

> 本项目已从 Cloudflare Pages 迁移到 Cloudflare Workers 静态资源托管

---

## 🔄 为什么迁移？

| 对比项 | Cloudflare Pages | Cloudflare Workers |
|--------|------------------|-------------------|
| 架构 | 静态站点托管 | 边缘计算 + 静态资源 |
| 部署速度 | 快 | 更快（全球秒级） |
| 功能扩展 | 有限 | 支持 Edge Functions |
| 统一管理 | 分散 | Workers & Pages 统一 |
| 未来支持 | 逐渐合并到 Workers | ✅ 推荐方案 |

---

## 📁 新增/修改的文件

### ✅ 新增文件

| 文件 | 用途 |
|------|------|
| `wrangler.toml` | Workers 配置文件（TOML 格式） |
| `wrangler.jsonc` | Workers 配置文件（JSON 格式） |
| `.github/workflows/deploy-workers.yml` | GitHub Actions 自动部署 |
| `WORKERS-DEPLOY.md` | Workers 部署详细指南 |

### 🔧 修改的文件

| 文件 | 修改内容 |
|------|----------|
| `package.json` | 添加 wrangler 依赖和部署脚本 |

### 📂 保留的文件（不变）

- ✅ Q版桌宠：`src/components/ChibiPet.html`
- ✅ 紫金色主题：`src/assets/purple-gold-glass-theme.css`
- ✅ 频道配置：`CHANNEL=siweishiya`
- ✅ 所有布局文件

---

## 🚀 快速开始

### 方式1: 本地部署（推荐首次使用）

```bash
# 1. 安装 wrangler
npm install -g wrangler

# 2. 登录 Cloudflare
wrangler login

# 3. 进入项目
cd BroadcastChannel

# 4. 安装依赖
pnpm install

# 5. 一键部署
npm run deploy
```

### 方式2: GitHub Actions 自动部署

1. 在 GitHub 仓库 → Settings → Secrets and variables → Actions 中添加：
   - `CLOUDFLARE_API_TOKEN`：Cloudflare API Token
   - `CLOUDFLARE_ACCOUNT_ID`：Cloudflare Account ID
   - `TG_BOT_TOKEN`：（可选）Telegram Bot Token

2. 推送代码到 main 分支，自动部署！

---

## 📋 环境变量迁移

### 从 Pages 迁移到 Workers

**之前（Pages）:**
```
Dashboard → Pages → 项目 → Settings → Environment variables
```

**现在（Workers）:**

**方法1：wrangler.toml（推荐）**
```toml
[vars]
CHANNEL = "siweishiya"
TG_BOT_TOKEN = "你的Token"
```

**方法2：Dashboard 设置（敏感信息）**
```
Dashboard → Workers & Pages → 你的 Worker → Settings → Variables
```

**方法3：命令行**
```bash
# 设置普通变量
wrangler vars put CHANNEL siweishiya

# 设置加密 Secret
wrangler secret put TG_BOT_TOKEN
```

---

## 🎨 你的项目包含

### ✅ 已配置的特色功能

| 功能 | 状态 | 说明 |
|------|------|------|
| 🐱 Q版紫金小公主 | ✅ | 右下角桌宠，点击会互动 |
| 🎨 紫金色玻璃主题 | ✅ | 奢华紫金色玻璃质感 |
| 📱 响应式设计 | ✅ | 移动端完美适配 |
| 🔍 SEO 优化 | ✅ | 自动生成 sitemap.xml |
| 📡 RSS 订阅 | ✅ | /rss.xml |
| 💬 评论系统 | ✅ | 已开启 |
| 👍 表情反应 | ✅ | 已开启 |
| 🤖 Telegram Bot | ✅ | API 获取频道消息 |

---

## 🔗 相关文档

- **详细部署指南**: [WORKERS-DEPLOY.md](./WORKERS-DEPLOY.md)
- **主题文档**: [THEME-PURPLE-GOLD.md](./THEME-PURPLE-GOLD.md)
- **桌宠文档**: [PET-GUIDE.md](./PET-GUIDE.md)
- **原部署指南**: [DEPLOY.md](./DEPLOY.md)（已过时）

---

## ❓ 常见问题

### Q: 我需要重新配置 Bot Token 吗？
**A:** 是的。在 Workers Dashboard → Settings → Variables 中添加 `TG_BOT_TOKEN`。

### Q: 之前的 Pages 项目怎么办？
**A:** 可以在 Workers 部署成功后删除 Pages 项目，避免重复。

### Q: 域名会变吗？
**A:** 会的。Workers 域名格式：`xxx.your-subdomain.workers.dev`。如果需要绑定自定义域名，请参考 WORKERS-DEPLOY.md。

### Q: 我需要重新安装依赖吗？
**A:** 需要运行 `pnpm install` 安装新增的 `wrangler` 依赖。

### Q: Q版桌宠还会在吗？
**A:** 会的！所有功能都保留了，包括：
- Q版紫金小公主
- 紫金色主题
- 所有交互功能

---

## 🎯 下一步

1. ✅ 阅读 [WORKERS-DEPLOY.md](./WORKERS-DEPLOY.md)
2. ✅ 安装 wrangler CLI
3. ✅ 运行 `npm run deploy`
4. ✅ 享受你的 Workers 博客！

**有问题？查看 [WORKERS-DEPLOY.md](./WORKERS-DEPLOY.md) 的故障排除部分！**