import type { Plugin, ConfigEnv } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default (env: ConfigEnv) => {
  // env { command: 'serve', mode: 'development' }

  const vitePlugins: (Plugin | Plugin[])[] = [
    vue({
      include: [/.vue$/],
    }),
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve("locales/**")],
    }),
    vueJsx(),
    AutoImport({
      dts: "src/auto-imports.d.ts",
      // 自动导入 vue vue-router
      imports: ["vue", "vue-router"],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
      ],
    }),
    Components({
      dirs: ["src/components/"],
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],
      dts: "src/components.d.ts",
    }),
    // 自定义 setup name
    VueSetupExtend(),
  ];

  return vitePlugins;
};
