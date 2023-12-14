<script setup lang="ts">
import { ChevronDownIcon, ArrowsUpDownIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div class="filter-bar-wrap">
        <div class="filter-list">
            <div class="filter-item">
                <span class="color-wheel"></span>
                <span>颜色</span>
                <ChevronDownIcon />
            </div>
            <div class="filter-item">
                <span>格式</span>
                <ChevronDownIcon />
            </div>
            <div class="filter-item">
                <span>标签</span>
                <ChevronDownIcon />
            </div>
            <div class="filter-item">
                <span>评分</span>
                <ChevronDownIcon />
            </div>
            <div class="filter-item">
                <span>链接</span>
                <ChevronDownIcon />
            </div>
            <div class="filter-item">
                <span>备注</span>
                <ChevronDownIcon />
            </div>
            <div class="filter-item">
                <span>创建时间</span>
                <ChevronDownIcon />
            </div>
            <div class="filter-item">
                <ArrowsUpDownIcon />
                <span>排序方式</span>
                <ChevronDownIcon />
            </div>
        </div>
    </div>
</template>

<style scoped>
.color-wheel {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: conic-gradient(var(--theme-color), aqua, lime, yellow, magenta, var(--theme-color));
}

.filter-list {
    display: flex;
    gap: 0.5rem;
}

.filter-item {
    cursor: pointer;
    display: flex;
    align-items: center;
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
    height: 0.9rem;
    opacity: 0.5;
}
</style>