<script setup lang="ts">
import { RotateRightOutlined, BorderHorizontalOutlined, BorderVerticleOutlined, ExpandOutlined, CompressOutlined } from '@ant-design/icons-vue';
import { ChevronLeftIcon, ArrowLeftIcon, ArrowRightIcon, ArrowPathIcon, ArrowsPointingOutIcon } from '@heroicons/vue/24/outline';
import { Tooltip } from 'ant-design-vue';
import { useLayoutStore } from "@/stores/layout";
import { computed, h } from 'vue';
import { useResourceViewStore } from "@/stores/resourceView";

const tools: Tools = {
    'image': [
        {
            name: 'zoom-1',
            label: "缩放到窗口大小",
            icon: h(ArrowsPointingOutIcon),
        },
        {
            name: 'rotate-right',
            label: "旋转",
            icon: h(RotateRightOutlined),
        },
        {
            name: 'flip-h',
            label: "水平翻转",
            icon: h(BorderHorizontalOutlined),
        },
        {
            name: 'flip-v',
            label: "垂直翻转",
            icon: h(BorderVerticleOutlined),
        },
        {
            name: 'reset',
            label: "重置",
            icon: h(ArrowPathIcon),
        },
    ],
    'ppt': []
};

const props = defineProps<{
    previewType: PreviewType
}>();
const emit = defineEmits<{
    'toolClick': [payload: ToolType]
}>();

const ResourceViewStore = useResourceViewStore();
const LayoutStore = useLayoutStore();
const Fullscreen = computed(() => !LayoutStore.layoutAsideLeftVisible && !LayoutStore.layoutAsideRightVisible);
const PreviewTools = computed(() => tools[props.previewType]);

// 工具事件
const handleTool = (type: ToolType) => {
    if (type === 'fullscreen') {
        !Fullscreen.value ? LayoutStore.HidenAside() : LayoutStore.ShowAside();
    } else {
        emit('toolClick', type)
    }
};

const hidePreview = () => {
    ResourceViewStore.hidePreview();
}

</script>

<template>
    <div class="preview-toolbar">
        <div class="tool-item" @click="hidePreview">
            <ChevronLeftIcon></ChevronLeftIcon>
        </div>
        <div class="row-item">
            <div class="tool-item">
                <ArrowLeftIcon></ArrowLeftIcon>
            </div>
            <div class="tool-item">
                <ArrowRightIcon></ArrowRightIcon>
            </div>
            <Tooltip :title="tool.label" v-for="tool in PreviewTools">
                <div @click="handleTool(tool.name)" class="tool-item">
                    <component :is="tool.icon"></component>
                </div>
            </Tooltip>
            <div @click="handleTool('fullscreen')" :class="{ 'active': Fullscreen }" class="tool-item">
                <ExpandOutlined v-if="!Fullscreen"></ExpandOutlined>
                <CompressOutlined v-else></CompressOutlined>
            </div>
        </div>
    </div>
</template>

<style scoped>
.preview-toolbar {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background-color: var(--color-bg-inset);
    border-bottom: 1px solid var(--color-border-default);
}

.row-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.tool-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.4rem;
    height: 1.4rem;
    padding: 0.2rem;
    border-radius: var(--borderRadius-m);
    border: 1px solid transparent;
    font-size: 0.85rem;
    transition: .3s ease;
    transition-property: background-color, border-color;
}

.tool-item.active {
    background-color: var(--theme-color);
    color: #FFF;
}

.tool-item.active:hover {
    color: var(--color-font-default);
}

.tool-item:hover {
    background-color: var(--color-bg-default);
    border-color: var(--color-border-default);
}
</style>