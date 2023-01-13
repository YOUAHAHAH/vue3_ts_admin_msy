<template>
  <div>
    <HomeHeaderComponent />
    <p>{{ $t("login.username") }}</p>
  </div>
</template>

<script setup lang="ts" name="Home">
import AsyncComponent from "@/hooks/AsyncComponent";
import HomeHeader from "./components/HomeHeader.vue";
import type { Component } from "@/router/types";
import { $t } from "@/utils/i18n";
import { useI18n } from "vue-i18n";

const HomeHeaderComponent = markRaw(AsyncComponent(HomeHeader as Component));

const { locale } = useI18n();
console.log(`当前系统采用的语言是：${locale.value}`);

onMounted(async () => {});
</script>

<style scoped lang="less"></style>
