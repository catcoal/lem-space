<script setup lang="ts">
import Context from "@/components/Context/index.vue";
import Cover from "@/components/Cover/index.vue";
import { computed, ref } from "vue";
import { useResourceViewStore, DisplayLayoutType } from "@/stores/resourceView";

const ResourceViewStore = useResourceViewStore();
const displayLayoutType = computed(() => ResourceViewStore.displayLayoutType);
const displayRowNumber = computed(() => ResourceViewStore.displayRowNumber);
const coverLayoutType = computed<DisplayLayoutType>(() => displayRowNumber.value <= 1 ? 'waterfall' : displayLayoutType.value);

const props = defineProps<{
    resource: any
}>()
const selectedResource = ref<number>();
const select = () => {
    selectedResource.value = props.resource;
}

</script>

<template>
    <Context type="File" trigger="contextmenu">
        <div class="resource-item" :class="{ 'selected': selectedResource }" @click="select">
            <div class="cover-wrap">
                <Cover :layout-type="coverLayoutType" :resource="resource"></Cover>
            </div>
            <div class="info-wrap">
                <p>名称{{ resource }}</p>
                <span>200x300</span>
            </div>
        </div>
    </Context>
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
    color: #ddf4ff;
    background-color: var(--theme-color);
}

.cover-wrap {
    position: relative;
    margin-bottom: 0.2rem;
    border-width: 2px;
    border-color: transparent;
    border-style: solid;
    border-radius: var(--borderRadius-l);
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
    font-size: 0.7rem;
    line-height: 0.8rem;
}

.info-wrap>span {
    font-size: 0.6rem;
    opacity: 0.5;
}
</style>