import { createRouter, createWebHashHistory, type Router } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import publicRouter from './publicRouter';
import { LoginRouter, ErrorRouter } from './base';

// 基础路径
const baseList: String[] = [];
const getBaseListName = (array: any[]) => {
  array.forEach((item) => {
    baseList.push(item.name);
    getBaseListName(item.children || []);
  });
};
getBaseListName([LoginRouter, ...publicRouter, ...ErrorRouter]);

// 创建router 实例
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    LoginRouter,
    ...publicRouter,
    ...ErrorRouter,
  ] as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
