import type { AppRouteRecordRaw } from "../types";
import LayoutRouter from "../base";
const IFrame = () => import("@/Layout/FramePage.vue");

const FrameRouter: AppRouteRecordRaw = {
  ...LayoutRouter,
  name: "frame",
  icon: "Monitor",
  title: "外部页面",
  current: true,
  meta: {
    title: "外部页面",
  },
  children: [
    {
      path: "/vue3",
      name: "vue3",
      component: IFrame,
      title: "Vue3文档(内嵌)",
      meta: {
        title: "Vue3文档(内嵌)",
        frameSrc: "https://cn.vuejs.org/",
        frameLoading: false,
      },
    },
    {
      path: "/vite",
      name: "vite",
      component: IFrame,
      title: "vite文档(内嵌)",
      meta: {
        title: "vite文档(内嵌)",
        frameSrc: "https://vitejs.cn/vite3-cn/",
        frameLoading: false,
      },
    },
    // {
    //   path: "/leetcode",
    //   name: "leetcode",
    //   component: IFrame,
    //   title: "leetcode(内嵌)",
    //   meta: {
    //     title: "leetcode(内嵌)",
    //     frameSrc: "https://leetcode.cn/problemset/all/",
    //     frameLoading: true,
    //   },
    // },
  ],
};

export default FrameRouter;
