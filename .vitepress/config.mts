import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: true,
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
    sidebar,
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
          svg: '<svg t="1712910582085" class="icon" viewBox="0 0 1272 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5295" width="400" height="400"><path d="M729.641 165.277l-95.314-75.152-99.563 78.527-5.179 4.16 104.742 83.503 105.09-83.503-9.776-7.535z m361.212 291.472L634.065 816.943l-456.498-359.99-67.442 54.174 523.94 413.118 524.23-413.35-67.442-54.146zM634.065 485.96L385.478 290.006l-67.412 54.117 315.97 249.168 316.29-249.4-67.413-54.146L634.065 485.96z" fill="#006CFF" p-id="5296"></path></svg>'
        },
        link: 'https://juejin.cn/user/2295436009546920/posts',
      },
      {
        icon: {
          svg: '<svg t="1725327457522" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="400" height="400"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4250"></path></svg>'
        },
        link: 'https://gitee.com/CodeTV',
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
    },
  },
  markdown: {
    theme: 'github-light',
    lineNumbers: false,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  },
  metaChunk: true,
  sitemap: {
    hostname: 'https://www.flowertip.site/vitepress-blog/'
  }
})
