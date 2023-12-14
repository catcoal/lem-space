<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div class="filter-bar-wrap">
        <div class="filter-list">
            <div class="filter-item">
                <span>筛选</span>
                <ChevronDownIcon />
            </div>
            <div class="filter-item">
                <span>筛选</span>
                <ChevronDownIcon />
            </div>
            <div class="filter-item">
                <span>筛选</span>
                <ChevronDownIcon />
            </div>
        </div>
    </div>
</template>

<style scoped>
.filter-list {
    display: flex;
    gap: 0.5rem;
}

.filter-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    gap: 0.2rem;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
}

.filter-item:hover,
.filter-item:active {
    background-color: var(--color-bg-inset);
}

.filter-item>svg {
    width: 0.9rem;
    height: 0.9rem;
    opacity: 0.6;
}
</style>