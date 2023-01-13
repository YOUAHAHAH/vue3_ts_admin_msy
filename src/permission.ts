import router from './router/index';
import type { AppRouteRecordRaw } from './router/types';
import NProgress from '@/utils/nprogress';
import { getToken } from '@/utils/token';
import perimssionRouter from '@/stores/modules/Permission';

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title as string;
  if (to.path !== from.path) {
    NProgress.start();
  }

  //   const perimssionStore = perimssionRouter();
  //   const menus: AppRouteRecordRaw[] = await perimssionStore.buildRoutesAction();

  if (to.path === '/login') {
    next();
  } else {
    if (getToken()) {
      next();
    } else {
      next('/login');
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
