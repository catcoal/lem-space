<script setup lang="ts">
import { ref } from 'vue';
import { Swatches } from '@ckpack/vue-color';
const colors = ref('#194D33A8');
</script>
<template>
    <div class="color-picker">
        <Swatches v-model="colors" />
    </div>
</template>
<style scoped>
.vc-swatches {
    background-color: var(--color-bg-inset);
    box-shadow: none;
}

:deep(.vc-swatches-box) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    flex-wrap: wrap;
    gap: 0.2rem;
    padding: 0;
}

:deep(.vc-swatches-color-group) {
    width: 100%;
    padding-bottom: 0;
    border-radius: var(--borderRadius-m);
    overflow: hidden;
}

:deep(.vc-swatches-box>.vc-swatches-color-group) {
    margin-right: 0;
}

:deep(.vc-swatches-color-it) {
    width: 100%;
    margin-bottom: 0;
    border-radius: 0;
}
</style>