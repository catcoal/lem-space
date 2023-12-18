import Setting from "@/views/settings/index.vue";
import { defineStore } from "pinia";
import { ref, h } from "vue";
import { Modal } from "ant-design-vue";
import { Menu, menus } from "./setting.menu";
import { SaveConfig, LoadConfig, SettingConfig } from "./setting.config";

export const useSettingStore = defineStore("setting", () => {
  const settingModalInstance = ref(); // 设置的模态弹窗实例
  const currentSetting = ref<Menu>(menus[0]); // 当前的设置界面
  const settingConfig = ref<SettingConfig>(LoadConfig());

  // 更新配置
  const updateConfig = (newConfig: SettingConfig) => {
    settingConfig.value = {
      ...settingConfig.value,
      ...newConfig,
    };
    SaveConfig(settingConfig.value);
  };

  // 设置的模态弹窗
  const SettingModal = {
    open() {
      settingModalInstance.value = Modal.confirm({
        icon: null,
        footer: null,
        width: 600,
        content: h(Setting),
        class: "setting-modal",
      });
    },
    destroy() {
      settingModalInstance.value.destroy();
    },
    goto(menu: Menu) {
      currentSetting.value = menu;
    },
  };

  return { currentSetting, settingConfig, SettingModal, updateConfig };
});
