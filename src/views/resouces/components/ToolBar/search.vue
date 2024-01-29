<script setup lang="ts">
import { Input as aInput } from "ant-design-vue";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <aInput placeholder="搜索名称/备注">
    <template #prefix>
      <div class="prefix-wrap">
        <MagnifyingGlassIcon class="prefix-icon" />
        <ChevronDownIcon class="prefix-icon down" />
      </div>
    </template>
  </aInput>
</template>

<style scoped>
.prefix-wrap {
  cursor: pointer;
  display: flex;
  align-items: center;
  border-right: 1px solid var(--color-border-default);
  padding-right: 0.5rem;
}

.prefix-icon {
  width: 1rem;
  height: 1rem;
}

.prefix-icon.down {
  width: 0.6rem;
  height: 0.6rem;
  opacity: 0.8;
}
</style>
