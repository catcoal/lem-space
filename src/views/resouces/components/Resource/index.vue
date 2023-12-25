<script setup lang="ts">
import VirtualList from "./virtual-list.vue";
import SelectionArea from "@/components/SelectionArea/index.vue";
import Context from "@/components/Context/index.vue";
import { GetRandomImages } from "@/services/test";
import { onMounted, ref } from "vue";

const resources = ref();

onMounted(() => {
    GetRandomImages().then((res) => {
        resources.value = res
    })
})

</script>

<template>
    <div class="resource-inner">
        <Context type="Sort" trigger="contextmenu">
            <SelectionArea @update:selected="(e) => console.log(e)" selection-el=".resource-item"
                class="resource-selection-area">
                <VirtualList :resources="resources"></VirtualList>
            </SelectionArea>
        </Context>
    </div>
</template>

<style scoped>
.resource-inner {
    height: 100%;
    overflow: auto;
}

.resource-selection-area {
    height: inherit;
}
</style>