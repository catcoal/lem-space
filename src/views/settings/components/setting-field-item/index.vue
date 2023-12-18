<script setup lang="ts">
defineProps<{
    title?: string
}>()
</script>

<template>
    <div class="field-wrap">
        <div class="field-name">
            {{ title }}
            <slot name="title"></slot>
        </div>
        <div class="field-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
.field-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.field-name {
    font-size: 0.8rem;
}
</style>