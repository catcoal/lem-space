<script setup lang="ts">
import { GetCssRootVar } from "@/utils/utils.ts";
import { ConfigProvider } from "ant-design-vue";
import Layout from "@/layout/default.vue";
import { ThemeConfig } from "ant-design-vue/es/config-provider/context";



const AntTheme: ThemeConfig = {
  // algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: GetCssRootVar('--theme-color')
  }
}
</script>

<template>
  <div id="root" @click.right.prevent>
    <ConfigProvider :theme="AntTheme">
      <Layout></Layout>
    </ConfigProvider>
  </div>
</template>

<style scoped>
#root {
  width: 100vw;
  height: 100vh;
}
</style>
