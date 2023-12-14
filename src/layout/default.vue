<script setup lang="ts">
import Menu from "./components/Menu/index.vue";
import ResizeHandle from "./components/ResizeHandle.vue";

</script>

<template>
    <div class="default-layout">
        <aside class="aside-left">
            <Menu></Menu>
            <ResizeHandle class="right"></ResizeHandle>
        </aside>
        <main>
            <RouterView></RouterView>
        </main>
        <aside class="aside-right">
            <ResizeHandle class="left"></ResizeHandle>
        </aside>
    </div>
</template>

<style scoped>
.default-layout {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

aside {
    position: relative;
    width: 100%;
    min-width: 250px;
    max-width: 250px;
    background-color: var(--color-bg-inset);
    border-color: var(--color-border-default);
    border-style: solid;
    border-width: 0;
}

.aside-left {
    border-right-width: 1px;
}

.aside-right {
    border-left-width: 1px;
}

main {
    width: 100%;
}
</style>