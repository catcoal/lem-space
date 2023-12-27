<!-- 文档 https://tanstack.com/virtual/v3/docs/api/virtualizer -->
<script setup lang="ts">
import { computed } from 'vue'
import { useVirtualizer } from '@tanstack/vue-virtual'
import ResourceItem from "./resource-item.vue";
// import { useResourceViewStore } from "@/stores/resourceView";
// const ResourceViewStore = useResourceViewStore();

const props = defineProps<{
    resources: Resource[];
    parentRef: HTMLElement
}>()


const VirtualizerOptions = computed(() => {
    return {
        count: props.resources?.length, // 总数
        getScrollElement: () => props.parentRef, // 滚动节点
        estimateSize: () => props.parentRef.clientHeight / props.resources?.length, // 资源高大小
        overscan: 2, // 前后的预加载数据
        paddingEnd: 100, // 下边距px
    }
})

const rowVirtualizer = useVirtualizer(VirtualizerOptions);

const virtualRows = computed(() => rowVirtualizer.value.getVirtualItems());
const totalSize = computed(() => rowVirtualizer.value.getTotalSize());

// 动态调整大小
const measureElement = (el: any) => {
    if (!el) return;
    rowVirtualizer.value.measureElement(el)
    return undefined
}
</script>
<template>
    <div :style="{
        height: `${totalSize}px`,
        width: '100%',
        position: 'relative',
    }">
        <div v-for="(virtualRow, index) in virtualRows" :ref="measureElement" :key="virtualRow.key"
            :data-size="virtualRows[index]?.size" :data-start="virtualRows[index].start"
            :data-index="virtualRows[index].index" :style="{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                willChange: 'transform',
                transform: `translate3d(0,${virtualRows[index].start}px,0)`,
            }">
            <ResourceItem :resource="resources[virtualRow.index]"></ResourceItem>
        </div>
    </div>
</template>

<style scoped></style>

  