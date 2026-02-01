import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DKU x XiaoxBao',
  description: 'DKU x XiaoxBao joint innovation program documentation',
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(taskLists)
    }
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: 'DKU x 小X宝',
      description: 'DKU x 小X宝联合创新项目公开文档',
      themeConfig: {
        lastUpdatedText: '上一次更新时间',
        nav: [
          { text: '首页', link: '/' },
          { text: '项目', link: '/projects/project1-rag-gist-assistant/brief' },
          { text: '资源', link: '/resources/toolkits/tools-kit-101' },
          { text: '参考', link: '/references/github-pull-request-workflow' }
        ],
        sidebar: {
          '/': [
            {
              text: '入门',
              collapsed: true,
              items: [
                { text: 'Quick Start & Must-Know', link: '/guide/quick-start' }
              ]
            },
            {
              text: '项目',
              collapsed: true,
              items: [
                { text: 'Project 1: RAG GIST Assistant', link: '/projects/project1-rag-gist-assistant/brief' },
                { text: 'Project 1: 项目画像', link: '/projects/project1-rag-gist-assistant/profile' },
                { text: 'Project 2: RAG Osteosarcoma', link: '/projects/project2-rag-osteosarcoma/profile' },
                { text: 'Project 3: AI Toy Leukemia', link: '/projects/project3-ai-toy-leukemia/brief' },
                { text: 'Project 4: XiaoX Pal Bilingual', link: '/projects/project4-xiao-x-pal-bilingual/brief' },
                { text: 'Project 5: Gynecological Cancers', link: '/projects/project5-gynecological-cancers/brief' },
                { text: 'Project 5: Overview', link: '/projects/project5-gynecological-cancers/overview' },
                { text: 'Project 6: 双心宝', link: '/projects/project6-shuangxinbao/brief' },
                { text: 'Project 6: 开发者上手指南', link: '/projects/project6-shuangxinbao/developer-onboarding' }
              ]
            },
            {
              text: '资源',
              collapsed: true,
              items: [
                { text: '工具箱：Tools Kit 101', link: '/resources/toolkits/tools-kit-101' },
                { text: '创新场景指南', link: '/resources/innovation/innovation-scenarios-guide' },
                { text: 'Skill 热度与架构趋势', link: '/resources/innovation/ai-coding-innovation-skill-trends' },
                { text: '癌症清单', link: '/resources/learn-about-cancer/cancer-list' },
                { text: 'NCCN 2025 清单', link: '/resources/learn-about-cancer/cancer-list-nccn2025' },
                { text: '癌症报告', link: '/resources/learn-about-cancer/cancer-report' },
                { text: '小组对齐手册', link: '/resources/team-alignment-guide' }
              ]
            },
            {
              text: '参考',
              collapsed: true,
              items: [
                { text: 'GitHub PR 提交流程', link: '/references/github-pull-request-workflow' },
                { text: '社区项目说明书', link: '/references/community-project-spec' },
                { text: '需求池（种子）', link: '/references/seed-ideas-pool' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/PancrePal-xiaoyibao/DKU-Programs-Wiki/edit/main/docs/:path'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'DKU x XiaoxBao',
      description: 'Public documentation for DKU x XiaoxBao programs',
      themeConfig: {
        lastUpdatedText: 'Last updated',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Projects', link: '/en/projects/project1-rag-gist-assistant/brief' },
          { text: 'Resources', link: '/en/resources/toolkits/tools-kit-101' }
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Getting Started',
              collapsed: true,
              items: [
                { text: 'Quick Start & Must-Know', link: '/en/guide/quick-start' }
              ]
            },
            {
              text: 'Projects',
              collapsed: true,
              items: [
                { text: 'Project 1: RAG GIST Assistant', link: '/en/projects/project1-rag-gist-assistant/brief' },
                { text: 'Project 2: RAG Osteosarcoma', link: '/en/projects/project2-rag-osteosarcoma/profile' },
                { text: 'Project 4: XiaoX Pal Bilingual', link: '/en/projects/project4-xiao-x-pal-bilingual/brief' },
                { text: 'Project 5: Gynecological Cancers', link: '/en/projects/project5-gynecological-cancers/brief' }
              ]
            },
            {
              text: 'Resources',
              collapsed: true,
              items: [
                { text: 'Tools Kit 101', link: '/en/resources/toolkits/tools-kit-101' },
                { text: 'Innovation Scenarios Guide', link: '/en/resources/innovation/innovation-scenarios-guide' },
                { text: 'AI Coding Skill Trends', link: '/en/resources/innovation/ai-coding-innovation-skill-trends' },
                { text: 'Team Alignment Guide', link: '/en/resources/team-alignment-guide' }
              ]
            },
            {
              text: 'References',
              collapsed: true,
              items: [
                { text: 'GitHub PR Workflow', link: '/references/github-pull-request-workflow' },
                { text: 'Community Project Spec', link: '/references/community-project-spec' },
                { text: 'Seed Ideas Pool', link: '/references/seed-ideas-pool' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/PancrePal-xiaoyibao/DKU-Programs-Wiki/edit/main/docs/:path'
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      title: 'DKU x XiaoxBao',
      description: 'Открытая документация DKU x XiaoxBao',
      themeConfig: {
        lastUpdatedText: 'Последнее обновление',
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Projects', link: '/ru/projects/project1-rag-gist-assistant/brief' },
          { text: 'Resources', link: '/ru/resources/toolkits/tools-kit-101' }
        ],
        sidebar: {
          '/ru/': [
            {
              text: 'Введение',
              collapsed: true,
              items: [
                { text: 'Quick Start & Must-Know', link: '/ru/guide/quick-start' }
              ]
            },
            {
              text: 'Projects',
              collapsed: true,
              items: [
                { text: 'Project 1: RAG GIST Assistant', link: '/ru/projects/project1-rag-gist-assistant/brief' },
                { text: 'Project 2: RAG Osteosarcoma', link: '/ru/projects/project2-rag-osteosarcoma/profile' },
                { text: 'Project 4: XiaoX Pal Bilingual', link: '/ru/projects/project4-xiao-x-pal-bilingual/brief' },
                { text: 'Project 5: Gynecological Cancers', link: '/ru/projects/project5-gynecological-cancers/brief' }
              ]
            },
            {
              text: 'Resources',
              collapsed: true,
              items: [
                { text: 'Tools Kit 101', link: '/ru/resources/toolkits/tools-kit-101' },
                { text: 'Innovation Scenarios Guide', link: '/ru/resources/innovation/innovation-scenarios-guide' },
                { text: 'AI Coding Skill Trends', link: '/ru/resources/innovation/ai-coding-innovation-skill-trends' },
                { text: 'Team Alignment Guide', link: '/ru/resources/team-alignment-guide' }
              ]
            },
            {
              text: 'Справки',
              collapsed: true,
              items: [
                { text: 'GitHub PR 提交流程', link: '/references/github-pull-request-workflow' },
                { text: '社区项目说明书', link: '/references/community-project-spec' },
                { text: '需求池（种子）', link: '/references/seed-ideas-pool' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/PancrePal-xiaoyibao/DKU-Programs-Wiki/edit/main/docs/:path'
        }
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PancrePal-xiaoyibao/DKU-Programs-Wiki' }
    ]
  }
})
