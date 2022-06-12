import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/Admin/Desktop/workspace/idevguide/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.82/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("C:/Users/Admin/Desktop/workspace/idevguide/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.82/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("C:/Users/Admin/Desktop/workspace/idevguide/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.82/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js")),
  "Blog": defineAsyncComponent(() => import("C:/Users/Admin/Desktop/workspace/idevguide/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.82/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
