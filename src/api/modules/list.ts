import { Get, Post } from '../request';
import type { IAnyObj } from '../type';

export const userLogin = (data: any) => Post('/user/login', data);

export const userGetRouters = () => Get('/api/getRouters');

export const getList = (data: any) =>
  Get('http://admin.youah.cc/api/tableList', data);