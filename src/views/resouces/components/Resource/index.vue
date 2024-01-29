<script setup lang="ts">
import VirtualList from "./virtual-list.vue";
import SelectionArea from "@/components/SelectionArea/index.vue";
import Context from "@/components/Context/index.vue";
// import { GetRandomImages } from "@/services/test";
import { onMounted, ref } from "vue";

import { readDir, BaseDirectory, copyFile } from "@tauri-apps/api/fs";
import { convertFileSrc } from "@tauri-apps/api/tauri";
import { appWindow } from "@tauri-apps/api/window";

const resources = ref();

onMounted(() => {
  //   GetRandomImages().then((res) => {
  //     resources.value = res;
  //   });
  GetFiles();
});

appWindow.onFileDropEvent((event) => {
  console.log("onFileDropEvent");
  if (event.payload.type === "drop") {
    CopyFile(event.payload.paths, "Desktop/LemDrive");
  }
});

const CopyFile = async (paths: string[], to: string) => {
  const promises = paths.map(async (path) => {
    try {
      let name = path.split("/").at(-1);
      await copyFile(path, to + "/" + name, {
        dir: BaseDirectory.Home,
      });
    } catch (err: any) {
      console.log(err);
    }
  });
  await Promise.all(promises);
  GetFiles();
};

const GetFiles = () => {
  // Reads the `$APPDATA/users` directory recursively
  readDir("Desktop/LemDrive", {
    dir: BaseDirectory.Home,
    recursive: true,
  })
    .then((res) => {
      resources.value = getAllFile(res);
    })
    .catch((err) => {
      console.log("err");
      console.log(err);
    });
};

function getAllFile(entries: any[]): any[] {
  let data = [];
  for (const entry of entries) {
    data.push({
      name: entry.name,
      path: convertFileSrc(entry.path),
    });
    if (entry.children) {
      data.push(...getAllFile(entry.children));
    }
  }
  return data;
}
</script>

<template>
  <div class="resource-inner">
    <Context type="Sort" trigger="contextmenu">
      <SelectionArea
        @update:selected="(e) => console.log(e)"
        selection-el=".resource-item"
        class="resource-selection-area"
      >
        <VirtualList :resources="resources"></VirtualList>
      </SelectionArea>
    </Context>
  </div>
</template>

<style scoped>
.resource-inner {
  height: 100%;
  overflow: auto;
}

.resource-selection-area {
  height: inherit;
}
</style>
