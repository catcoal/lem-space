<script setup lang="ts">
import { Cog6ToothIcon } from '@heroicons/vue/24/outline';
import { useSettingStore } from "@/stores/setting"

const toSetting = () => useSettingStore().SettingModal.open();
</script>

<template>
    <div class="app-menu">
        <div class="user-item">用户信息</div>
        <div class="app-options">
            <div class="option-item" @click="toSetting">
                <Cog6ToothIcon></Cog6ToothIcon>
            </div>
        </div>
    </div>
</template>

<style scoped>
.app-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}

.option-item {
    cursor: pointer;
    width: 1.4rem;
    height: 1.4rem;
    padding: 0.15rem;
    border-radius: var(--borderRadius-m);
    transition: .3s ease;
    transition-property: background-color;
}

.option-item:hover {
    background-color: var(--color-bg-default);
}

.option-item>svg {
    width: 100%;
    height: 100%;
}
</style>