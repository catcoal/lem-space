<script setup lang="ts">
import { Button } from "ant-design-vue"
import SettingFieldItem from "../components/setting-field-item/index.vue"
</script>

<template>
    <div class="about">
        <SettingFieldItem :title="'版本 v0.0.1'">
            <template #content>
                <div class="version-wrap">
                    <Button :loading="false" type="primary">检查更新</Button>
                </div>
            </template>
        </SettingFieldItem>
    </div>
</template>

<style scoped>
.about {
    width: 100%;
    height: 100%;
    display: flex;
}

.version-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.version-wrap>span {
    opacity: 0.7;
}
</style>