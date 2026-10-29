---
title: Reckoner
oneLiner: 一个会顶嘴、有记忆的决策内核
dek: 给主观、可刷、易自欺的产品决策，装一个不附和、会积累的决策 OS。
status: 已发布 · 暂停维护
role: 产品负责人 / 方法论与 schema / Skill 与命令设计 / 实现与验证
timeframe: "2026.07"
lastUpdate: "2026-07-27"
order: 1
featured: true
themes: [决策, AI, Local-first]
stack: [JavaScript, Markdown, Node]
links:
  github: https://github.com/LuckyOneTwoThree/reckoner
cover: /images/work/reckoner/hero.png
bside:
  context: 它起于一个很具体的挫败：AI PM 助手每次对话都从零开始，上次的假设和证据全丢了。
  cut: P0 只做被真实用到的东西：内核回路，而不是先做一层漂亮的仪表盘。
  wrong: 我后来发现，schema 是硬约束，但诚实是软上限；它防不住 provenance 造假。
  next: 如果重来，我会把 sign-off 放得更靠前，而不是等 schema 写完再补。
---

给主观、可刷、易自欺的产品决策，装一个不附和、会积累的决策 OS。

### 为什么做

现有 AI PM 助手大多是**无状态文档生成器**，有三个反模式：

1. **没记忆**：每次对话从零开始，上次的假设和证据全部丢失。
2. **会谄媚**：倾向附和，不会真的顶你。
3. **散落结论**：结论散落在文档里，无法积累成判断资产。

Reckoner 的回应是：有记忆、会顶嘴、可追溯。

### 它是什么

- 每个 skill 跑完，把结论写回内核（`thesis` + `assumption-ledger`），跨会话留存。
- `assumption-xray`（照妖镜）做红队：拆 A/B/C/D 假设、点名裸奔、给最便宜验证和 kill 标准。
- 实验设计、证据采集、review sign-off、decide（go/pivot/kill）形成回路。
- 确定性脚本 `validate.mjs` 管 schema 和 trust ceiling；LLM 只做判断。
- 一句话：**其他 AI 在想“怎么让你爽”，Reckoner 在想“怎么让你不出丑”。**

### 三个取舍

1. **“顶嘴”的对象是假设，不是人。** 默认“风险是真的”，先 steelman 再攻击；不是抬杠。
2. **脚本管 schema，模型管判断。** 信任不能靠提示词，靠确定性校验和 trust ceiling。
3. **记忆不是聊天记录，是假设台账。** 结论回写内核，才能跨项目校准；否则只是更长的对话。

### 证据

- P0 shipped；6 skills；6 commands；schema hard-validated；CI。
- 具体使用数据/用户反馈：暂无公开数据。
