export type HandCard = {
  href: string;
  kicker: string;
  title: string;
  desc: string;
  meta: string;
  lead?: boolean;
};

export const hands: HandCard[][] = [
  [
    { href: '/notes/greenhouse', kicker: '夜记 / 长文', title: '温室里没有风', desc: '当执行不再有摩擦力，我们去哪里寻找那场“美丽的误会”。', meta: '18 分钟 · 首发', lead: true },
    { href: '/notes/corrections', kicker: '更正 / 星铁', title: '我写过两版相反的星铁', desc: '为什么后来我把一个漂亮结论作废了。', meta: '6 分钟' },
    { href: '/culture', kicker: '文化 / 榜单', title: '夯到拉', desc: 'S 不是神作，是我愿意为它熬夜。', meta: '12 条 · 3 分钟' },
  ],
  [
    { href: '/work/nightowl', kicker: '项目 / 足球', title: '夜猫看台', desc: '今晚哪场球值得熬。', meta: '运行中 · v0.1.40 · 5 分钟', lead: true },
    { href: '/work/reckoner', kicker: '项目 / 决策 OS', title: 'Reckoner', desc: '一个会顶嘴、有记忆的决策内核。', meta: '已发布 · 暂停 · 12 分钟' },
    { href: '/work/harness-all', kicker: '项目 / 治理', title: 'harness-all', desc: '给 AI 原生研发的交付治理层。', meta: '已发布 · 暂停 · 15 分钟' },
  ],
  [
    { href: '/work/reckoner', kicker: '项目 / 决策 OS', title: 'Reckoner', desc: '把假设当负债管理。', meta: '已发布 · 暂停 · 12 分钟', lead: true },
    { href: '/notes/tool-not-coworker', kicker: '短记 / AI', title: 'AI 是工具，不是因为它无能', desc: '而是因为它不担责。', meta: '1 分钟' },
    { href: '/culture', kicker: '文化 / 榜单', title: '荒野大镖客 2', desc: '把西部做成一个可以慢慢生活的地方。', meta: 'S · 通宵' },
  ],
];
