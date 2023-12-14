<script setup lang="ts">
import Cover from "@/components/Cover/index.vue";

defineProps<{
    resource: any
}>()
</script>

<template>
    <div class="resource-item">
        <div class="cover-wrap">
            <Cover :resource="resource"></Cover>
        </div>
        <div class="info-wrap">
            <p>名称{{ resource }}</p>
            <span>200x300</span>
        </div>
    </div>
</template>

<style scoped>
.resource-item {
    cursor: pointer;
    width: 100%;
    text-align: center;
}

.resource-item.selected>.cover-wrap {
    border-color: var(--theme-color);
}

.resource-item.selected>.info-wrap>p {
    background-color: var(--theme-color-tiny);
}

.cover-wrap {
    position: relative;
    height: 0;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 0.2rem;
    border-width: 2px;
    border-color: transparent;
    border-style: solid;
    border-radius: var(--borderRadius-m);
    overflow: hidden;
}

.info-wrap {
    display: flex;
    flex-direction: column;
}

.info-wrap>p {
    align-self: center;
    display: inline;
    padding: 0.15rem 0.5rem;
    border-radius: var(--borderRadius-m);
    font-size: 0.8rem;
    line-height: 0.8rem;
}

.info-wrap>span {
    font-size: 0.6rem;
    opacity: 0.5;
}
</style>