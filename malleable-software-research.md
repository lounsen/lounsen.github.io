# Malleable Software：设计哲学、技术路线与影响范围

> 可塑软件（Malleable Software）是一种设计哲学和技术运动，主张软件应像粘土一样可被用户重塑，而非像密封电器一样不可改变。本文档系统梳理其思想渊源、发展历程、技术架构和影响范围。

---

## 一、核心定义与设计哲学

### 1.1 什么是可塑软件

> "个人计算的初始承诺是一种新型粘土——用户可以随意重塑的可延展材料。但我们得到的是电器：在远方建造、密封、不可改变。"
> — Geoffrey Litt, Josh Horowitz, Peter van Hardenberg, Todd Matthews (2025)

**可塑软件**是一种计算生态系统，其中任何人都可以以最小的摩擦将工具适配到自己的需求。修改变得常规而非例外，适配发生在使用现场，而非通过远方公司的工程团队。

### 1.2 核心原则（Malleable Systems Collective）

| 原则 | 含义 |
|------|------|
| **易改如易用** | 软件应该像使用它一样容易被修改 |
| **全层可组合** | 从界面到功能到数据，所有层都应支持任意重组和复用 |
| **工具而非应用** | 工具应是开放式的、可组合的（菜刀），而非单一用途的（牛油果切割器）|
| **全民可控** | 所有经验水平的人都必须能保持对系统的所有权和控制 |
| **可自由分享** | 重组的工作流和体验必须能自由分享给他人 |
| **就地修改** | 修改系统应发生在使用语境中，而非通过独立的开发工具链 |
| **有趣且赋能** | 计算应该是精心制作的、有趣的、赋能的体验 |

### 1.3 三大设计模式（Ink & Switch 2025 论文）

**模式一：从使用者到创造者的缓坡（Gentle Slope）**

成功的可定制系统——电子表格、HyperCard、Flash、Notion、Airtable——遵循一个共同模式：**带有可选编程能力的媒体编辑器**。用户不需要写代码就能完成大量工作，但在需要时可以逐渐深入。

```
使用者 ──────── 定制者 ──────── 工具制造者 ──────── 平台开发者
  │                │                  │                    │
直接操作         配置/模板          脚本/公式           核心代码
```

**模式二：工具而非应用（Tools, not Apps）**

软件不应是孤立的单体应用，而应是可组合的工具，在共享数据上协作运行。类比厨房：一把好菜刀能处理无数食材（通用工具），而"牛油果专用切割器"只服务一个目的（专用应用）。

**模式三：社区性创造（Communal Creation）**

最强大的可塑系统支持用户社区之间的创作分享和协作修改。工具、模板、工作流在社区中流动和演化，形成集体智慧。

---

## 二、思想发展历程

### 2.1 第一纪元：个人计算的原始承诺（1960s-1980s）

| 时间 | 里程碑 | 核心人物 | 意义 |
|------|--------|----------|------|
| 1962 | 《增强人类智力》| Douglas Engelbart | 计算机应增强人的思维能力 |
| 1968 | "所有演示之母" | Engelbart | 首次展示协作编辑、超文本、窗口系统 |
| 1972 | Smalltalk | Alan Kay, Dan Ingalls | 用户可在运行时修改系统的任何部分；"个人动态媒介" |
| 1972 | Dynabook 论文 | Alan Kay | "面向所有年龄孩子的个人电脑"——工具、玩具和媒介的统一体 |
| 1974 | *Computer Lib* | Ted Nelson | "人们能够且必须现在就理解计算机" |
| 1979 | VisiCalc | Dan Bricklin | 第一个成功的终端用户编程环境——电子表格 |
| 1980 | *Mindstorms* | Seymour Papert | 建构主义：人在建造具体事物时学得最好 |
| 1987 | HyperCard | Bill Atkinson | "让非程序员组合交互信息的软件搭建套件"；预发行代号为 Wildcard |

**这一时期的关键洞见**：计算机不只是工具，更是**媒介**——人们不仅应该使用它，还应该在其中创造。Smalltalk 的设计目标是"让儿童能轻松构建模拟并随意修改系统"。

### 2.2 第二纪元：可定制系统与终端用户编程（1990s-2010s）

| 时间 | 里程碑 | 核心人物 | 意义 |
|------|--------|----------|------|
| 1990 | "User-Tailorable Systems" | MacLean, Carter, Moran, Mørch | 可定制系统的开创性论文；"按钮"可在社区中传播扩散 |
| 1993 | *A Small Matter of Programming* | Bonnie Nardi | 终端用户编程的奠基性著作；识别电子表格和CAD为成功范例 |
| 1993 | Tcl/Tk | John Ousterhout | 嵌入式脚本语言的范式——让应用可被脚本扩展 |
| 2003 | Greasemonkey | Aaron Boodman | 浏览器用户脚本——用户修改自己不拥有的应用 |
| 2011 | *End-User Software Engineering* 综述 | Ko, Abraham, et al. | 全面综述EUSE领域；确认约5000万终端用户程序员 |

**这一时期的关键张力**：
- 电子表格成为世界上最成功的编程环境（数亿用户），但其模型无法扩展到所有领域
- 浏览器扩展证明了"修改你不拥有的软件"是可行的，但始终是边缘实践
- 低代码/无代码平台（Microsoft Access, FileMaker Pro）兴起，但受限于特定领域

### 2.3 第三纪元：可塑软件的正式理论化（2015-2020）

| 时间 | 里程碑 | 核心人物 | 意义 |
|------|--------|----------|------|
| 2015 | Webstrates | Clemens Klokmose et al. | "可分享的动态媒介"——将网页变为协作的、可塑的基底（substrate）|
| 2019 | *Designing and Programming Malleable Software* | Philip Tchernavskij | 首篇以"可塑软件"为标题的博士论文；提出entangler编程模型 |
| 2019 | Malleable Systems Collective 成立 | J. Ryan Stinnett et al. | 建立社区、目录和设计原则 |
| 2019 | Local-First Software 论文 | Ink & Switch | "七个理想"：数据所有权、离线优先、协作兼容 |
| 2020 | Wildcard | Geoffrey Litt | 用电子表格驱动的方式定制现有 Web 应用 |

**Tchernavskij 的三个核心属性**（2019 博士论文）：

1. **加法式修改**（Additive Modification）：通过创建新模块并附加到现有系统来适配，而非重写现有代码
2. **稳定可寻址性**（Stable Addressability）：系统的每个部分都可以从外部引用，且引用长期有效
3. **可外部化**（Externalizability）：系统的所有元素都可以被表示为数据、分享和传输

**Webstrates 的四个原则**：
1. **可塑性**（Malleable）：用户可以按个人方式占用和改造工具
2. **可分享性**（Shareable）：用户可以在多个层面无缝协作
3. **可分布性**（Distributable）：跨异构设备和平台
4. **可计算性**（Computable）：支持文档内的自定义计算

### 2.4 第四纪元：LLM 时代的可塑软件（2023-2026）

| 时间 | 里程碑 | 核心人物 | 意义 |
|------|--------|----------|------|
| 2023 | "Malleable Software in the Age of LLMs" | Geoffrey Litt | 首次系统探讨 AI 对可塑软件的催化效应 |
| 2023 | Embark | Sonnentag, Obenauer, Litt | 动态文档用于旅行规划——验证"文档到应用"的渐进模式 |
| 2024 | Patchwork | Ink & Switch | 基于 Automerge 的版本控制协作环境——代码和文档统一管理 |
| 2025 | 《Malleable Software》论文 | Litt, Horowitz, van Hardenberg, Matthews | 集大成之作——综合十年研究和原型经验 |
| 2025 | Geoffrey Litt 加入 Notion | — | 研究理念进入主流产品 |
| 2025 | ARIA Safeguarded AI Programme | Ink & Switch | 可塑软件理念应用于安全关键 AI 系统建模 |
| 2025 | Moldable AI 桌面应用 | — | 基于 Tauri + React 的可塑个人 AI 系统 |
| 2026 | GAIOS | Ink & Switch | 基于 Patchwork 的协作建模平台，服务英国政府 AI 安全计划 |
| 2026 | CHI 2026 GenUI Workshop | 多位研究者 | "对话式定制"——LLM 驱动的运行时界面可塑性 |

**LLM 带来的范式转变**：

AI 代码生成降低了编程的门槛，但 Ink & Switch 论文明确指出，**AI 编码本身并不能解决可塑性的所有障碍**：

> "即使我们假设每个计算机用户都能完美地编写和编辑代码，仍然有一些大问题没有解决：
> - 用户如何修改他们已安装的现有工具，而不只是制作新的孤立应用？
> - AI 生成的工具如何相互组合，在共享数据上构建更大的工作流？
> - 我们如何让用户对软件进行更直接、精确的微调控制，而不需要为最小的改变都求助于 AI？"

---

## 三、技术路线与架构

### 3.1 Ink & Switch 技术栈

```
┌─────────────────────────────────────────────────┐
│                 用户层                            │
│   Patchwork / GAIOS (协作可塑环境)                │
├─────────────────────────────────────────────────┤
│                 应用层                            │
│   版本控制 · 分支合并 · 编辑组 · 动态历史          │
├─────────────────────────────────────────────────┤
│                 认证层                            │
│   Keyhive (基于能力的访问控制)                     │
│   BeeKEM (并发友好的群组密钥协商)                  │
├─────────────────────────────────────────────────┤
│                 同步层                            │
│   Subduction (P2P 加密同步协议)                    │
│   Beelay (端到端加密的 Automerge 同步)             │
├─────────────────────────────────────────────────┤
│                 数据层                            │
│   Automerge (CRDT JSON 文档)                      │
│   Automerge Repo (文档管理 + 存储/网络适配器)       │
├─────────────────────────────────────────────────┤
│                 传输层                            │
│   WebSocket · HTTP Long-poll · Iroh (QUIC)        │
└─────────────────────────────────────────────────┘
```

**核心技术选择**：

| 技术 | 作用 | 为什么选它 |
|------|------|-----------|
| **Automerge** | CRDT 数据库 | 无中心服务器的冲突自由合并；完整变更历史；精确差异计算 |
| **Keyhive** | 访问控制 | 能力模型(capabilities)适配本地优先；支持离线场景下的权限管理 |
| **Subduction** | P2P 同步 | 加密友好（同步时不触碰明文）；确定性分块；最小化传输 |
| **CRDT 分支/合并** | 版本控制 | 并发编辑后仍能合理合并——与 Git 的分支/合并概念相通 |

**关键洞见**：Automerge 为支持本地优先软件而设计的内部机制（变更追踪、冲突解决、并发编辑合并），恰好也是版本控制界面所需的基础能力。这不是巧合——并发离线编辑和版本控制本质上需要相同的底层技术。

### 3.2 研究原型演进

```
PushPin (2018)     Farm (2019)      Potluck (2022)    Embark (2023)    Patchwork (2024-26)
   │                  │                │                 │                  │
   │                  │                │                 │                  │
协作画布          Elm 语言          文本→工具          旅行规划          版本控制
+ 小卡片          工具创作          渐进丰富           动态文档          + 分支合并
+ 实时同步        + Automerge       + 数据提取         + 结构化数据      + GAIOS
                  文档存储          + 公式计算         + 地图/日历        + AI 建模
```

**Potluck（2022）**：
- 纯文本 → 交互工具的渐进丰富
- 三部分：活搜索（提取结构数据）、公式（计算）、动态注释（显示）
- 验证了食谱管理、运动追踪、家务管理等个人工具场景

**Embark（2023）**：
- 聚焦旅行规划领域——需要在多个应用间手动协调的真实痛点
- 三个原语：提及（结构化数据）、公式（计算天气/路线）、视图（地图/日历）
- 关键改进：深度真实使用驱动设计，团队用它规划自己的真实旅行

**Patchwork（2024-2026）**：
- 将代码和文档统一为 Automerge 文档管理
- 版本控制工具应用于所有内容——无论是文章还是软件代码
- 核心创新：Edit Groups（将历史变更按作者和逻辑分组）、简单分支

### 3.3 Webstrates 技术路线（Aarhus University / Télécom Paris）

```
浏览器 DOM ──→ 持久化 ──→ 实时同步 ──→ 协作编辑
     │              │            │            │
  HTML/CSS/JS    服务端存储    WebSocket     OT/CRDT
     │              │            │            │
  用户可直接     修改即持久     多人实时      无冲突
  用DevTools                   协作         合并
  编辑代码
```

Webstrates 的激进之处：**浏览器的 DOM 就是文档**。用 DevTools 修改页面就是"编程"，修改会被自动持久化和同步。这消除了"开发者"和"用户"之间的技术壁垒。

### 3.4 Tchernavskij 的 Entangler 模型

```
系统组件 A ──┐
             ├── co-occurrence（共现条件）──→ entangler ──→ entanglement（交互行为）
系统组件 B ──┘

当组件 A 和 B 同时存在于系统中时，entangler 动态组装它们之间的交互关系。
当任一组件离开，交互自动解除。
```

这个模型的核心价值：交互不是硬编码的，而是在系统组件"相遇"时动态产生的——这使得系统天然支持模块的自由组合和分离。

---

## 四、影响范围

### 4.1 学术影响

| 领域 | 具体影响 |
|------|---------|
| **CHI（人机交互）** | CHI 2025: Malleable Overview-Detail Interfaces; JenY (生成式可塑UI); CHI 2026: GenUI Workshop 专题讨论 |
| **UIST** | Webstrates (2015), Wildcard (2020) 等发表于顶级系统会议 |
| **LIVE Workshop** | Ink & Switch 在 LIVE 2023/2025 持续展示动态文档研究 |
| **Programming 会议** | Renkon-Pad (2025)——响应式自持续编程 |
| **引用网络** | 2025 论文被 2026 年 CHI、arXiv 大量引用为"可塑AI界面"理论基础 |

**2026 年最新学术方向**（CHI 2026 GenUI Workshop）：
- **运行时可塑性**：MorphGUI 证明 LLM 驱动的实时 GUI 属性修改可行
- **渐进式生成**：让定制选项随使用而渐进可发现
- **对话式定制**：通过自然语言对话修改生产力系统

### 4.2 产品影响

| 产品/平台 | 可塑性体现 | 与论文的关系 |
|-----------|-----------|-------------|
| **Notion** | 文档→数据库→工具的渐进模式；Geoffrey Litt 直接加入 | 论文作者加入产品团队 |
| **Airtable** | 多视图共享数据库；通用工具（网格、看板、日历）| 论文中作为"工具而非应用"正面案例 |
| **Coda** | 文档内嵌公式和交互组件 | "文档到应用"模式的商业化 |
| **Retool** | 低代码内部工具构建 | 技术用户的可塑性实践 |
| **Val Town** | 轻量级代码部署 + 分享 | 社区性创造的开发者版本 |
| **Excel/Google Sheets** | 论文中"最成功的终端用户编程环境" | 缓坡模式的经典范例 |
| **Figma** | 通用无限画布 + 插件 + 组件库 | Andy Matuschak 笔记中引用为"出人意料的通用工具" |

**Geoffrey Litt 加入 Notion 的三个理由**（他的公开信）：

1. **"文档到应用"思维的最佳体现**：Notion 已经实现了从简单文档逐步升级为强大软件工具的模式
2. **分发模型**：用户可以轻松在团队内分享工具、发布模板到社区——这是传统应用商店无法提供的轻量级分发
3. **AI 时代的民主化软件创造**：没有公司比 Notion 更适合在 AI 时代推动这一使命

### 4.3 社区影响

**Malleable Systems Collective**：
- 2019 年成立，由 J. Ryan Stinnett 发起
- 维护项目目录（Catalog）、论坛（Forum）、Matrix 聊天室
- 年度 Digest（2024、2025）记录集体进展
- 2024 年启动 "Challenge Problem" 活动（首期主题："Fearless Extensibility"）
- GitHub 仓库持续更新至 2025 年 12 月

**Local-First Conf**：
- 2024 年首届、2025 年第二届、2026 年第三届
- 2026 年重点议题包括"LLM 时代的可塑软件"
- 连接自主主权身份、加密通信、游戏开发等相邻社区

**Future of Coding**：
- 播客和社区（futureofcoding.org）
- 长期讨论可塑软件、终端用户编程、可视化编程等话题

### 4.4 新兴项目生态

| 项目 | 年份 | 描述 |
|------|------|------|
| **Moldable AI** | 2026 | 基于 Tauri + React 的可塑个人 AI 系统（桌面应用）|
| **Lopecode** | 2025 | 自编辑、自托管、可嵌入的 Observable notebooks |
| **Tote** | 2025 | 多集合重写语言 |
| **GAIOS** | 2025-26 | Ink & Switch 为英国 ARIA 安全 AI 计划构建的协作建模平台 |
| **Folk Computer** | 2022-present | Dynamicland 理念的开源实现——物理空间中的可塑计算 |
| **ComfyClaw** | 2026 | ComfyUI 中的可视化 agent 工作台 |

### 4.5 与 Dynamicland 的深层关联

可塑软件运动和 Dynamicland 共享相同的知识谱系和核心关怀，但在不同维度展开：

| 维度 | Dynamicland | 可塑软件运动 |
|------|-------------|-------------|
| **物理性** | 计算在物理空间中发生 | 计算在屏幕内但用户可重塑 |
| **社区性** | 面对面协作 | 在线协作 + 社区分享 |
| **可见性** | 程序代码可见（印在纸上） | 源代码可访问可编辑 |
| **全民性** | 非专业人士可参与 | 降低编程门槛 |
| **非商品性** | 非营利、非产品 | 学术研究 + 商业产品混合 |
| **技术基础** | Realtalk（自托管空间计算）| Automerge + CRDT + P2P |
| **核心比喻** | "房间就是计算机" | "软件是粘土" |

Geoffrey Litt 的 Wildcard 项目直接受 Dynamicland 和 HyperCard 启发——论文中引用 Dynamicland 为"让非专业用户频繁创建和修改软件以满足自身需求的动态媒介"的代表。

---

## 五、关键人物图谱

### 5.1 核心推动者

| 人物 | 角色 | 核心贡献 |
|------|------|---------|
| **Geoffrey Litt** | Notion 设计工程师；前 Ink & Switch 高级研究员；MIT PhD | Wildcard, Potluck, Embark, Patchwork; 《Malleable Software》论文第一作者 |
| **Josh Horowitz** | Ink & Switch 研究员 | Patchwork 核心开发者；《Malleable Software》论文共同作者 |
| **Peter van Hardenberg** | Ink & Switch 创始人；Automerge 负责人 | Local-First Software 论文; Automerge 架构 |
| **Todd Matthews** | Ink & Switch 研究员 | 《Malleable Software》论文共同作者 |
| **Philip Tchernavskij** | Université Paris-Saclay 研究者 | 首篇"可塑软件"博士论文；entangler 编程模型 |
| **Clemens Klokmose** | Aarhus University 教授 | Webstrates 发明者；"计算媒介"概念 |
| **J. Ryan Stinnett** | Malleable Systems Collective 创始人 | 社区建设和项目目录维护 |
| **Michel Beaudouin-Lafon** | Université Paris-Saclay 教授 | ERC ONE 项目负责人；Tchernavskij 博士导师 |

### 5.2 相邻领域关键人物

| 人物 | 领域 | 与可塑软件的关系 |
|------|------|-----------------|
| **Bret Victor** | Dynamicland / 动态媒介 | 思想先驱——"人道的动态媒介"、"全民计算素养" |
| **Alan Kay** | Smalltalk / Dynabook | 历史根基——"超媒介"、运行时可修改的系统 |
| **Andy Matuschak** | 思维工具 | 在笔记中维护"可塑软件"概念索引；关注动态媒介和个人工具 |
| **Bonnie Nardi** | 终端用户编程 | 理论奠基——1993 年著作定义了该领域 |
| **Alexander Obenauer** | 个人计算 | Embark 共同设计者；探索超越应用的计算模式 |
| **Brooklyn Zelenka** | 分布式系统 | Keyhive 和 Subduction 的核心开发者 |
| **Paul Sonnentag** | 交互设计 | Potluck 和 Embark 的核心开发者 |

---

## 六、批评与未解决问题

### 6.1 来自 AI 编码阵营的张力

2025-2026 年的 AI 编码工具（Cursor、Claude Code、Replit Agent）正在以不同方式"解决"用户创造软件的问题：

| 方法 | 可塑软件的立场 |
|------|--------------|
| AI 生成一次性应用 | 不够——生成的工具无法相互组合、无法在共享数据上构建工作流 |
| AI 代码助手 | 有帮助但不充分——即使人人能写代码，仍缺少持久化定制的基础设施 |
| 对话式界面修改 | 方向正确——但需要解决修改的持久性、可分享性、可组合性 |

**Ink & Switch 的核心论点**：AI 是催化剂，但不是解药。真正的可塑性需要**架构层面的变革**——共享数据模型、可组合工具、轻量级分发。

### 6.2 安全与信任问题

- Malleable Systems Forum 的 "Fearless Extensibility" 挑战问题直面这一矛盾
- 如果用户可以修改一切，如何防止恶意代码？
- Keyhive 的能力模型（capabilities）是一种尝试：细粒度权限控制，而非全有全无

### 6.3 经济模型问题

- 如果用户可以自由修改软件，SaaS 公司如何盈利？
- Geoffrey Litt 的回答：Notion 式模型——平台提供基础设施，用户创造和分享工具
- 开源 + 社区模型 vs. 商业平台模型的张力持续存在

### 6.4 复杂性与可维护性

- Andy Matuschak 在笔记中引用这一担忧
- 用户修改后的系统如何升级？如何调试？
- Geoffrey Litt 的比喻："像装修家居一样——我不希望每天一切被重新排列，我希望有权移动家具"

---

## 七、时间线总览

```
1962 ─── Engelbart: 增强人类智力
1972 ─── Kay: Smalltalk + Dynabook
1974 ─── Nelson: Computer Lib
1979 ─── Bricklin: VisiCalc（电子表格）
1980 ─── Papert: Mindstorms
1987 ─── Atkinson: HyperCard
1990 ─── MacLean et al.: User-Tailorable Systems
1993 ─── Nardi: A Small Matter of Programming
2003 ─── Greasemonkey（浏览器用户脚本）
2011 ─── Ko et al.: EUSE 综述
2014 ─── Bret Victor: The Humane Representation of Thought
2015 ─── Klokmose: Webstrates
2017 ─── Dynamicland 社区空间开放
2019 ─── Tchernavskij: 可塑软件博士论文
2019 ─── Malleable Systems Collective 成立
2019 ─── Ink & Switch: Local-First Software
2020 ─── Litt: Wildcard
2022 ─── Ink & Switch: Potluck
2023 ─── Ink & Switch: Embark
2023 ─── Litt: Malleable Software in the Age of LLMs
2024 ─── Ink & Switch: Patchwork
2024 ─── Dynamicland 网站全面更新
2025 ─── Ink & Switch:《Malleable Software》论文
2025 ─── Litt 加入 Notion
2025 ─── ARIA Safeguarded AI Programme
2025 ─── Moldable AI 桌面应用
2026 ─── GAIOS + Keyhive + Subduction
2026 ─── CHI 2026: Conversational Customization / GenUI
```

---

## 八、关键链接

### 核心文献
- **Ink & Switch 论文**: https://www.inkandswitch.com/essay/malleable-software/
- **Malleable Systems Collective**: https://malleable.systems/
- **项目目录**: https://malleable.systems/catalog/
- **论坛**: https://forum.malleable.systems/
- **Tchernavskij 博士论文**: https://theses.hal.science/tel-02612943

### 研究原型
- **Patchwork**: https://www.inkandswitch.com/patchwork/notebook/
- **Potluck**: https://www.inkandswitch.com/potluck/
- **Embark**: https://www.inkandswitch.com/embark/
- **Webstrates**: https://webstrates.net/
- **Wildcard**: https://www.geoffreylitt.com/wildcard/
- **Automerge**: https://automerge.org/
- **Keyhive**: https://www.inkandswitch.com/project/keyhive/

### 人物
- **Geoffrey Litt**: https://www.geoffreylitt.com/
- **Ink & Switch**: https://www.inkandswitch.com/
- **Andy Matuschak 笔记 — 可塑软件**: https://notes.andymatuschak.org/zGL5Kx3PXVwb6b8h2xUKqNd
- **Philip Tchernavskij**: https://ex-situ.lri.fr/people/tchernavskij/

### 相关社区
- **Local-First Conf**: https://www.localfirstconf.com/
- **Future of Coding**: https://futureofcoding.org/
- **Folk Computer**: https://folk.computer/
