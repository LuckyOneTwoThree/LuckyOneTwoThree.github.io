---
title: harness-all
oneLiner: 给 AI 原生研发的交付治理层
dek: A local-first governance & delivery protocol layer for AI product R&D — not another multi-agent runtime.
status: 已发布 · 暂停维护
role: 产品与架构 / 治理协议 / 领域包与契约 / 实现与文档
timeframe: "2026.06–07"
lastUpdate: "2026-07-16"
order: 3
featured: true
themes: [Agent, 治理, 契约]
stack: [Markdown, YAML, JSON, PowerShell]
links:
  github: https://github.com/LuckyOneTwoThree/harness-all
bside:
  context: Agent 工具换得越来越快，项目的记忆却锁在某个工具的聊天历史里。
  cut: 不做 runtime、不做编排器、不做可视化调试器；只做它们不做的那一层。
  wrong: 规则当前主要靠 Agent 自觉，L2 机器强制还没落地。
  next: 先把 L2 机器强制做出来，再谈扩展包。
---

它坐在 Claude Code / Cursor / Trae / Codex 之上，给它们持久项目记忆、领域 SOP、契约式交接和质量门禁。

**它不是另一个 multi-agent runtime。** Runtime 决定“哪个 Agent 先跑、怎么跑、怎么传消息”；harness-all 决定“项目三个月后还记得什么、怎么交接、什么算 done”。

### 它是什么

- 两个领域包：`harness-pm`（84 skills / 11 workflows）+ `harness-engineering`（25 / 9）。
- 本地文件是 source of truth；Agent 工具是可替换的执行客户端。
- 契约式交接：PRD + AC 编号 + API contract + 设计资产路径 + 路由字段 + SHA-256 manifest + receipt。
- “done”是治理状态，只由 code-review 写；迭代 10 次硬熔断。
- 领域包独立，不共享可变状态；跨域只传最小显式契约。

### 三个取舍

1. **协议层，不是 runtime。** 不和 CrewAI/LangGraph 抢调度；做它们不做的那一层。
2. **本地文件，不是聊天记录。** 换工具不丢项目；索引可重建。
3. **契约，不是自由聊天。** 交接是版本化包，消费者只读；反向反馈走单独契约。

### 证据

- v3.0；2 frameworks；109 skills；20 workflows；2 handoffs；10 loop types；MIT。
- 具体使用数据/团队反馈：暂无公开数据。
