import type { AppRouteRecordRaw } from '../types';
import LayoutRouter from '../base';

const HomeRouter: AppRouteRecordRaw = {
  ...LayoutRouter,
  name: 'workbench',
  redirect: '/workbench',
  icon: 'HomeFilled',
  title: '首页',
  current: true,
  meta: {
    title: '首页',
  },
  children: [
    {
      path: '/workbench',
      name: 'workbench',
      component: () => import('@/views/Home/Workbench.vue'),
      title: '工作台',
      meta: {
        title: '工作台',
      },
    },
    {
      path: '/navigationPage',
      name: 'navigationPage',
      component: () => import('@/views/Home/NavigationPage.vue'),
      title: '导航页',
      meta: {
        title: '导航页',
      },
    },
  ],
};

export default HomeRouter;
