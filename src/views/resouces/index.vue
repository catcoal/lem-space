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
.resource-container {
    position: relative;
    height: 100vh;
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