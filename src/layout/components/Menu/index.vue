<script setup lang="ts">
import FolderTree from "./folder-tree.vue";
import Shortcuts from "./shortcuts.vue";
</script>

<template>
    <div class="menu-wrap">
        <Shortcuts></Shortcuts>
        <span>文件夹</span>
        <FolderTree></FolderTree>
    </div>
</template>

<style>
.menu-tree {
    background-color: transparent;
    color: var(--color-font-default);
}

.ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected {
    background-color: var(--theme-color-tiny);
}
</style>

<style scoped>
.menu-wrap {
    padding: 1rem;
}

.menu-wrap>span {
    opacity: 0.5;
    display: block;
    font-size: 0.8rem;
    padding: 0.5rem 0 0.5rem 1.5rem;
}
</style>