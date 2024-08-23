import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "狗尾巴花的尖的知识库",
  description: "快乐是要去寻找的，很少有人天生幸福",
  base: '/vitepress-blog/',
  head: [
    /**
    * 这里用到了公用目录 public ： 资源路径可以直接用绝对路径 /xxx
    * 渲染效果 ：<link rel="icon" href="/abc.png">
    */
    ['link', { rel: 'icon', href: '/vitepress-blog/images/favicon.ico' }],
    ["script",{src: "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"}],
    ['script', {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?79010bb9d85f19aaaa718509e4b9ad6d";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`],
  ],
  themeConfig: {
    siteTitle: '狗尾巴花的尖',
    logo: '/images/avatar.jpg',
    outlineTitle: "知识内容",
    outline: [1, 6],
    nav: [
      {
        text: '前端进阶',
        items: [
          { text: 'Vue进阶', link: '/docs/web/vue/default' },
          { text: 'React进阶', link: '/docs/web/react/react扩展' },
          { text: 'Node进阶', link: '/docs/web/node/default' },
          { text: 'Typescript进阶', link: '/docs/web/typescript/01_快速入门' },
          { text: '微信小程序进阶', link: '/docs/web/wechat/01-小程序基础' },
        ],
      },
      {
        text: '后端进阶',
        items: [
          { text: 'Java基础', link: '/docs/server/java/模块1_入门程序/default' },
        ],
      },
      { text: '问题记录', link: '/docs/question/vue/bigscreen' },
      { text: '我的工具', link: '/docs/tool/common/default' },
      { text: '开源项目', link: '/docs/project/vue/default' },
      { text: '优质推荐', link: '/docs/recommend/common/default' },
    ],
    sidebar: {
      '/docs/web/vue/': [
        {
          text: 'Vue进阶',
          items: [
            { text: 'Nginx部署Vue项目', link: '/docs/web/vue/default' },
            { text: '高效学习VUE3我只看这篇文章', link: '/docs/web/vue/vue3' },
          ]
        }
      ],
      '/docs/web/react/': [
        {
          text: 'React进阶',
          items: [
            { text: 'React Hook 新特性', link: '/docs/web/react/react扩展' },
          ]
        }
      ],
      '/docs/web/typescript/': [
        {
          text: 'Typescript进阶',
          items: [
            { text: 'Typescript快速入门', link: '/docs/web/typescript/01_快速入门' },
            { text: 'Typescript高级进阶', link: '/docs/web/typescript/02_面向对象' },
          ]
        }
      ],

      '/docs/web/wechat/': [
        {
          text: '微信小程序进阶',
          items: [
            { text: '小程序基础', link: '/docs/web/wechat/01-小程序基础' },
            { text: '小程序配置文件', link: '/docs/web/wechat/02-小程序配置文件' },
            { text: '小程序样式与组件', link: '/docs/web/wechat/03-小程序样式与组件' },
            { text: '小程序事件系统', link: '/docs/web/wechat/04-小程序事件系统' },
            { text: '小程序模板语法', link: '/docs/web/wechat/05-小程序模板语法' },
            { text: '小程序生命周期', link: '/docs/web/wechat/06-小程序生命周期' },
            { text: '小程序原生API', link: '/docs/web/wechat/07-小程序原生API' },
            { text: '小程序自定义组件', link: '/docs/web/wechat/08-小程序自定义组件' },
            { text: '小程序 npm 使用', link: '/docs/web/wechat/09-小程序 npm 使用' },
            { text: '小程序分包加载', link: '/docs/web/wechat/10-小程序分包加载' },
            { text: '小程序开放能力', link: '/docs/web/wechat/11-小程序开放能力' },
            { text: '小程序补充与拓展', link: '/docs/web/wechat/12-小程序补充与拓展' },
            { text: '上线发布', link: '/docs/web/wechat/13-上线发布' },
          ]
        }
      ],
      '/docs/server/java/': [
        {
          text: 'Java基础',
          items: [
            { text: '第一个入门程序', link: '/docs/server/java/模块1_入门程序/default' },
            { text: '变量_类型转换_运算符', link: '/docs/server/java/模块2_变量_数据类型_运算符/default' },
            { text: 'idea_运算符', link: '/docs/server/java/模块3_idea_运算符/default' },
            { text: '流程控制', link: '/docs/server/java/模块4_流程控制/default' },
            { text: '数组', link: '/docs/server/java/模块5_数组/default' },
            { text: '方法', link: '/docs/server/java/模块6_方法/default' },
            { text: '面向对象一', link: '/docs/server/java/模块7_面向对象/default' },
            { text: '面向对象二', link: '/docs/server/java/模块8_面向对象/default' },
            { text: '面向对象三', link: '/docs/server/java/模块9_面向对象/default' },
            { text: '面向对象四', link: '/docs/server/java/模块10_面向对象/default' },
            { text: '面向对象五', link: '/docs/server/java/模块11_面向对象/default' },
            { text: '面向对象六', link: '/docs/server/java/模块12_面向对象/default' },
            { text: '异常_Object', link: '/docs/server/java/模块13_异常_Object/default' },
            { text: 'API一', link: '/docs/server/java/模块14_API/default' },
            { text: 'API二', link: '/docs/server/java/模块15_API/default' },
            { text: '多线程一', link: '/docs/server/java/模块16_多线程/default' },
            { text: '多线程二', link: '/docs/server/java/模块17_多线程/default' },
          ]
        }
      ],
      '/docs/question/vue/': [
        {
          text: '问题记录',
          items: [
            { text: '数据大屏的解决方案', link: '/docs/question/vue/bigscreen' },
          ]
        }
      ]
    },
    footer: {
      message: '<span id="busuanzi_container_site_pv" style="display:none">网站总访问量：<span id="busuanzi_value_site_pv"></span>次<span class= "post-meta-divider">  </span></span><span id="busuanzi_container_site_uv" style="display:none">网站访客数：<span id="busuanzi_value_site_uv"></span>人</span>',
      copyright: 'Copyright@ 2024 狗尾巴花的尖 <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2024083028号-1</a>',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    sidebarMenuLabel: '当前目录',
    returnToTopLabel: '返回顶部',
    externalLinkIcon: true,
    socialLinks: [
      // 可以通过将 SVG 作为字符串传递来添加自定义图标：
      {
        icon: {
          svg: '<svg t="1712910872018" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7387" width="400" height="400"><path d="M204.288 63.488c-8.704 8.192-16.896 20.48-18.944 26.624-3.584 11.776 12.8 62.464 20.48 62.464S235.52 176.128 235.52 184.32c0 16.384-17.92 26.112-47.104 26.112-34.816 0-104.448 27.648-128.512 51.2-9.216 8.704-26.112 33.792-37.888 56.32L0 358.4v469.504l21.504 40.448c24.576 47.616 35.84 59.392 82.944 84.992l40.96 22.528h722.944l40.96-19.968c51.712-24.576 72.704-45.056 95.744-94.72l17.92-38.4v-231.424l0.512-231.424-17.92-36.352c-9.216-20.48-28.16-47.104-42.496-59.904-31.232-30.208-86.528-54.272-122.368-54.272-54.272 0-65.024-22.528-26.624-57.856 20.48-18.432 23.04-25.088 23.04-45.568 0-19.968-3.584-28.16-16.896-41.984-9.216-9.216-22.528-16.896-29.696-16.896-11.776 0-34.304 9.216-40.448 16.896-1.536 1.536-35.84 35.328-75.776 74.24l-73.216 71.168-83.456-0.512c-45.568 0-88.064-2.56-93.696-4.608-5.632-2.56-38.4-31.232-72.704-65.024C249.856 40.448 235.008 32.256 204.288 63.488z m652.8 262.656c5.12 0.512 19.968 9.216 31.744 20.48l21.504 19.968 1.536 217.088c1.024 197.12 0.512 218.112-8.704 236.032-14.336 27.136-34.816 40.448-65.536 41.984-14.336 0.512-173.568 0.512-353.28 0l-326.144-1.536-45.056-45.056V373.248l20.992-22.528c15.872-17.92 25.6-23.552 41.984-25.088 16.384-1.024 634.88-0.512 680.96 0.512z" fill="#1296db" p-id="7388"></path><path d="M279.04 502.272c-20.48 22.016-20.992 25.088-20.992 66.56 0 39.936 1.024 44.544 17.92 64 29.184 33.28 55.808 32.256 84.48-2.56 11.264-12.8 12.8-22.016 13.312-64 0-47.104-0.512-48.64-19.968-68.096-27.136-27.648-47.616-26.112-74.752 4.096z m393.216-3.584c-18.944 18.944-19.968 20.992-19.968 69.12 0 47.616 0.512 49.664 18.432 67.072 24.576 23.552 35.84 26.624 58.368 13.824 29.184-16.896 39.936-43.52 36.864-90.624-2.56-35.328-4.608-41.984-22.016-59.904-25.088-25.6-45.568-25.6-71.68 0.512z" fill="#1296db" p-id="7389"></path></svg>'
        },
        link: 'https://space.bilibili.com/326103284/dynamic',
      },
      {
        icon: {
          svg: '<svg t="1712910582085" class="icon" viewBox="0 0 1272 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5295" width="400" height="400"><path d="M729.641 165.277l-95.314-75.152-99.563 78.527-5.179 4.16 104.742 83.503 105.09-83.503-9.776-7.535z m361.212 291.472L634.065 816.943l-456.498-359.99-67.442 54.174 523.94 413.118 524.23-413.35-67.442-54.146zM634.065 485.96L385.478 290.006l-67.412 54.117 315.97 249.168 316.29-249.4-67.413-54.146L634.065 485.96z" fill="#006CFF" p-id="5296"></path></svg>'
        },
        link: 'https://juejin.cn/user/2295436009546920/posts',
      },
    ],
    lastUpdated: {
      text: '发布时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },
  markdown: {
    theme: 'github-light',
    lineNumbers: false
  }
})
