<script setup lang="ts">
import PreviewToolbar from "./components/toolbar/index.vue"
import ImageViewer from "./components/image-viewer/index.vue"
import { ref } from 'vue';

const imageViewerRef = ref(null);

const handleTool = (type: ToolType) => {
    (imageViewerRef.value as any).handleTool(type);
}

</script>

<template>
    <div class="preview-container">
        <header>
            <PreviewToolbar preview-type="image" @tool-click="handleTool"></PreviewToolbar>
        </header>
        <main>
            <ImageViewer ref="imageViewerRef"></ImageViewer>
        </main>
        <footer>

        </footer>
    </div>
</template>

<style scoped>
.preview-container {
    display: flex;
    height: 100vh;
    flex-direction: column;
}

main {
    position: relative;
    height: 100%;
    overflow: hidden;
}
</style>