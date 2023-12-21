<!-- vuetify的虚拟列表 https://vuetifyjs.com/en/components/virtual-scroller/#usage -->
<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';

const items = computed(() => {
    let items = [];
    for (let i = 0; i < 2000; i++) {
        items.push(i)
    };
    return items
})

// 缓存元素引用
const virtualScrollElements = ref();

onMounted(() => {
    virtualScrollElements.value = document.querySelectorAll('.v-virtual-scroll');
})

document.addEventListener('wheel', (e) => {
    e.preventDefault(); // 阻止默认滚动行为
    let deltaY = e.deltaY;
    virtualScrollElements.value.forEach((el: any) => {
        el.scrollTop += deltaY;
    });
}, { passive: false });
</script>

<template>
    <div class="virtual-container">
        <div class="virtual-list">
            <v-virtual-scroll height="500px" :items="items">
                <template v-slot:default="{ item }">
                    Item {{ item }}
                </template>
            </v-virtual-scroll>
            <v-virtual-scroll height="500px" :items="items">
                <template v-slot:default="{ item }">
                    Item {{ item }}
                </template>
            </v-virtual-scroll>
            <v-virtual-scroll height="500px" :items="items">
                <template v-slot:default="{ item }">
                    Item {{ item }}
                </template>
            </v-virtual-scroll>
        </div>
    </div>
</template>

<style scoped>
.virtual-container {
    height: 100%;
    overflow: auto;
}

.virtual-list {
    display: flex;
    height: 100%;
    overflow: hidden;
}

.v-virtual-scroll {
    overflow: hidden;
}
</style>