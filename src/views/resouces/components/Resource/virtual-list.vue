<script setup lang="ts">
import { computed, ref } from "vue";
import TanstackVirtual from "./tanstack-virtual.vue"
import { useResourceViewStore } from "@/stores/resourceView";
import { convertToGridArray, convertToWaterfallArray } from "./index";

const ResourceViewStore = useResourceViewStore();
const displayLayoutType = computed(() => ResourceViewStore.displayLayoutType);
const displayRowNumber = computed(() => ResourceViewStore.displayRowNumber);
// 假设你已经定义了 Resource 类型
const props = defineProps<{
    resources: Resource[]
}>()

const virtualListRef = ref<HTMLElement | null>(null);
// 转换后的数据
const convertVirtualData = computed(() => {
    if (displayLayoutType.value === 'grid') {
        // 网格数据
        return convertToGridArray(props.resources, displayRowNumber.value)
    } else {
        // 瀑布流数据
        return convertToWaterfallArray(props.resources, displayRowNumber.value)
    }
})

</script>

<template>
    <div ref="virtualListRef" class="virtual-list grid">
        <TanstackVirtual v-for="(rowResources, index) in convertVirtualData" :key="index" :parentRef="virtualListRef!"
            :resources="rowResources" ref="TanstackVirtualRefs">
        </TanstackVirtual>
    </div>
</template>

<style scoped>
.virtual-list {
    position: relative;
    height: inherit;
    display: flex;
    overflow: auto;
    gap: 0.6rem;
    padding: 1rem;
}
</style>