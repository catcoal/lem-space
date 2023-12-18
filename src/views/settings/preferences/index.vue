<script setup lang="ts">
import SettingFieldItem from "@/views/settings/components/setting-field-item/index.vue";
import { computed } from "vue";
import { useSettingStore } from "@/stores/setting";
import { ThemeType } from "@/stores/setting.config";

const SettingStore = useSettingStore();

const currentTheme = computed(() => SettingStore.settingConfig.theme);

const SwitchTheme = (type: ThemeType) => {
    SettingStore.updateConfig({
        theme: type
    })
}
</script>

<template>
    <div class="preferences">
        <SettingFieldItem title="主题">
            <template #content>
                <div class="theme-color-list">
                    <span @click="SwitchTheme('light')" :class="{ 'active': currentTheme === 'light' }"
                        style="background-color: #f8f9fa;"></span>
                    <span @click="SwitchTheme('dark')" :class="{ 'active': currentTheme === 'dark' }"
                        style="background-color: #1f2023;"></span>
                </div>
            </template>
        </SettingFieldItem>
    </div>
</template>

<style scoped>
.theme-color-list {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.theme-color-list>span {
    cursor: pointer;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: var(--borderRadius-m);
    transition: .3s ease;
    transition-property: box-shadow;
    will-change: box-shadow;
}

.theme-color-list>span:hover {
    box-shadow: inset 0 0 0 1px var(--theme-color);
}

.theme-color-list>span.active {
    box-shadow: inset 0 0 0 2px var(--theme-color);
}
</style>