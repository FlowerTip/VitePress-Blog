import { h } from 'vue';
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Confetti from "./components/Confetti.vue";
import Giscus from "./components/Giscus.vue";
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-features-after': () => h(Confetti),
      'doc-after': () => h(Giscus),
    })
  },
  enhanceApp({ app }) {
    app.component("Confetti", Confetti); //注册全局组件
    app.component("Gis", Giscus); //注册全局组件
  }
} satisfies Theme;
