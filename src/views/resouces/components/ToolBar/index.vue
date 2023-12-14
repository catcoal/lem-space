<script setup lang="ts">
import Search from "./search.vue";
import NavigateBar from './navigate-bar.vue';
import Breadcrumb from "./breadcrumb.vue"
</script>

<template>
    <div class="tool-bar-wrap">
        <div class="tool-wrap">
            <NavigateBar></NavigateBar>
            <Breadcrumb></Breadcrumb>
        </div>
        <div class="tool-wrap">
            <Search></Search>
        </div>
    </div>
</template>

<style scoped>
.tool-bar-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tool-wrap {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
</style>