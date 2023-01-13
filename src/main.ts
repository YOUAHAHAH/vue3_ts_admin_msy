import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import stores from "./stores";

import { useI18n } from "@/utils/i18n";

import "@/assets/style/ep.less";
import "@/assets/style/adaptation.less";
import "element-plus/dist/index.css";

import "@/permission";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

// 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 动画
app.component(ElCollapseTransition.name, ElCollapseTransition);

app.use(router);
app.use(stores);
app.use(useI18n);
app.mount("#app");
