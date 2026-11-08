import { About, Blog, Gallery, Home, Me, Newsletter, Person, Review, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "yy",
  lastName: "",
  name: `yy`,
  role: "数字经济 · Vibe Coding 独立构建者",
  avatar: "/images/avatar.png",
  email: "yy@example.com",
  location: "Asia/Shanghai", // IANA 时区：页头用它算当地时间
  languages: ["中文", "English"],
  locale: "zh-CN",
  school: {
    name: "武汉理工大学",
    logo: "/images/whut.svg",
  },
};

const newsletter: Newsletter = {
  display: false,
  title: <>订阅 {person.firstName} 的通讯</>,
  description: <>每月一封，写我这段时间在做什么</>,
};

const social: Social = [
  // 会按顺序显示；essentials: true 的会出现在关于页
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ndhcunsjeh-bit",
    essential: true,
  },
  {
    name: "小红书",
    icon: "xiaohongshu",
    link: "https://www.xiaohongshu.com/",
    essential: true,
  },
  {
    name: "Bilibili",
    icon: "bilibili",
    link: "https://space.bilibili.com/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "首页",
  title: `${person.name} — 个人作品集`,
  description: `用 AI 拓宽边界，用代码验证想法。武汉理工大学数字经济专业学生，独立构建者。`,
  headline: <>用 AI 拓宽边界，用代码验证想法</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">谷盒</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          精选作品
        </Text>
      </Row>
    ),
    href: "/work/guhe",
  },
  subline: (
    <>
      我是 {person.name}，武汉理工大学数字经济专业的学生，一个沉迷于 Vibe
      Coding 的独立构建者。AI 负责生成，我负责架构、测试、验证与担责。
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "关于",
  title: `关于 — ${person.name}`,
  description: `${person.name}：武汉理工大学数字经济专业学生，独立构建者。`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "介绍",
    description: (
      <>
        <Text variant="body-default-l">
          身处数字经济时代，我不仅学习宏观的数据与经济模型（《统计学》《数据库原理》），更渴望掌握微观的「造物」能力。
        </Text>
        <Text variant="body-default-l">
          在《数智编程技术基础》课程里，我拥抱了 AI 辅助开发。从「类我语言 Agent」到「个人博客系统」，我习惯用自然语言与
          AI 协作，但我始终清醒：<strong>AI 负责生成，而我负责架构、测试、验证与担责。</strong>
        </Text>
        <Text variant="body-default-l">
          我的开发哲学是：先跑通核心闭环，再做花哨的迭代。不追求堆砌功能，而是解决真实痛点——比如「今天中午吃什么」的世纪难题，或者用「海龟汤」检验逻辑。每一次开发我都会做好过程留痕，因为比起完美的代码，我更看重自己是否真正理解和掌控了产品。
        </Text>
      </>
    ),
  },
  work: {
    display: true,
    title: "经历",
    experiences: [
      {
        company: "独立构建",
        timeframe: "2026 - 现在",
        role: "策划 + 前端 + 测试",
        achievements: [
          <>
            从零做出四个上线的小东西：谷盒、AI 海龟汤、随机午餐、是男人就下100层，另外还有一个类我语言 Agent。
          </>,
          <>习惯用自然语言驱动 AI 生成代码，再逐行让它解释、小步修改、手动验证。</>,
          <>每个项目都留痕：截图、踩坑记录、下一版要改的三件事。</>,
        ],
        images: [],
      },
      {
        company: "武汉理工大学 · 数字经济",
        timeframe: "2026 - 现在",
        role: "学生",
        achievements: [
          <>课程主线：《概率论与数理统计》《数据库原理》《人工智能原理》。</>,
          <>把课程里的概念做成能点开的东西，而不是只停在笔记里。</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "在学习",
    institutions: [
      {
        name: "数字经济 · 专业课程",
        description: (
          <>
            《概率论与数理统计》《数据库原理》《人工智能原理》。写网页和做游戏只是训练工程思维的靶场，真正要解决的是数据背后的问题。
          </>
        ),
      },
      {
        name: "数智编程技术基础",
        description: <>系统过了一遍前端基础，并第一次把 AI 当成协作者而不是搜索引擎。</>,
      },
      {
        name: "在计划",
        description: (
          <>
            用 Python + AI 做「经济数据可视化看板」，以及一款针对大学生的轻量记账与消费分析应用——既懂经济数据怎么运转，也能敏捷把产品交出来。
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "会用的",
    skills: [
      {
        title: "AI 辅助开发（Vibe Coding）",
        description: (
          <>
            熟练编写 Prompt、管理上下文，能驱动 AI 生成代码、封面图、App 图标，甚至整款小游戏。对 AI 产物坚持「先求解释，再小步修改与测试」。
          </>
        ),
        tags: [
          { name: "Prompt 设计" },
          { name: "上下文管理" },
          { name: "AI 生图" },
        ],
        images: [],
      },
      {
        title: "全栈初探与系统设计",
        description: (
          <>
            掌握前端基础，能按设计图实现聊天页面；具备系统架构思维（如设计个人博客的系统结构），并掌握 GitHub 部署、接口对接与数据状态管理。
          </>
        ),
        tags: [
          { name: "HTML / CSS / JS", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "GitHub 部署", icon: "github" },
        ],
        images: [],
      },
      {
        title: "产品思维与真实闭环",
        description: (
          <>
            擅长从日常痛点出发（随机午饭网页、AI 海龟汤网页游戏），完成从创意策划、前端实现到部署上线的独立闭环。
          </>
        ),
        tags: [{ name: "需求拆解" }, { name: "独立上线" }],
        images: [],
      },
      {
        title: "工程规范与安全",
        description: (
          <>
            坚持代码开源与版本管理，在涉及密钥和数据的环节保持极高的安全意识，明确区分 AI 辅助与个人原创。
          </>
        ),
        tags: [{ name: "Git / GitHub", icon: "github" }, { name: "密钥管理" }],
        images: [],
      },
    ],
  },
};

const me: Me = {
  path: "/me",
  label: "个人",
  title: `个人 — ${person.name}`,
  description: `${person.name} 现在在做什么、在意什么。比「关于」随手一点。`,
  headline: <>现在这个人</>,
  intro: (
    <>
      简历式的自我介绍在「关于」里。这里只放正在发生的事：手上在做的东西、
      刚学会的一点技术，以及几条改了很多次才留下来的工作习惯。
    </>
  ),
  now: [
    {
      label: "在做",
      title: "谷盒：把谷子收进一个有账号的谷库",
      description: <>Supabase 做账号和存储，品类 / 版本 / 状态三种维度，外加一个同好广场。</>,
    },
    {
      label: "在学",
      title: "把大模型判定搬回浏览器",
      description: <>海龟汤的 GitHub Pages 版没有后端，判定改成受控词白名单 + 关键词匹配的规则链。</>,
    },
    {
      label: "在改",
      title: "100 层的难度曲线",
      description: <>三档只调节奏、陷阱密度和伤害，重力与手感三档保持一致。</>,
    },
  ],
  habits: [
    {
      title: "先跑通核心闭环",
      description: <>再花哨的迭代也救不了一个跑不通的循环。能玩、能用，才算开始。</>,
    },
    {
      title: "过程留痕",
      description: <>每一版都截图，记下为什么改。三天后回看，这些记录比代码有用。</>,
    },
    {
      title: "先求解释，再动手",
      description: <>AI 给的每一段代码都让它讲一遍。讲不通的地方，就是后面会炸的地方。</>,
    },
    {
      title: "AI 生成，我担责",
      description: <>生成不需要署名，上线出了问题得我来解释。所以测试不能省。</>,
    },
  ],
  closing: <>想聊点什么，或者只是想说这个站哪里看着别扭，都行。</>,
};

const blog: Blog = {
  path: "/blog",
  label: "日志",
  title: "写下来才算想清楚",
  description: `从 10 月 3 号开始的开发记录：每天踩的坑、改的念头、想明白的事。`,
};

const review: Review = {
  path: "/review",
  label: "复盘",
  title: "做完之后，回头看一遍",
  description: `先按项目写：每件作品做对了什么、错在哪、学到了什么。最后再整体算一次账。`,
};

const work: Work = {
  path: "/work",
  label: "作品",
  title: `作品 — ${person.name}`,
  description: `${person.name} 的项目：五个能点开就用的小东西`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "相册",
  title: `相册 — ${person.name}`,
  description: `一些随手拍`,
  images: [],
};

export { person, social, newsletter, home, about, me, blog, review, work, gallery };
