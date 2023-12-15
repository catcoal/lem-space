<script setup lang="ts">
import SelectionArea from "@/components/SelectionArea/index.vue";
import ResourceItem from "./resource-item.vue";
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
    <SelectionArea class="resource-selection-area">
        <div class="resource-list">
            <ResourceItem @click.stop :resource="item" v-for="item in 100" :key="item"></ResourceItem>
        </div>
    </SelectionArea>
</template>

<style scoped>
.resource-selection-area {
    height: 100%;
}

.resource-list {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
    gap: 1rem;
    flex-wrap: wrap;
    overflow-y: auto;
    padding: 1rem 1rem 4rem 1rem;
}
</style>