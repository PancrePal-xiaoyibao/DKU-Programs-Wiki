# DKU x 小X宝联合创新项目文档站

本仓库是 DKU 与小X宝社区联合创新项目的公开文档站点，面向学生团队、导师与 PMC。内容围绕项目入门、创新资源、项目协作与参考规范，支持中/英/俄多语言导航，并以 VitePress 构建。

## 主要内容

- 入门：Quick Start 与合规/角色协作指引
- 资源：创新场景、Skill 趋势、工具箱与癌症基础资料
- 项目：各项目的简报、画像与阶段文档
- 参考：流程规范、需求池等

## 目录结构（概览）

- `docs/guide/`：入门与基础指引
- `docs/resources/`：资源与创新材料
- `docs/projects/`：项目文档（含双心宝）
- `docs/references/`：流程与规范
- `docs/.vitepress/`：站点配置与主题

多语言内容按以下路径组织：
- 中文：`docs/`
- English：`docs/en/`
- Русский：`docs/ru/`

## 本地开发

```bash
npm install
npm run docs:dev
```

其他命令：

```bash
npm run docs:build
npm run docs:preview
```

## 内容维护约定

- 新文档请按「入门 / 项目 / 资源 / 参考」归类，并更新侧边栏索引（`docs/.vitepress/config.mts`）。
- 多语言内容应放在对应语言目录，避免混排。
- 站点会自动展示“上一次更新时间”（基于 git 提交时间）。

## 许可证

本项目使用 MIT License，见 `LICENSE`。
