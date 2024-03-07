<script setup lang="ts">
import { Textarea } from "ant-design-vue";
import BasicInfos from "./basic-infos.vue"
import Cover from "@/components/Cover/index.vue";
</script>

<template>
    <div class="meta-data-wrap">
        <div class="field-wrap cover-wrap">
            <Cover :resource="1"></Cover>
        </div>
        <div class="field-wrap">
            <div class="color-palette-wrap">
                <span style="background-color: #F8FFD2;"></span>
                <span style="background-color:#B6C4B6;"></span>
                <span style="background-color:#C1F2B0;"></span>
                <span style="background-color:#FFB534;"></span>
                <span style="background-color:#9BB8CD;"></span>
                <span style="background-color:#FFC0D9;"></span>
            </div>
        </div>
        <div class="field-wrap">
            <div class="field-name">
                文件夹名
            </div>
            <div class="field-content">
                <Textarea autoSize placeholder="请输入文件夹名"></Textarea>
            </div>
        </div>
        <div class="field-wrap">
            <div class="field-name">
                备注
            </div>
            <div class="field-content">
                <Textarea autoSize placeholder="请输入备注"></Textarea>
            </div>
        </div>
        <div class="field-wrap">
            <div class="field-name">
                标签
            </div>
            <div class="field-content">
                <Textarea autoSize placeholder=""></Textarea>
            </div>
        </div>
        <div class="field-wrap">
            <div class="field-name">
                来源网址
            </div>
            <div class="field-content">
                <Textarea autoSize placeholder="请输入链接"></Textarea>
            </div>
        </div>
        <div class="field-wrap">
            <div class="field-name">
                所属文件夹
            </div>
            <div class="field-content">
                <Textarea autoSize placeholder=""></Textarea>
            </div>
        </div>
        <div class="field-wrap">
            <div class="field-name">
                基本信息
            </div>
            <div class="field-content">
                <BasicInfos></BasicInfos>
            </div>
        </div>
    </div>
</template>

<style scoped>
.meta-data-wrap {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    gap: 1rem;
}

.cover-wrap {
    user-select: none;
}

.field-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.field-name {
    font-size: 0.8rem;
    opacity: 0.5;
}

.color-palette-wrap {
    display: flex;
    align-items: center;
    border-radius: var(--borderRadius-s);
}

.color-palette-wrap>span {
    position: relative;
    cursor: pointer;
    display: block;
    width: 100%;
    height: 1.2rem;
    transition: .1s ease;
    transition-property: border-radius, transform;
}

.color-palette-wrap>span:last-child {
    border-radius: 0 var(--borderRadius-s) var(--borderRadius-s) 0;
}

.color-palette-wrap>span:first-child {
    border-radius: var(--borderRadius-s) 0 0 var(--borderRadius-s);
}

.color-palette-wrap>span:hover {
    z-index: 2;
    transform: scale(1.2);
    border-radius: var(--borderRadius-s);
}
</style>