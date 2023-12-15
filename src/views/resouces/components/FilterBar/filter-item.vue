<script setup lang="ts">
import { Popover } from "ant-design-vue"
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
defineProps<{
    title: string
}>()
</script>

<template>
    <Popover placement="bottomLeft" trigger="click">
        <div class="filter-item">
            <slot name="icon"></slot>
            <span>{{ title }}</span>
            <ChevronDownIcon class="down-icon" />
        </div>
        <template #content>
            <slot name="popover-content"></slot>
        </template>
    </Popover>
</template>

<style scoped>
.filter-item {
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: 0.85rem;
    gap: 0.3rem;
    padding: 0.2rem 0.5rem;
    border-radius: var(--borderRadius-m);
}

.filter-item:hover,
.filter-item:active {
    background-color: var(--color-bg-inset);
}

.filter-item>svg {
    width: 0.9rem;
    min-width: 0.9rem;
    height: 0.9rem;
}

.filter-item>.down-icon {
    opacity: 0.5;
}

/* 
@media (max-width:1200px) {
    .filter-item>span {
        display: none;
    }
}

@media (max-width:1000px) {
    .filter-item>.down-icon {
        display: none;
    }
} */
</style>