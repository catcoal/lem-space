<script setup lang="ts">
import Preview from "@/views/previews/index.vue";
import ToolBar from "./components/ToolBar/index.vue";
import FilterBar from "./components/FilterBar/index.vue";
import Resource from "./components/Resource/index.vue";

import { useResourceViewStore } from "@/stores/resourceView";
import { computed } from "vue";
const ResourceViewStore = useResourceViewStore();
const isPreview = computed(() => ResourceViewStore.isPreview)

</script>

<template>
    <div class="resource-container">
        <div class="header-wrap">
            <ToolBar></ToolBar>
            <FilterBar></FilterBar>
        </div>
        <div class="body-wrap">
            <Resource></Resource>
        </div>
        <div v-if="isPreview" class="preview-popup-wrap">
            <Preview></Preview>
        </div>
    </div>
</template>

<style scoped>
.resource-container {
    position: relative;
    height: 100vh;
}

.preview-popup-wrap {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg-default);
}

.header-wrap {
    position: absolute;
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-default);
    gap: 0.5rem;
}

.body-wrap {
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 6rem;
    overflow: hidden;
}
</style>