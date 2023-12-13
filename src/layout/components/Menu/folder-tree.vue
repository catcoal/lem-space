<script setup lang="ts">
import { Tree, TreeProps, Dropdown, Menu, MenuItem, MenuDivider } from 'ant-design-vue';
import { FolderOutlined } from "@ant-design/icons-vue"
import { ref } from 'vue';

const selectedKeys = ref<number[]>([]);
const menuData: TreeProps['treeData'] = [
    {
        title: '文件夹',
        key: 3,
        children: [
            { title: '子文件夹', key: 4 },
            { title: '子文件夹', key: 5 },
        ],
    },
]

</script>

<template>
    <Tree v-model:selected-keys="selectedKeys" class="menu-tree" draggable block-node show-icon :tree-data="menuData">
        <template #icon>
        </template>
        <template #title="{ title }">
            <Dropdown :trigger="['contextmenu']">
                <div class="title-container">
                    <FolderOutlined />
                    <span>{{ title }}</span>
                </div>
                <template #overlay>
                    <Menu>
                        <MenuItem>123</MenuItem>
                        <MenuDivider></MenuDivider>
                        <MenuItem>123</MenuItem>
                    </Menu>
                </template>
            </Dropdown>
        </template>
    </Tree>
</template>

<style scoped>
.title-container {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    width: 100%;
    padding: 0 0.3rem;
}
</style>