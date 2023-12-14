<script setup lang="ts">
import { GetRandomImages } from "@/services/test";
import { onMounted, ref } from "vue";
const resources = ref();

onMounted(() => {
    GetRandomImages().then((res) => {
        resources.value = res
    })
})
</script>

<template>
    <div class="resource-list">
        <div class="resource-item" v-for="item in 100" :key="item">
            <div class="cover">
                <img :src="'https://source.unsplash.com/random?' + item" alt="" srcset="">
            </div>
            <div class="info">
                <p>名称{{ item }}</p>
                <span>200x300</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.resource-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
    gap: 1rem;
    flex-wrap: wrap;
    max-height: calc(100vh - 110px);
    overflow: auto;
    padding-bottom: 4rem;
}

.resource-item {
    cursor: pointer;
    width: 100%;
    text-align: center;
}

.resource-item.selected>.cover {
    border-color: var(--theme-color);
}

.resource-item.selected>.info>p {
    background-color: var(--theme-color-tiny);
}

.cover {
    position: relative;
    height: 0;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 0.5rem;
    border-width: 2px;
    border-color: transparent;
    border-style: solid;
    overflow: hidden;
}

img {
    position: absolute;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 0.3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.info {
    display: flex;
    flex-direction: column;
}

.info>p {
    align-self: center;
    display: inline;
    padding: 0.15rem 0.5rem;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    line-height: 0.8rem;
}

.info>span {
    font-size: 0.6rem;
    opacity: 0.5;
}
</style>