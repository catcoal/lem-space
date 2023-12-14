<script setup lang="ts">
import Context from "@/components/Context/index.vue"
import { Tree, TreeProps } from 'ant-design-vue';
import { FolderOutlined, MoreOutlined } from "@ant-design/icons-vue"
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
    {
        title: '文件夹',
        key: 6,
        children: [
            { title: '子文件夹', key: 7 },
            { title: '子文件夹', key: 8 },
        ],
    },
]

</script>

<template>
    <Tree v-model:selected-keys="selectedKeys" class="menu-tree" draggable block-node show-icon :tree-data="menuData">
        <template #icon>
        </template>
        <template #title="{ key, title }">
            <Context trigger="contextmenu" :type="'Folder'" :data="key">
                <div class="title-container">
                    <FolderOutlined />
                    <span class="title">{{ title }}</span>
                    <Context trigger="click" :type="'Folder'" :data="key">
                        <div class="more">
                            <MoreOutlined />
                        </div>
                    </Context>
                </div>
            </Context>
        </template>
    </Tree>
</template>

<style scoped>
.title-container {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    width: 100%;
    padding: 0 0 0 0.3rem;
}

.title-container:hover .more {
    opacity: 1;
}

.title-container>.title {
    display: flex;
    flex: 1;
}

.more {
    opacity: 0;
    width: 1.2rem;
    min-width: 1.2rem;
    height: 1.2rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.2rem;
    color: var(--color-font-default);
}

.more:hover {
    background-color: var(--color-bg-default);
}
</style>