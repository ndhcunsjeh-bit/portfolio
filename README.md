# yy 的个人作品集

基于 [Once UI · Magic Portfolio](https://github.com/once-ui-system/magic-portfolio)（MIT / 需保留页脚署名）改的版本。
Next.js 16 + React 19 + Once UI 组件库。

## 跑起来

```bash
pnpm install     # 第一次
pnpm dev         # http://localhost:3000
pnpm build       # 生产构建（会顺带抓 Geist 字体，需要联网）
pnpm start       # 起生产服务
```

> 说明：`next/font/google` 在构建时会去 Google Fonts 拉 Geist；网络不通时构建会卡住，
> 把 `src/resources/once-ui.config.ts` 里的字体换成 `next/font/local` 或系统字体即可。

## 改成你自己的内容

几乎所有文字都在 **`src/resources/content.tsx`**：

| 字段 | 位置 | 说明 |
| --- | --- | --- |
| 姓名 / 角色 / 邮箱 / 时区 | `person` | 时区用 IANA 名字（`Asia/Shanghai`），页头右上角的时间靠它算 |
| 头像 | `person.avatar` | `public/images/avatar.png` |
| 社交链接 | `social` | `essential: true` 的会出现在关于页 |
| 首页大标题 / 副标题 / 精选作品 | `home` | `headline`、`subline`、`featured.href` |
| 关于页 | `about` | 介绍、经历、在学习、会用的（技术栈） |
| 作品页文案 | `work` / `blog` / `gallery` | 只改标题描述 |

作品条目是 MDX，一个文件一件：**`src/app/work/projects/*.mdx`**

```mdx
---
title: "作品名"
publishedAt: "2026-06-20"
summary: "一句话介绍，会显示在卡片上"
images:
  - "/images/projects/yy/cover-xxx.jpg"
team:
  - name: "yy"
    role: "设计 + 实现"
    avatar: "/images/avatar.png"
---

## 问题
正文……（支持 Markdown / 代码块 / 表格）
```

封面图放 `public/images/projects/yy/`，建议 16:9（1600×900）。

## 站点设置

**`src/resources/once-ui.config.ts`**

- `baseURL`：换成你的真实域名（SEO / sitemap 用）
- `routes`：`/blog`、`/gallery` 现在是 `false`（没有内容先关掉），写了文章再打开
- `style`：主题（dark / light / system）、主色 `brand`、强调色 `accent`、圆角风格 `border`、毛玻璃 `surface`
- `protectedRoutes`：给某个页面加密码（密码写在 `.env` 的 `PAGE_PASSWORD`）

图标：`src/resources/icons.ts` 里已额外加了 小红书 / Bilibili / Notion / Python。

## 部署

- **Vercel（最省事）**：仓库推到 GitHub → Import → 自动识别 Next.js，不需要额外配置。
- **GitHub Pages**：需要改成静态导出（`output: "export"`），同时删掉 `src/app/api/*` 与 `src/proxy.ts`
  （它们依赖服务端）。如果要走这条路径，说一声，我来改。

## 目录

```
src/app/                 页面（/ /about /work /work/[slug]）
src/app/work/projects/   作品 MDX（改这里）
src/resources/           内容与站点配置（改这里）
src/components/          Once UI 封装组件
public/images/           图片资源
```

## 说明

- 上一版「泳池」UI 的代码整套归档在 `.archive/pool-ui-2026-11-08/`，没有删。
- 页脚保留了 Once UI 的署名链接 —— 模板协议要求。
