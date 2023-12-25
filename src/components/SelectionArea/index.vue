<template>
    <div ref="container" class="selection-container" @mousedown.left.exact="startSelection">
        <!-- 用户自定义内容的插槽 -->
        <slot></slot>

        <!-- 框选效果层 -->
        <div v-show="isSelecting" class="selection-box" :style="selectionBoxStyle"></div>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, reactive, computed, onBeforeUnmount, CSSProperties } from 'vue';

const container = ref<HTMLElement | null>(null);
const isSelecting = ref(false);
const startPosition = reactive({ x: 0, y: 0 });
const endPosition = reactive({ x: 0, y: 0 });
const props = defineProps<{
    selectionEl: string
}>();
const emit = defineEmits<{
    'update:selected': [payload: any]
}>()

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

// 开始框选
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
    window.addEventListener('mouseup', endSelection);
};

// 更新选中
const updateSelection = (event: MouseEvent) => {
    if (!container.value || !isSelecting.value) return;

    // 获取当前的滚动偏移
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    // 更新框选的结束位置
    endPosition.x = event.clientX - container.value.getBoundingClientRect().left + scrollLeft;
    endPosition.y = event.clientY - container.value.getBoundingClientRect().top + scrollTop;

    checkSelection(props.selectionEl);
};


// 结束选中
const endSelection = () => {
    if (!isSelecting.value) return;
    isSelecting.value = false;
    window.removeEventListener('mousemove', updateSelection);
    window.removeEventListener('mouseup', endSelection);
    // 处理完成后的逻辑...
};

// 返回选中的数据
const emitSelection = (selectedElements: any[]) => {
    emit('update:selected', selectedElements);
};

// 判断选择逻辑
const checkSelection = (selector: string) => {
    const selectedElements: any[] = [];
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        let containerRect = container.value?.getBoundingClientRect();
        let container_top = containerRect?.top!;
        let container_left = containerRect?.left!;
        const rect = el.getBoundingClientRect();

        // 确定框选区域的实际边界
        const selectionLeft = Math.min(startPosition.x, endPosition.x) + container_left;
        const selectionRight = Math.max(startPosition.x, endPosition.x) + container_left;
        const selectionTop = Math.min(startPosition.y, endPosition.y) + container_top;
        const selectionBottom = Math.max(startPosition.y, endPosition.y) + container_top;

        // 检查元素是否在框选区域内
        const inHorizontalBounds = rect.left + rect.width >= selectionLeft && rect.left <= selectionRight;
        const inVerticalBounds = rect.top + rect.height >= selectionTop && rect.top <= selectionBottom;

        if (inHorizontalBounds && inVerticalBounds) {
            selectedElements.push(el);
        }
    });
    emitSelection(selectedElements);
};

onBeforeUnmount(() => {
    if (isSelecting.value) {
        window.removeEventListener('mousemove', updateSelection);
        window.removeEventListener('mouseup', endSelection);
    }
});

</script>
  
<style scoped>
.selection-container {
    position: relative;
    user-select: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* 防止拖动时选择文本 */
}

.selection-box {
    pointer-events: none;
    position: absolute;
    border-radius: var(--boderRadius-s);
    border: 1px solid var(--theme-color);
    background-color: var(--theme-color-tiny);
}
</style>
  