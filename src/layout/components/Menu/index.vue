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

<style scoped>
:deep(.ant-tree .ant-tree-treenode) {
    padding: 0.1rem 0;
}

:deep(.ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected) {
    background-color: var(--theme-color-tiny);
    box-shadow: inset 0 0 0 1px var(--theme-color-medium);
}

:deep(.menu-tree) {
    background-color: transparent;
    color: var(--color-font-default);
}

:deep(.ant-tree-switcher) {
    opacity: 0.3;
}

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