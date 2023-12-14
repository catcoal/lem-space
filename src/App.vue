<script setup lang="ts">
import { GetCssRootVar } from "@/utils/utils";
import { ConfigProvider } from "ant-design-vue";
import { ThemeConfig } from "ant-design-vue/es/config-provider/context";



const AntTheme: ThemeConfig = {
  // algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimaryBg: GetCssRootVar('--color-border-default'),
    colorBgContainer: GetCssRootVar('--color-bg-inset'),
    colorBorder: GetCssRootVar('--color-border-default'),
    colorBorderSecondary: GetCssRootVar('--color-border-default'),
    colorBgTextHover: GetCssRootVar('--color-bg-inset'),
    colorTextBase: GetCssRootVar('--color-font-default'),
    colorPrimary: GetCssRootVar('--theme-color')
  }
}
</script>

<template>
  <div id="root" @click.right.prevent>
    <ConfigProvider :theme="AntTheme">
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
