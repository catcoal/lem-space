<script setup lang="ts">
import Menu from "./components/Menu/index.vue";
import ResizeHandle from "./components/ResizeHandle.vue";
import Metadata from "./components/Metadata/index.vue"
import { useLayoutStore } from "@/stores/layout";
import { computed } from "vue";

const LayoutStore = useLayoutStore();

const layoutAsideLeftWidth = computed(() => LayoutStore.layoutAsideLeftWidth);
const layoutAsideRightWidth = computed(() => LayoutStore.layoutAsideRightWidth);

</script>

<template>
    <div class="default-layout">
        <aside :style="'min-width: ' + layoutAsideLeftWidth + 'px'" class="aside-left">
            <Menu></Menu>
            <ResizeHandle :min="200" :max="400" :position="'right'"></ResizeHandle>
        </aside>
        <main>
            <RouterView></RouterView>
        </main>
        <aside :style="'min-width: ' + layoutAsideRightWidth + 'px'" class="aside-right">
            <Metadata></Metadata>
            <ResizeHandle :min="250" :max="400" :position="'left'"></ResizeHandle>
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
    min-width: 250px;
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
    overflow: auto;
}

main {
    width: 100%;
}
</style>