<template>
  <div class="home_header_main">
    <el-card class="box-card">
      <div class="img">
        <el-image :src="avatar" :preview-src-list="srcList" fit="cover" />
      </div>
      <div class="content">{{ greet }} Admin</div>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="HomeHeader">
import { nowHour } from "@/utils/timeConfiguration";
import avatar from "@/assets/img/avatar.jpg";

const srcList: string[] = [avatar];

const greet = ref<string | undefined>("");

onBeforeMount(() => {
  greet.value = nowHour();
});
</script>

<style scoped lang="less">
.home_header_main {
  width: 100%;
  .box-card {
    :deep(.el-card__body) {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    .img {
      .el-image {
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }
    }
    .content {
      margin-left: 40px;
      font-size: 20px;
    }
  }
}
</style>
