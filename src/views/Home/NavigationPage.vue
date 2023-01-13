<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#0960BD"
      :default-active="(activeName as unknown as string)"
      router
    >
      <el-sub-menu
        v-for="item in hasChildren"
        :key="item.name"
        :index="(item.name as unknown as string)"
      >
        <template #title>
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="subItem in item.children"
          :key="subItem.name"
          :index="(subItem.name as unknown as string)"
          @click="handleMenuItem(subItem)"
        >
          <template #title>
            <span>{{ subItem.title }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item
        v-for="item in noHasChildren"
        :key="item.name"
        :index="(item.name as unknown as string)"
      >
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <template #title>
          <span>{{ item.title }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts" name="Person">
import type { ComputedRef } from 'vue';
import type { RouteRecordName } from 'vue-router';
import type { AppRouteRecordRaw } from '@/router/types';
import publicRouter from '@/router/publicRouter';
import TagListStore from '@/stores/modules/Tag';

// pinia
const tagStore = TagListStore();

// route
const route = useRoute();
const activeName: ComputedRef<RouteRecordName | null | undefined> = computed(
  () => {
    const { name } = route;
    return name;
  },
);

// routerList
const routerList: AppRouteRecordRaw[] = publicRouter;

const handleMenuItem: Function = (item: AppRouteRecordRaw) => {
  tagStore.addTagList(item);
};

const noHasChildren = computed(() => {
  return routerList.filter((item: AppRouteRecordRaw) => !item.children);
});
const hasChildren = computed(() => {
  return routerList.filter((item: AppRouteRecordRaw) => item.children);
});
</script>

<style scoped></style>
