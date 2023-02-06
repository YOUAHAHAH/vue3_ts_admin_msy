import type { AppRouteRecordRaw } from "../types";
import LayoutRouter from "../base";

const TestRouter: AppRouteRecordRaw = {
  ...LayoutRouter,
  name: "test",
  icon: "Grid",
  title: "测试列表",
  current: false,
  meta: {
    title: "测试列表",
  },
  children: [
    {
      path: "/testList",
      name: "testList",
      component: () =>
        import(
          "@/views/TestList/DefineAsyncComponent/DefineAsyncComponent.vue"
        ),
      title: "异步组件",
      meta: {
        title: "异步组件",
      },
    },
    {
      path: "/sendEmail",
      name: "sendEmail",
      component: () => import("@/views/TestList/SendEmail/SendEmail.vue"),
      title: "发送邮件",
      meta: {
        title: "发送邮件",
      },
    },
  ],
};

export default TestRouter;
