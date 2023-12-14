<script setup lang="ts">
import { Image } from "ant-design-vue"
defineProps<{
    resource: any
}>()
</script>

<template>
    <Image :preview="false" width="100%" height="100%" :src="'https://source.unsplash.com/random.webp?' + resource">
        <template #placeholder>
            <div class="placeholder-cover"></div>
        </template>
    </Image>
</template>

<style>
.ant-image .ant-image-img {
    position: absolute;
    width: auto !important;
    height: auto !important;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: var(--borderRadius-m);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.placeholder-cover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--color-bg-inset);
}
</style>