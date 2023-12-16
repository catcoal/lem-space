<script setup lang="ts">
import { Slider } from 'ant-design-vue';
import { computed, ref } from 'vue';
import { useResourceStore } from "@/stores/resource"

const ResourceStore = useResourceStore();

const min = ref(1);
const max = ref(10);
const step = ref(1);
const displayRowNumber = computed(() => ResourceStore.displayRowNumber);
const size = computed(() => getDisplayNumber(displayRowNumber.value));

const handleChange = (value: any) => {
    let size = getDisplayNumber(value);
    ResourceStore.displayRowNumber = size;
}

// 获取显示数量
const getDisplayNumber = (value: number) => max.value - value + min.value;
</script>

<template>
    <div class="size-slider-wrap">
        <Slider :value="size" @change="handleChange" :tooltipOpen="false" :max="max" :min="min" :step="step"></Slider>
    </div>
</template>

<style scoped>
.size-slider-wrap {
    width: 100px;
}
</style>