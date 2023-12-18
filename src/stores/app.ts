import { GetCssRootVar } from "@/utils/utils";
import { ThemeConfig } from "ant-design-vue/es/config-provider/context";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useSettingStore } from "@/stores/setting";
import { ThemeType } from "@/stores/setting.config";

// 初始化Ant主题
function InitAntTheme(): ThemeConfig {
  return {
    token: {
      colorBgBase: GetCssRootVar("--color-bg-inset"),
      colorBgSpotlight: GetCssRootVar("--color-bg-inset"),
      colorPrimaryBg: GetCssRootVar("--color-border-default"),
      colorBgContainer: GetCssRootVar("--color-bg-inset"),
      colorBorder: GetCssRootVar("--color-border-default"),
      colorBorderSecondary: GetCssRootVar("--color-border-default"),
      colorBgTextHover: GetCssRootVar("--color-bg-inset"),
      colorTextBase: GetCssRootVar("--color-font-default"),
      colorPrimary: GetCssRootVar("--theme-color"),
    },
  };
}

export const useAppStore = defineStore("app", () => {
  const SettingStore = useSettingStore();
  const antThemeConfig = ref<ThemeConfig>();

  // 初始APP主题
  const InitTheme = (theme?: ThemeType) => {
    document.documentElement.setAttribute(
      "data-color-mode",
      theme || SettingStore.settingConfig.theme!
    );
    antThemeConfig.value = InitAntTheme();
  };

  // 监听SettingStore动作
  SettingStore.$onAction(({ name, args }) => {
    // 监听配置文件修改
    if (name === "updateConfig" && args[0].theme) {
      // 主题变更
      InitTheme(args[0].theme);
    }
  });

  return { antThemeConfig, InitTheme };
});
