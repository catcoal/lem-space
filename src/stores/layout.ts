import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLayoutStore = defineStore("layout", () => {
  const layoutAsideLeftWidth = ref(250); // 左侧宽度
  const layoutAsideRightWidth = ref(250); // 右侧宽度
  const layoutContainerWidth = computed(
    () =>
      window.innerWidth -
      layoutAsideLeftWidth.value -
      layoutAsideRightWidth.value
  ); // 中间主内容宽度

  return {
    layoutAsideLeftWidth,
    layoutAsideRightWidth,
    layoutContainerWidth,
  };
});
