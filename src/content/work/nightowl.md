---
title: 夜猫看台
oneLiner: 熬夜看球之前，先让算法替你算一算
dek: 本机运行的观赛决策工作台。桌面 Windows + 手机 Android，赛程 / 比分 / 情报 / 直播入口，一屏看全。
status: 运行中 · v0.1.40
role: 产品负责人 / 体验与交互 / 桌面 + 移动实现 / 数据与算法 / 发布验收
timeframe: "2026.08–至今"
lastUpdate: "2026-10-29"
order: 2
featured: true
themes: [足球, 决策, Local-first]
stack: [Electron, React, Expo, TypeScript]
links:
  github: https://github.com/LuckyOneTwoThree/nightowl-web
cover: /images/work/nightowl/tonight.png
screenshots:
  - src: /images/work/nightowl/tonight.png
    alt: 夜猫看台今晚观赛界面
    caption: 今晚之选：唯一推荐 + 理由
  - src: /images/work/nightowl/schedule.png
    alt: 夜猫看台赛程日历界面
    caption: 赛程日历：日期条 + 联赛分组
  - src: /images/work/nightowl/intel.png
    alt: 夜猫看台比赛情报界面
    caption: 比赛情报与后续赛程
bside:
  context: 最早是微信群球迷小圈子的工具：3 秒内回答“今天有什么球、今晚该熬哪场”。
  cut: v1 明确不做实时比分、直播源聚合、自有账号、公开上架；后来桌面端部分越过了这条线。
  wrong: 范围扩张后，库内设计与仓库 pm/ 漂移；我低估了 SSOT 的维护成本。
  next: 先把 SSOT 定清楚，再谈双端同步。
---

欧洲五大联赛 + 欧战的比赛大量落在北京时间**凌晨 0 点到 4 点**。一个普通周末夜里会有十几场——全都看不可能，凭感觉挑又常常熬了一场 0-0。

所以它把“值不值得熬夜”变成一个**可计算的决策**。

### 它是什么

- **今晚之选**：关注球队 → 看点星级 → 夜猫指数，给出唯一推荐和理由。
- **睡眠成本分档**：按开球时间自动分 S0–S4，直接给小时数。
- **同夜推荐**：其余场次按指数排序，一键切换。
- **背包规划**：每周睡眠预算下的二维 DP，算“最多能看哪几场”的最优组合。
- **比分保鲜**：ESPN 主源 + openfootball 副源，交叉折算；缺数据明确标“上游未提供”。
- **防剧透**：已结束场次默认只显示“揭晓”，点开才看比分。
- **观赛链路**：直播源对齐、本机代理、官方平台直达、赛后官方集锦/回放搜索。
- **桌面 + Android**：不是桌面双栏的缩小版，手机端有独立形态。

### 三个取舍

1. **“少熬几场”优先于“聚合更多比赛”。** 核心不是更多赛程，而是帮你跳过不值得的场次。
2. **“宁缺勿错”优先于覆盖率。** 直播源按双方队名全等匹配；匹配不到只是没有直链，配错是把错误内容当正确结果交付。
3. **防剧透优先于实时感。** 已结束场次默认隐藏比分；通知也要防剧透。

### 证据

- v0.1.40；Windows + Android；tests passing；1897 场全季检索视图；同步约 15 秒；实时比分 30 秒轮询。
- 具体用户量/留存：暂无公开数据。
