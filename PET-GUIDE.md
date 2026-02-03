# 🦋 BroadcastChannel 桌宠使用指南

为你的紫金色博客添加可爱的互动桌宠！

---

## 🎭 可选方案

### 方案 1: Live2D 精致看板娘 (推荐)
**特点**: 3D效果、精致模型、多互动

### 方案 2: CSS紫金小精灵
**特点**: 轻量级、快速加载、原创设计

---

## 🚀 使用方法

### Live2D 看板娘

#### 步骤 1: 选择模型

在 `Live2DPet.html` 中修改模型路径：

```javascript
"jsonPath": "https://unpkg.com/live2d-widget-model-z16@1.0.5/assets/z16.model.json"
```

可选模型：
- `shizuku` - 萌系白猫女孩 (可爱风格)
- `z16` - 优雅紫发女孩 (推荐，匹配紫金色主题)
- `koharu` - 可爱粉发女孩
- `haruto` - 帅气黑发男孩

#### 步骤 2: 添加到布局文件

在 `src/layouts/Layout.astro` 的 `</body>` 标签前添加：

```astro
<!-- Live2D 桌宠 -->
<Fragment set:html={await fetch('/src/components/Live2DPet.html').then(r => r.text())} />
```

或者使用 iframe：

```html
<iframe src="/src/components/Live2DPet.html" style="position: fixed; bottom: 0; right: 0; width: 300px; height: 500px; border: none; z-index: 9999;"></iframe>
```

#### 步骤 3: 自定义配置

编辑 `Live2DPet.html` 中的配置：

```javascript
L2Dwidget.init({
  "model": {
    "jsonPath": "模型路径",
    "scale": 1.2  // 缩放比例
  },
  "display": {
    "position": "right",  // 位置: left/right
    "width": 200,
    "height": 400
  },
  "dialog": {
    "enable": true,  // 是否显示对话框
    "hitokoto": {
      "enable": true  // 是否使用一言API
    }
  }
});
```

---

### CSS 紫金小精灵

#### 步骤 1: 添加到布局

在 `src/layouts/Layout.astro` 中添加：

```astro
<!-- CSS 桌宠 -->
<Fragment set:html={await fetch('/src/components/PetSprite.html').then(r => r.text())} />
```

#### 步骤 2: 自定义外观

在 `PetSprite.html` 中修改颜色：

```css
.pet-body {
  background: linear-gradient(135deg, #6B46C1 0%, #9F7AEA 50%, #D4AF37 100%);
  border: 3px solid rgba(212, 175, 55, 0.5);
}
```

#### 步骤 3: 修改对话内容

```javascript
const messages = [
  "你的自定义欢迎语",
  "第二条消息",
  "第三条消息"
];
```

---

## 🎨 外观对比

### Live2D 看板娘
```
┌─────────────────┐
│   精致的3D角色   │
│    👩‍🦰          │
│   ／  ＼        │
│   会眨眼、转头   │
│   跟随鼠标移动   │
└─────────────────┘
    ↓ 对话框
"欢迎来到思为式呀~"
```

### CSS 紫金小精灵
```
    🦋
  ╭────╮
  │ 💜 │  ← 紫金渐变身体
  │ ●● │  ← 会眨眼的眼睛
  │  ω  │  ← 微笑嘴巴
  ╰────╯
    ↓ 气泡
"你好呀~ 我是紫金小精灵"
```

---

## ⚙️ 功能对比

| 功能 | Live2D | CSS精灵 |
|------|--------|---------|
| **视觉效果** | ⭐⭐⭐ 3D精致 | ⭐⭐ 2D可爱 |
| **加载速度** | ⭐⭐ 中等 | ⭐⭐⭐ 超快 |
| **交互性** | ⭐⭐⭐ 丰富 | ⭐⭐ 基础 |
| **资源占用** | ⭐⭐ 中等 | ⭐⭐⭐ 极低 |
| **移动端** | ⭐⭐ 可用 | ⭐⭐⭐ 完美 |
| **定制难度** | ⭐⭐⭐ 简单 | ⭐⭐ 需CSS知识 |

---

## 📱 响应式适配

两个方案都内置了移动端适配：

```css
@media (max-width: 768px) {
  #live2d-widget {
    transform: scale(0.7);
  }
  
  #pet-container {
    transform: scale(0.8);
  }
}
```

---

## 🎯 推荐配置

### 追求视觉效果
→ 使用 **Live2D** + z16 模型

### 追求性能
→ 使用 **CSS精灵**

### 两者都用
→ Live2D 在桌面，CSS精灵在移动端

```javascript
// 设备检测
const isMobile = window.innerWidth <= 768;
if (isMobile) {
  // 加载CSS精灵
} else {
  // 加载Live2D
}
```

---

## 💡 创意玩法

### 1. 根据文章显示不同消息

```javascript
// 在文章页面
const articleTitle = document.querySelector('h1').textContent;
showMessage(`正在阅读: ${articleTitle}`);
```

### 2. 时间相关的问候

```javascript
const hour = new Date().getHours();
if (hour < 12) {
  showMessage("早上好！开始今天的思考吧 ☀️");
} else if (hour < 18) {
  showMessage("下午好！继续加油 💪");
} else {
  showMessage("晚上好！记得休息 🌙");
}
```

### 3. 点击计数器

```javascript
let clickCount = 0;
pet.addEventListener('click', () => {
  clickCount++;
  if (clickCount % 10 === 0) {
    showMessage(`你已经点击我 ${clickCount} 次了！🎉`);
  }
});
```

---

## 🎨 主题配色

两个桌宠都使用紫金色配色：

| 元素 | 颜色 | 色值 |
|------|------|------|
| 主色调 | 紫色 | `#6B46C1` |
| 强调色 | 金色 | `#D4AF37` |
| 对话框边框 | 金色 | `#D4AF37` |
| 阴影 | 紫色 | `rgba(107, 70, 193, 0.3)` |

---

## 🔧 故障排除

### Live2D 不显示
- 检查网络连接（需要加载 CDN 资源）
- 检查浏览器控制台错误
- 尝试刷新页面

### 位置不对
- 修改 `position: fixed` 的坐标
- 调整 `right` 和 `bottom` 值

### 对话框不显示
- 检查 `dialog.enable` 是否为 `true`
- 检查一言 API 是否可用

---

## 📚 参考链接

- **Live2D 官网**: https://www.live2d.com/
- **Live2D Widget**: https://github.com/xiazeyu/live2d-widget.js
- **一言 API**: https://hitokoto.cn/
- **模型资源**: https://github.com/xiazeyu/live2d-widget-models

---

## 📝 更新日志

### v1.0 (2026-02-03)
- ✅ 添加 Live2D 看板娘支持
- ✅ 添加 CSS 紫金小精灵
- ✅ 紫金色主题配色
- ✅ 响应式适配
- ✅ 对话气泡系统

---

**现在你的博客将有一个可爱的桌宠陪伴访客！🦋✨**
