import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
export default defineUserConfig({

  locales: {
    "/": {
      lang: "en-US",
      title: "Theme Demo",
      description: "Personal blog for learning purposes，documenting the development process",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "iDevguide",
      description: "个人博客学习用途，记录过程.",
    },
  },

  theme,
  plugins: [
    searchPlugin({

      locales: {
        "/zh/": {
          placeholder: "搜索",
        },
        "/": {
          placeholder: "Search",
        },
      },
      maxSuggestions: 5,

    }),
    googleAnalyticsPlugin({
      id: 'G-G63MSQ1CCE',
    }),
  ],
});
