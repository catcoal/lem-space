<script setup lang="ts">
import { useSettingStore } from "@/stores/setting"
import { Menu, menus } from "@/stores/setting.menu"
import { computed } from "vue";

const SettingStore = useSettingStore();
const currentMenu = computed(() => SettingStore.currentSetting);

const toSetting = (item: Menu) => {
    SettingStore.SettingModal.goto(item);
}
</script>

<template>
    <div class="setting-menu">
        <div @click="toSetting(item)" :key="item.name" class="setting-item"
            :class="{ 'active': item.name === currentMenu.name }" v-for="item in menus">
            <span class="menu-icon">
                <component :is="item.icon"></component>
            </span>
            <p>{{ item.title }}</p>
        </div>
    </div>
</template>

<style scoped>
.setting-menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.setting-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    user-select: none;
    cursor: pointer;
    opacity: 0.7;
    padding: 0.3rem 0.5rem;
    border-radius: var(--borderRadius-m);
    font-size: 0.8rem;
}

.menu-icon {
    width: 1rem;
    height: 1rem;
}

.setting-item.active {
    opacity: 1;
    background-color: var(--color-bg-default);
}
</style>