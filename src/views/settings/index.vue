<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/outline";
import SettingMenu from "./components/menu/index.vue";
import { useSettingStore } from "@/stores/setting"
import { computed } from "vue";

const SettingStore = useSettingStore();
const currentMenu = computed(() => SettingStore.currentSetting);
const closeSetting = () => SettingStore.SettingModal.destroy();


</script>

<template>
    <div class="settings-layout">
        <header>
            <p>配置</p>
            <div @click="closeSetting" class="close-btn">
                <XMarkIcon></XMarkIcon>
            </div>
        </header>
        <div class="container">
            <aside>
                <SettingMenu></SettingMenu>
            </aside>
            <main>
                <component :is="currentMenu.component"></component>
            </main>
        </div>
    </div>
</template>

<style scoped>
.settings-layout {
    width: 100%;
}

.close-btn {
    cursor: pointer;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    border-radius: var(--borderRadius-m);
    transition: .3s ease;
    transition-property: background-color, color;
}

.close-btn:hover {
    color: #f8f9fa;
    background-color: var(--error-color);
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid var(--color-border-default);
}

.container {
    display: flex;
}

aside {
    padding: 0.5rem;
    border-right: 1px solid var(--color-border-default);
}

main {
    padding: 1rem;
    min-height: 400px;
}
</style>