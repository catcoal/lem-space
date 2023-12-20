<script setup lang="ts">
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';
import { onMounted, ref } from 'vue';
import { useLayoutStore } from "@/stores/layout";

const LayoutStore = useLayoutStore();
const viewContainer = ref<HTMLElement>();
const viewer = ref<Viewer>();

// 监听事件
LayoutStore.$onAction((data) => {
    if (data.name === 'HidenAside' || data.name === 'ShowAside') {
        setTimeout(() => {
            (viewer.value as any).resize();
        }, 0)
    }
})

onMounted(() => {
    viewer.value = new Viewer(viewContainer.value!, {
        title: false,
        button: false,
        navbar: false,
        toolbar: false,
        inline: true,
        loading: true,
        backdrop: false,
        maxZoomRatio: 8,
        minZoomRatio: 0.1
    });
})

// tool事件
const handleTool = (type: ToolType) => {
    if (type === 'zoom-1') {
        zoomFull();
    } else if (type === 'rotate-right') {
        viewer.value?.rotate(90)
    } else if (type === 'flip-h') {
        const currentScaleX = (viewer.value as any).imageData.scaleX;
        viewer.value?.scaleX(-currentScaleX);
    } else if (type === 'flip-v') {
        const currentScaleY = (viewer.value as any).imageData.scaleY;
        viewer.value?.scaleY(-currentScaleY);
    } else if (type === 'reset') {
        viewer.value?.update();
    }
}

// 缩放到窗口大小
const zoomFull = () => {
    if (!viewer.value) {
        console.error('Viewer instance is not available.');
        return;
    }
    // 获取查看器的容器尺寸
    const containerData = (viewer.value as any).viewerData;
    const containerWidth = containerData.width;
    const containerHeight = containerData.height;

    // 获取当前查看的图片尺寸
    const imageData = (viewer.value as any).imageData;
    const imageRatio = imageData.naturalWidth / imageData.naturalHeight;
    const containerRatio = containerWidth / containerHeight;

    let zoomRatio;
    if (imageRatio >= containerRatio) {
        // 图片宽高比大于或等于容器宽高比，以容器宽度为基准进行缩放
        zoomRatio = containerWidth / imageData.naturalWidth;
    } else {
        // 图片宽高比小于容器宽高比，以容器高度为基准进行缩放
        zoomRatio = containerHeight / imageData.naturalHeight;
    }

    // viewer.value.reset();
    // 计算图片中心点
    const newImageData = (viewer.value as any).imageData;
    const centerX = (newImageData.width - containerWidth) / 2;
    const centerY = (newImageData.height - containerHeight) / 2;
    // 使用 moveTo 方法居中图片
    viewer.value.moveTo(-centerX, -centerY);

    // 设置缩放比例铺满屏幕
    viewer.value.zoomTo(zoomRatio, false);
};

defineExpose({
    handleTool
})
</script>

<template>
    <div class="viewer-container" ref="viewContainer">
        <img src="https://picsum.photos/800/600">
    </div>
</template>

<style scoped>
.viewer-container {
    width: 100%;
    display: none;
}
</style>