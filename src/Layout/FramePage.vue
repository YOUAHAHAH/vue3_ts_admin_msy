<template>
  <div class="frame" v-loading="loading" element-loading-text="加载中~">
    <iframe
      v-if="!route.meta?.frameLoading"
      :src="frameSrc"
      class="frame-iframe"
      ref="frameRef"
    ></iframe>
    <a v-else :href="frameSrc" target="_blank"></a>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const loading = ref<boolean>(true);
const frameSrc = ref<string>("");
const frameRef = ref<HTMLElement | null>(null);

const hideLoading = () => (loading.value = false);

const showLoading = () => (loading.value = true);

const init = () => {
  if (route.meta?.frameSrc) {
    frameSrc.value = route.meta?.frameSrc as string;
    route.meta?.frameLoading ? hideLoading() : showLoading();
  }
  route.meta?.frameLoading === false && hideLoading();

  nextTick(() => {
    const iframe = unref(frameRef);
    if (!iframe) return;
    const _frame = iframe as any;
    if (_frame.attachEvent) {
      _frame.attachEvent("onload", () => {
        hideLoading();
      });
    } else {
      iframe.onload = () => {
        hideLoading();
      };
    }
  });
};

onMounted(() => {
  init();
});

onBeforeUpdate(() => {
  init();
});
</script>

<style scoped lang="less">
.frame {
  height: calc(100vh - 165px);
  z-index: 998;
  .frame-iframe {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 0;
    box-sizing: border-box;
  }
}
.main-content {
  margin: 2px 0 0 !important;
}
</style>
