export type Tier = 'S' | 'A' | 'B' | 'C' | 'D';
export type TierItem = {
  slug: string;
  title: string;
  medium: '游戏' | '番剧 / 美剧';
  year: string;
  tier: Tier;
  verdict: string;
  why: string;
  duration: string;
  mood: string;
  spoiler: '无' | '低' | '高';
  featured?: boolean;
};

export const tierItems: TierItem[] = [
  { slug: 'rdr2', title: '荒野大镖客 2', medium: '游戏', year: '2018', tier: 'S', verdict: '把西部做成一个可以慢慢生活的地方。', why: '它不急着让你通关，而是让你在营地、马匹和陌生人之间待着。最后你记住的不是任务，是那段时间。', duration: '通宵', mood: '一个不赶时间的周末', spoiler: '低', featured: true },
  { slug: 'gta-v', title: 'GTA V', medium: '游戏', year: '2013', tier: 'S', verdict: '城市、犯罪和讽刺，做成一个可持续的玩具箱。', why: '三个主角、一座城市、无数种胡闹方式。它的真正玩法不是任务，是“我今天想成为谁”。', duration: '2 小时', mood: '想胡闹但又不想动脑', spoiler: '低', featured: true },
  { slug: 'p5r', title: '女神异闻录 5 皇家版', medium: '游戏', year: '2019', tier: 'A', verdict: '把日常、关系和回合制拧成一条时间线。', why: '白天上学、晚上进宫殿，时间本身就是资源。它让“今天做什么”变成一种角色塑造。', duration: '2 小时', mood: '想被 UI 和音乐推着走', spoiler: '低' },
  { slug: 'zelda-botw', title: '塞尔达传说：旷野之息', medium: '游戏', year: '2017', tier: 'A', verdict: '看见那座山，然后真的走过去。', why: '它不给你一条最优路线，而是给你一套可以互相作用的规则。好奇心是唯一的任务指引。', duration: '2 小时', mood: '想探索而不是清任务', spoiler: '无' },
  { slug: 'death-stranding', title: '死亡搁浅', medium: '游戏', year: '2019', tier: 'B', verdict: '把走路本身做成游戏。', why: '它敢让“送快递”成为核心，并且真的把地形、重量和孤独做成玩法。喜欢的人会非常喜欢。', duration: '通宵', mood: '想一个人安静走很久', spoiler: '低' },
  { slug: 'hsr', title: '崩坏：星穹铁道', medium: '游戏', year: '2023', tier: 'B', verdict: '把银河尺度的概念本体论装进回合制。', why: '命途和星神的世界观是它最锋利的部分；剧情有高峰，也有收尾不稳的时候。', duration: '长期', mood: '想追一条银河公路', spoiler: '低' },
  { slug: 'this-is-us', title: '我们这一天', medium: '番剧 / 美剧', year: '2016–2022', tier: 'S', verdict: '把普通人的时间线拆开给你看。', why: '它不靠强情节，靠时间和关系。你会在某一集突然理解一个你以前不理解的人。', duration: '通宵', mood: '想被温柔地击一下', spoiler: '低', featured: true },
  { slug: 'prison-break', title: '越狱', medium: '番剧 / 美剧', year: '2005–2017', tier: 'S', verdict: '把越狱做成一场持续升级的工程。', why: '第一季的工程感和节奏几乎是教科书级别；后面越走越夸张，但那种“下一步怎么办”的钩子很有效。', duration: '通宵', mood: '想一口气追下去', spoiler: '低' },
  { slug: 'breaking-bad', title: '绝命毒师', medium: '番剧 / 美剧', year: '2008–2013', tier: 'A', verdict: '把一个人如何一步步变成另一个人拍给你看。', why: '它不是突然黑化，而是每一次选择都只多偏一点。你会在某个时刻发现自己已经站在他那边很久了。', duration: '2 小时', mood: '想看一场慢燃的崩坏', spoiler: '低' },
  { slug: 'friends', title: '老友记', medium: '番剧 / 美剧', year: '1994–2004', tier: 'A', verdict: '一群人在同一间屋子里，变成长期陪伴。', why: '它的结构很老派，但“随时可以打开一集”的陪伴感很难替代。', duration: '20 分钟', mood: '想下饭或睡前放空', spoiler: '无' },
  { slug: 'tbbt', title: '生活大爆炸', medium: '番剧 / 美剧', year: '2007–2019', tier: 'B', verdict: '把聪明人的幼稚写成日常喜剧。', why: '它的人物标签很重，但一旦接受设定，节奏和梗的密度很高。', duration: '20 分钟', mood: '想无脑笑一会儿', spoiler: '无' },
  { slug: 'sherlock', title: '神探夏洛克', medium: '番剧 / 美剧', year: '2010–2017', tier: 'B', verdict: '把推理变成节奏和人格的表演。', why: '它的推理未必经得起细抠，但节奏、台词和两位主角的化学反应很强。', duration: '2 小时', mood: '想看点聪明人斗嘴', spoiler: '低' },
];

export const tiers: Tier[] = ['S', 'A', 'B', 'C', 'D'];
