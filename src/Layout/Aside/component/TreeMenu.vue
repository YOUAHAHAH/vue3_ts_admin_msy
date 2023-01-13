<template>
  <el-menu-item
    v-for="subItem in item"
    :key="subItem.name"
    :index="(subItem.name as unknown as string)"
    @click="handleMenuItem(subItem)"
  >
    <el-icon v-show="isIcon">
      <component :is="subItem.icon" />
    </el-icon>
    <template #title>
      <span>{{ subItem.title }}</span>
    </template>
  </el-menu-item>
</template>

<script setup lang="ts">
import type { AppRouteRecordRaw } from '@/router/types';
import TagListStore from '@/stores/modules/Tag';

defineProps<{
  item: AppRouteRecordRaw[] | undefined;
  isIcon?: boolean;
}>();

const tagStore = TagListStore();

const handleMenuItem: Function = (item: AppRouteRecordRaw) => {
  tagStore.addTagList(item);
};
</script>

<style scoped></style>
