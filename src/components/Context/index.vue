<script setup lang="ts">
import { Dropdown, Menu, ItemType } from 'ant-design-vue';
import { MenuInfo } from 'ant-design-vue/es/menu/src/interface';
import { Trigger } from 'ant-design-vue/es/dropdown/props';

import { computed } from 'vue';
import { context, EventHandler, ContextKey } from "./context";

const props = defineProps<{
    trigger: Trigger
    type: ContextKey
    data?: any
}>()
const emit = defineEmits<{
    success: [payload: any]
}>()

const items = computed(() => context[props.type] as ItemType[]);

const handleContextMenu = ({ item }: MenuInfo) => {
    let ContextItem = item as (ItemType & EventHandler)
    ContextItem.event(props.data);
}
</script>

<template>
    <Dropdown destroy-popup-on-hide :trigger="trigger">
        <div class="dropdown-container">
            <slot name="default"></slot>
        </div>
        <template #overlay>
            <Menu @click="handleContextMenu" theme="dark" :items="items"></Menu>
        </template>
    </Dropdown>
</template>

<style scoped>
.ant-dropdown .ant-dropdown-menu {
    background-color: var(--color-bg-inset);
    border: 1px solid var(--color-border-default);
}
</style>