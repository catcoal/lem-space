<script setup lang="ts">
import { Tree, TreeProps } from 'ant-design-vue';
import { FolderOutlined } from "@ant-design/icons-vue"
import { ref } from 'vue';

const selectedKeys = ref<number[]>([]);
const menuData: TreeProps['treeData'] = [
    {
        title: '全部文件',
        key: 0,
    },
    {
        title: '未分类',
        key: 1,
    },
    {
        title: '回收站',
        key: 2,
    },
]

</script>

<template>
    <Tree v-model:selected-keys="selectedKeys" class="menu-tree" block-node show-icon :tree-data="menuData">
        <template #icon>
            <FolderOutlined />
        </template>
    </Tree>
</template>

<style scoped></style>