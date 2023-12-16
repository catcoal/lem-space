import { defineStore } from "pinia";
import { ref } from "vue";

export type DisplayLayoutType = "grid" | "waterfall";

export const useResourceStore = defineStore("resource", () => {
  const displayRowNumber = ref(5); // 每行资源数量显示
  const displayLayoutType = ref<DisplayLayoutType>("grid"); // 资源布局方式

  return {
    displayRowNumber,
    displayLayoutType,
  };
});
