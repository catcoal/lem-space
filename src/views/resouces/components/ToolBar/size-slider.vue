<script setup lang="ts">
import { Slider } from 'ant-design-vue';
import { computed, ref } from 'vue';
import { useResourceViewStore } from "@/stores/resourceView"

const ResourceViewStore = useResourceViewStore();

const min = ref(1);
const max = computed(() => ResourceViewStore.displayMaxRowNumber);
const step = ref(1);
const displayRowNumber = computed(() => ResourceViewStore.displayRowNumber);
const size = computed(() => getDisplayNumber(displayRowNumber.value));

// Slider改变
const handleChange = (value: any) => {
    let size = getDisplayNumber(value);
    ResourceViewStore.$patch({
        displayRowNumber: size
    })
}

// 获取实际显示数量
const getDisplayNumber = (value: number) => max.value - value + min.value;
</script>

<template>
    <div class="size-slider-wrap">
        <Slider :value="size" @change="handleChange" :tooltipOpen="false" :max="max" :min="min" :step="step">
        </Slider>
    </div>
</template>

<style scoped>
.size-slider-wrap {
    width: 100px;
}
</style>