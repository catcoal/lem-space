<script setup lang="ts">
import { Tree, TreeProps } from 'ant-design-vue';
import { ArchiveBoxIcon, ArchiveBoxXMarkIcon, BookmarkSlashIcon, ExclamationTriangleIcon, BookmarkIcon, TrashIcon, DocumentArrowUpIcon, DocumentMagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { h, ref } from 'vue';

const selectedKeys = ref<number[]>([]);
const menuData: TreeProps['treeData'] = [
    {
        title: '全部文件',
        key: 0,
        icon: h(ArchiveBoxIcon)
    },
    {
        title: '未标签',
        key: 1,
        icon: h(BookmarkIcon)
    },
    {
        title: '未分类',
        key: 2,
        icon: h(ArchiveBoxXMarkIcon)
    },
    {
        title: '待分析',
        key: 3,
        icon: h(DocumentMagnifyingGlassIcon)
    },
    {
        title: '回收站',
        key: 4,
        icon: h(TrashIcon)
    },
    {
        title: '标签管理',
        key: 5,
        icon: h(BookmarkSlashIcon)
    },
    {
        title: '等待上传',
        key: 6,
        icon: h(DocumentArrowUpIcon)
    },
    {
        title: '分析错误',
        key: 7,
        icon: h(ExclamationTriangleIcon)
    },
]

</script>

<template>
    <Tree v-model:selected-keys="selectedKeys" class="menu-tree" block-node :tree-data="menuData">
        <template #icon>
        </template>
        <template #title="{ key, title, icon }">
            <div class="title-container">
                <span class="icon">
                    <component :is="icon"></component>
                </span>
                <span class="title">{{ title }}</span>
                <Context trigger="click" :type="'Folder'" :data="key">
                    <div class="more">
                        <MoreOutlined />
                    </div>
                </Context>
            </div>
        </template>
    </Tree>
</template>

<style scoped>
.title-container {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    width: 100%;
    font-size: 0.78rem;
    letter-spacing: 0.08rem;
    padding: 0.1rem 0.3rem;
}

.title-container>.icon {
    width: 1.1rem;
    min-width: 1.1rem;
    height: 1.1rem;
}
</style>