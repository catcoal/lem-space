<script setup lang="ts">
import ToolBar from "./components/ToolBar/index.vue";
import FilterBar from "./components/FilterBar/index.vue";
import Resource from "./components/Resource/index.vue";
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
    </div>
</template>

<style scoped>
.header-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
}

.body-wrap {
    padding: 1rem;
}
</style>