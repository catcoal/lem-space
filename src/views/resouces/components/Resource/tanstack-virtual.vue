<!-- 文档 https://tanstack.com/virtual/v3/docs/api/virtualizer -->
<script setup lang="ts">
import { computed } from 'vue'
import { VirtualizerOptions, useVirtualizer } from '@tanstack/vue-virtual'
import ResourceItem from "./resource-item.vue";

const props = defineProps<{
    resources: Resource[];
    parentRef: HTMLElement
}>()

const VirtualizerOptions = computed(() => {
    return {
        count: props.resources?.length, // 总数
        getScrollElement: () => props.parentRef, // 滚动节点
        estimateSize: () => 200, // 资源高大小
        overscan: 2, // 前后的预加载数据
    }
})

const rowVirtualizer = useVirtualizer(VirtualizerOptions);

const virtualRows = computed(() => rowVirtualizer.value.getVirtualItems())

const totalSize = computed(() => rowVirtualizer.value.getTotalSize())

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
            :data-size="virtualRows[index]?.size" :data-index="virtualRow.index" :style="{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${(virtualRows[index]?.size * virtualRows[index]?.index)}px)`,
            }">
            <ResourceItem :resource="resources[virtualRow.index]"></ResourceItem>
        </div>
    </div>
</template>

<style scoped></style>

  