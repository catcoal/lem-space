<script setup lang="ts">
import { Rate } from 'ant-design-vue';
</script>

<template>
    <div class="basic-info">
        <div class="basic-info-item">
            <label>评分</label>
            <!-- <span>0</span> -->
            <Rate></Rate>
        </div>
        <div class="basic-info-item">
            <label>尺寸</label>
            <span>200x300</span>
        </div>
        <div class="basic-info-item">
            <label>文件类型</label>
            <span>JPEG</span>
        </div>
        <div class="basic-info-item">
            <label>导入时间</label>
            <span>2023/12/01 17:30:45</span>
        </div>
        <div class="basic-info-item">
            <label>更新时间</label>
            <span>2023/12/01 12:20:45</span>
        </div>
    </div>
</template>

<style scoped>
.basic-info {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.basic-info-item {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    justify-content: space-between;
}

.basic-info-item>label {
    opacity: 0.4;
}

.ant-rate {
    font-size: 0.8rem;
}
</style>