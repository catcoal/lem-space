<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import { useAppStore } from "@/stores/app";
import { computed, onBeforeMount } from "vue";
const AppStore = useAppStore();
const antThemeConfig = computed(() => AppStore.antThemeConfig);

onBeforeMount(() => {
  // 初始化主题
  AppStore.InitTheme();
});
</script>

<template>
  <div id="root" @click.right.prevent>
    <ConfigProvider :theme="antThemeConfig">
      <RouterView></RouterView>
    </ConfigProvider>
  </div>
</template>

<style scoped>
#root {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
