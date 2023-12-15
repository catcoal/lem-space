<script setup lang="ts">
import ImageCover from "./image.vue"
defineProps<{
    resource: any
}>()
</script>

<template>
    <div class="cover">
        <div class="cover-inner">
            <ImageCover :resource="resource"></ImageCover>
        </div>
    </div>
</template>

<style scoped>
.cover {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
}

.cover-inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0.15rem;
}
</style>