<script setup lang="ts">
import { computed, ref } from "vue";
import TanstackVirtual from "./tanstack-virtual.vue"
import { useResourceViewStore } from "@/stores/resourceView";

const ResourceViewStore = useResourceViewStore();
const displayRowNumber = computed(() => ResourceViewStore.displayRowNumber);
// 假设你已经定义了 Resource 类型
const props = defineProps<{
    resources: Resource[]
}>()

/**
 * 将一维列表转换为二维列表
 * @param array 一维列表
 * @param columns 每行的元素个数
 * @returns 二维列表
 */
function convertToTwoDimensionalArray<T>(array: T[], numArrays: number): T[][] {
    const result: T[][] = new Array(numArrays).fill([]).map(() => []);
    for (let i = 0; i < array?.length; i++) {
        result[i % numArrays].push(array[i]);
    }
    return result;
}
const virtualListRef = ref<HTMLElement | null>(null);
const gridResources = computed(() => convertToTwoDimensionalArray(props.resources, displayRowNumber.value));

</script>

<template>
    <div ref="virtualListRef" class="virtual-list">
        <TanstackVirtual v-for="(rowResources, index) in gridResources" :key="index" :parentRef="virtualListRef!"
            :resources="rowResources" ref="TanstackVirtualRefs">
        </TanstackVirtual>
    </div>
</template>

<style scoped>
.virtual-list {
    height: 100%;
    display: flex;
    overflow: auto;
    /* 防止容器自身滚动 */
}
</style>