<script setup lang="ts">
import { Image } from "ant-design-vue";
defineProps<{
  resource: Resource;
}>();
</script>

<template>
  <div class="image-cover">
    <Image :preview="false" width="100%" height="100%" :src="resource.path">
      <template #placeholder>
        <div class="placeholder-cover"></div>
      </template>
    </Image>
  </div>
</template>

<style scoped>
.image-cover {
  position: relative;
  width: 100%;
  height: 100%;
}

:deep(.ant-image > .ant-image-img) {
  -webkit-user-drag: none;
  user-select: none;
  position: relative;
  width: 100%;
  height: auto;
  border-radius: var(--borderRadius-m);
}

.placeholder-cover {
  position: relative;
  width: 100%;
  height: auto;
  background-color: var(--color-bg-inset);
  border-radius: var(--borderRadius-m);
  overflow: hidden;
}
</style>
