<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';

</script>

<template>
    <div class="navigate-bar">
        <div class="navigate-btn">
            <ChevronLeftIcon></ChevronLeftIcon>
        </div>
        <div class="navigate-btn disable">
            <ChevronRightIcon></ChevronRightIcon>
        </div>
    </div>
</template>

<style scoped>
.navigate-bar {
    display: flex;
    gap: 0.5rem;
    color: var(--color-font-default);
}

.navigate-btn {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-font-default);
    border-radius: var(--borderRadius-m);
    transition: .3s ease;
    transition-property: background-color;
}

.navigate-btn.disable {
    opacity: 0.5;
    pointer-events: none;
}

.navigate-btn>svg {
    width: 15px;
    height: 15px;
}

.navigate-btn:hover {
    background-color: var(--color-bg-inset);
}

.navigate-btn:active {
    background-color: var(--theme-color-tiny);
}
</style>