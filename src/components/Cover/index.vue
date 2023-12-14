<script setup lang="ts">
import ImageCover from "./image.vue"
defineProps<{
    resource: any
}>()
</script>

<template>
    <div class="cover">
        <ImageCover :resource="resource"></ImageCover>
    </div>
</template>

<style scoped>
.cover {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}
</style>