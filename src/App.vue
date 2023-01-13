<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";

const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));
</script>

<style>
* {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>
