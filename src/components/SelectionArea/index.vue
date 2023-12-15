<template>
    <div ref="container" class="selection-container" @mousedown="startSelection" @mouseup="endSelection">
        <!-- 用户自定义内容的插槽 -->
        <slot></slot>

        <!-- 框选效果层 -->
        <div v-show="isSelecting" class="selection-box" :style="selectionBoxStyle"></div>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount, CSSProperties } from 'vue';

const container = ref<HTMLElement | null>(null);
const isSelecting = ref(false);
const startPosition = reactive({ x: 0, y: 0 });
const endPosition = reactive({ x: 0, y: 0 });

const selectionBoxStyle = computed(() => {
    const width = Math.abs(endPosition.x - startPosition.x);
    const height = Math.abs(endPosition.y - startPosition.y);
    const left = Math.min(startPosition.x, endPosition.x);
    const top = Math.min(startPosition.y, endPosition.y);
    return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
    } as CSSProperties;
});

const startSelection = (event: MouseEvent) => {
    if (!container.value) return;
    isSelecting.value = true;

    const rect = container.value.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    startPosition.x = event.clientX - rect.left + scrollLeft;
    startPosition.y = event.clientY - rect.top + scrollTop;
    endPosition.x = event.clientX - rect.left + scrollLeft;
    endPosition.y = event.clientY - rect.top + scrollTop;

    window.addEventListener('mousemove', updateSelection);
};


const updateSelection = (event: MouseEvent) => {
    if (!container.value || !isSelecting.value) return;

    // 获取当前的滚动偏移
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    // 更新框选的结束位置
    endPosition.x = event.clientX - container.value.getBoundingClientRect().left + scrollLeft;
    endPosition.y = event.clientY - container.value.getBoundingClientRect().top + scrollTop;
};


const endSelection = () => {
    if (!isSelecting.value) return;
    isSelecting.value = false;
    window.removeEventListener('mousemove', updateSelection);
    // 处理完成后的逻辑
};

onMounted(() => {
    // 可以在这里进行初始化操作
});

onBeforeUnmount(() => {
    if (isSelecting.value) {
        window.removeEventListener('mousemove', updateSelection);
    }
});

</script>
  
<style scoped>
.selection-container {
    position: relative;
    user-select: none;
    width: 100%;
    height: 100%;
    /* 防止拖动时选择文本 */
}

.selection-box {
    position: absolute;
    z-index: 0;
    border-radius: var(--boderRadius-s);
    border: 1px solid var(--theme-color);
    background-color: var(--theme-color-tiny);
}
</style>
  