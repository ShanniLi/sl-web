# Builder Journal — Shanni's Website

[校准] 2026-05-10 本次任务"足够好"=
  必须：完整网站设计方案（IA、视觉系统、页面布局、响应式策略）
  应该：色号、字体、无障碍方案、技术栈建议
  可以：HTML/CSS 原型

[战果] 2026-05-10 内容盘点完成 — 4大板块：Art Contest (1st Place 2025)、Flute获奖、Art4Earth Club、Process photos
[战果] 识别根因 — 前5次超时因为过度分析无产出，本次直接产出设计决策

[战果] 2026-06-03 site-improved-v2 完成并验证 — index.html(25KB)/style.css(25KB)/main.js(6.8KB)，含优化后 .jpg 图集。
  保留旧版 site-improved（5/31），新版 site-improved-v2 为最终改进版。
  验证：本地静态服务 200；浏览器 smoke test 零运行时异常/零 console error/零失败请求；
  19 个交互元素全部可用（导航汉堡菜单、lightbox 开关/上一张/下一张、全部画廊图）；
  桌面 1440x900 与移动 390x844 截图均成功渲染。
  特性：语义化+无障碍（skip-link、aria、scroll-spy）、Open Graph/Twitter 卡片、响应式、masonry 画廊、lightbox、About/Art/Awards/Music/Art4Earth/Contact 全板块。

[战果] 2026-06-05 site-improved-v3 完成并验证 — 在 v2 基础上的净增改进版（v2 完整保留）。
  核心改进：完成 Tier 3 唯一未实现项 —— 全部 17 处 <img>(.jpg) 包裹进 <picture>，
  新增 19 个 .webp 源（Pillow q82/method6），CSS 加 `picture{display:contents}` 保持布局透明。
  收益：图片交付体积 12MB(JPG) → 2.3MB(WebP)，约省 61%；旧浏览器自动回退 .jpg。
  OG/Twitter/收藏夹图标保留 .jpg/.png（社交抓取兼容）。
  验证：本地静态服务 200；浏览器 smoke test 零运行时异常/零 console error/零失败请求（所有 webp 加载成功）；
  19 个交互元素全部可用；桌面 1440x900 与移动 390x844 截图渲染成功，布局与 v2 一致。
  注：环境无 cwebp/avifenc/magick 且 sips 不在 shell 白名单，故用 Python Pillow 生成 WebP（已确认 webp 支持）。
