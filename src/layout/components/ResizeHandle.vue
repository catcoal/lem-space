<script setup lang="ts">
import { ref } from 'vue';
import { useLayoutStore } from "@/stores/layout"

const LayoutStore = useLayoutStore();

const props = withDefaults(defineProps<{
    position: 'left' | 'right',
    min?: number, // 最小宽度
    max?: number // 最大宽度
}>(), {
    min: 200,
    max: 250
});

const resizing = ref(false); // 拖拽中
const initialWidth = ref(0); // 初始大小
const initialX = ref(0); // 初始位置

const handleMouseDown = (event: MouseEvent) => {
    let target = event.currentTarget as HTMLElement;
    resizing.value = true;
    initialX.value = event.clientX;
    initialWidth.value = target.parentElement?.offsetWidth!;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
};

const handleMouseMove = (event: MouseEvent) => {
    if (!resizing.value) return;
    event.preventDefault();

    const deltaX = event.clientX - initialX.value;
    let newWidth = props.position === 'left' ? initialWidth.value - deltaX : initialWidth.value + deltaX;
    newWidth = Math.max(props.min, Math.min(props.max, newWidth)); // 限制宽度在最小值和最大值之间

    if (props.position === 'left') {
        LayoutStore.$patch({
            layoutAsideRightWidth: newWidth
        })
    } else {
        LayoutStore.$patch({
            layoutAsideLeftWidth: newWidth
        })
    }
};

const handleMouseUp = () => {
    resizing.value = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
};
</script>

<template>
    <div @mousedown="handleMouseDown" class="resize-handle" :class="[position, { 'resizing': resizing }]">
        <span class="resize-line"></span>
    </div>
</template>


<style scoped>
.resize-handle {
    position: absolute;
    height: 100%;
    top: 0;
    cursor: col-resize;
    width: 5px;
}

.resize-handle:hover>.resize-line,
.resize-handle.resizing>.resize-line {
    opacity: 1;
}

.resize-handle>.resize-line {
    opacity: 0;
    transition: .2s ease;
    transition-property: opacity;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: var(--theme-color);
}

.resize-handle.left {
    left: 0;
}

.resize-handle.left>.resize-line {
    left: 0;
}

.resize-handle.right {
    right: 0;
}

.resize-handle.right>.resize-line {
    right: 0;
}
</style>