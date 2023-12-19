<script setup lang="ts">
import Context from "@/components/Context/index.vue"
import { Tree, TreeProps } from 'ant-design-vue';
import { FolderIcon, FolderOpenIcon, EllipsisHorizontalIcon } from "@heroicons/vue/24/outline";
import { ref } from 'vue';

const selectedKeys = ref<number[]>([]);
const menuData: TreeProps['treeData'] = [
    {
        title: '文件夹',
        key: 31,
        children: [
            { title: '子文件夹子文件夹子文件夹', key: 41 },
            { title: '子文件夹', key: 51 },
        ],
    },
    {
        title: '文件夹',
        key: 61,
        children: [
            { title: '子文件夹', key: 71 },
            { title: '子文件夹', key: 81 },
        ],
    },
]

</script>

<template>
    <Tree v-model:selected-keys="selectedKeys" class="menu-tree" draggable block-node show-icon :tree-data="menuData">
        <template #title="{ key, title, expanded }">
            <Context trigger="contextmenu" :type="'Folder'" :data="key">
                <div class="title-container">
                    <span class="icon">
                        <FolderIcon v-show="!expanded" />
                        <FolderOpenIcon v-show="expanded" />
                    </span>
                    <span class="title">{{ title }}</span>
                    <Context trigger="click" :type="'Folder'" :data="key">
                        <div class="more">
                            <EllipsisHorizontalIcon />
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
    justify-content: space-between;
    gap: 0.3rem;
    width: 100%;
    font-size: 0.78rem;
    letter-spacing: 0.08rem;
    padding: 0.1rem 0.3rem;
}

.title-container:hover .more {
    opacity: 1;
}

.title-container>.title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.title-container>.icon {
    width: 1.1rem;
    min-width: 1.1rem;
    height: 1.1rem;
}

.more {
    opacity: 0;
    width: 1.2rem;
    min-width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--borderRadius-m);
    color: var(--color-font-default);
}

.more:hover {
    background-color: var(--color-bg-default);
}
</style>