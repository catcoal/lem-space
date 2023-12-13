<script setup lang="ts">

</script>

<template>
    <div class="resize-handle">
        <span class="resize-line"></span>
    </div>
</template>

<style scoped>
.resize-handle {
    position: absolute;
    height: 100%;
    top: 0;
    cursor: col-resize;
    width: 5px;
}

.resize-handle:hover>.resize-line {
    opacity: 1;
}

.resize-handle>.resize-line {
    opacity: 0;
    transition: .2s ease;
    transition-property: opacity;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: var(--theme-color);
}

.resize-handle.left {
    left: 0;
}

.resize-handle.left>.resize-line {
    left: 0;
}

.resize-handle.right {
    right: 0;
}

.resize-handle.right>.resize-line {
    right: 0;
}
</style>