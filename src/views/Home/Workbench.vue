<template>
  <div>
    <HomeHeaderComponent />
  </div>
</template>

<script setup lang="ts" name="Home">
import AsyncComponent from "@/hooks/AsyncComponent";
import HomeHeader from "./components/HomeHeader.vue";
import type { Component } from "@/router/types";

const HomeHeaderComponent = markRaw(AsyncComponent(HomeHeader as Component));
</script>

<style scoped lang="less"></style>
