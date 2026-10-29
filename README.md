# B面 · LuckyOneTwoThree

个人站。白天做产品，晚上研究什么值得熬夜。

## 开发

```bash
npm install
npm run dev
```

打开 `http://localhost:4321`。

## 构建

```bash
npm run build
npm run preview
```

构建输出在 `dist/`。

## 内容

- 项目：`src/content/work/*.md`
- 夜记 / 短记：`src/content/notes/*.md`
- 榜单：`src/data/tier.ts`
- 此刻：`src/data/now.ts`
- 人物：`src/data/about.ts`
- 视觉 token / 全站样式：`src/styles/global.css`
- 页面样式：`src/styles/pages.css`

## 已实现的细节

- 多页面导航：首页 / 出品 / 夜记 / 文化 / 更正 / 人物 / 此刻
- 每篇文章 / 项目页 A/B 面切换，`?side=b` 可分享
- 首页手牌按时间筛选 + 换一手
- 榜单按媒介筛选
- 日夜场切换，记忆在 localStorage；`?theme=day` 可直达日场
- 阅读进度、目录、复制链接
- 404 Pong、Konami code、唱片可暂停、控制台彩蛋
