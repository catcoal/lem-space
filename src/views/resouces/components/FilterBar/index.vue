<script setup lang="ts">
import ColorPicker from "./color-picker.vue"
import FilterItem from './filter-item.vue';
import { ref } from 'vue';

const filterList = ref<HTMLElement | null>(null);
const handleFilterWheel = (e: WheelEvent) => {
    e.preventDefault(); // 阻止默认的垂直滚动
    filterList.value!.scrollLeft += e.deltaY;
} 
</script>

<template>
    <div class="filter-bar-wrap">
        <div class="filter-list" ref="filterList" @wheel="handleFilterWheel">
            <FilterItem title="颜色">
                <template #icon>
                    <i class="color-wheel"></i>
                </template>
                <template #popover-content>
                    <ColorPicker></ColorPicker>
                </template>
            </FilterItem>
            <FilterItem title="格式"></FilterItem>
            <FilterItem title="标签"></FilterItem>
            <FilterItem title="评分"></FilterItem>
            <FilterItem title="链接"></FilterItem>
            <FilterItem title="备注"></FilterItem>
            <FilterItem title="创建时间"></FilterItem>
            <FilterItem title="排序方式"></FilterItem>
        </div>
    </div>
</template>

<style scoped>
/* 彩色轮盘 */
.color-wheel {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: conic-gradient(var(--theme-color), aqua, lime, yellow, magenta, var(--theme-color));
}

.filter-bar-wrap {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.filter-bar-wrap::before {
    content: '';
    position: absolute;
    pointer-events: none;
    z-index: 2;
    left: 0;
    top: 0;
    height: 100%;
    width: 3rem;
    background: linear-gradient(90deg, var(--color-bg-default) 0%, transparent 80%);
}

.filter-bar-wrap::after {
    content: '';
    position: absolute;
    pointer-events: none;
    z-index: 2;
    right: 0;
    top: 0;
    height: 100%;
    width: 3rem;
    background: linear-gradient(90deg, transparent 0%, var(--color-bg-default) 80%);
}

.filter-list {
    display: flex;
    gap: 0.3rem;
    width: 100%;
    overflow: auto;
    padding: 0 1rem;
}

.filter-list::-webkit-scrollbar {
    display: none;
}
</style>