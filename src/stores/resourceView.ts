import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useLayoutStore } from "./layout";

export type DisplayLayoutType = "grid" | "waterfall";

// 资源（视图层）
export const useResourceViewStore = defineStore("resourceView", () => {
  const LayoutStore = useLayoutStore();
  const displayMaxRowNumber = computed(() =>
    Math.round(LayoutStore.layoutContainerWidth / 100)
  ); // 最大每行资源数量（按布局中间大小算）
  const displayRowNumber = ref(Math.round(displayMaxRowNumber.value / 2)); // 每行资源数量显示（默认为最大值的一半）
  const displayLayoutType = ref<DisplayLayoutType>("grid"); // 资源布局方式
  const isPreview = ref(false);
  const previewType = ref<PreviewType>("image");

  // 预览
  const showPreview = (type: PreviewType) => {
    previewType.value = type;
    isPreview.value = true;
  };

  // 关闭预览
  const hidePreview = () => {
    isPreview.value = false;
  };

  watch(
    () => displayMaxRowNumber.value,
    () => {
      // 如果显示数量大于最大显示数量则使用最大显示数量
      if (displayRowNumber.value > displayMaxRowNumber.value) {
        displayRowNumber.value = displayMaxRowNumber.value;
      }
    }
  );

  return {
    displayRowNumber,
    displayMaxRowNumber,
    displayLayoutType,
    isPreview,
    previewType,
    showPreview,
    hidePreview,
  };
});
