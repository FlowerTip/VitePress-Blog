import { h } from 'vue';
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Confetti from "./components/Confetti.vue";
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-features-after': () => h(Confetti),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Confetti", Confetti); //注册全局组件
  }
} satisfies Theme;
