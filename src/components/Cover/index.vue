<script setup lang="ts">
import ImageCoverGrid from "./image-grid.vue"
import ImageCoverAuto from "./image-auto.vue"

withDefaults(defineProps<{
    resource: any,
    layoutType: 'grid' | 'waterfall'
}>(), {
    layoutType: 'grid'
})
</script>

<template>
    <div class="cover" :class="layoutType">
        <div class="cover-inner">
            <ImageCoverAuto v-if="layoutType === 'waterfall'" :resource="resource" />
            <ImageCoverGrid v-else-if="layoutType === 'grid'" :resource="resource" />
        </div>
    </div>
</template>

<style scoped>
.cover {
    position: relative;
}

.cover-inner {
    padding: 0.15rem;
}

/* 方格布局 */
.cover.grid {
    width: 100%;
    height: 0;
    padding-top: 100%;
}

.cover.grid>.cover-inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

/* 流式布局 */
.cover.waterfall {
    width: 100%;
    height: auto;
}

.cover.waterfall>.cover-inner {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>