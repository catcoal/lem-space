<template>
    <div>
        <div ref="parentRef" class="List" style="height: 400px; width: 400px; overflow-y: auto; contain: strict;">
            <div :style="{
                height: `${totalSize}px`,
                width: '100%',
                position: 'relative',
            }">
                <div :style="{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    transform: `translateY(${virtualRows[0]?.start ?? 0}px)`,
                }">
                    <div v-for="virtualRow in virtualRows" :key="virtualRow.key" :data-index="virtualRow.index"
                        :ref="measureElement" :class="virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'">
                        <div style="padding: 10px 0">
                            <div>Row {{ virtualRow.index }}</div>
                            <!-- <div>{{ sentences[virtualRow.index] }}</div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useVirtualizer } from '@tanstack/vue-virtual'
const items = () => {
    let items = [];
    for (let i = 0; i < 2000; i++) {
        items.push(i)
    };
    return items
}

let sentences = items();

const parentRef = ref<HTMLElement | null>(null)

const rowVirtualizer = useVirtualizer({
    count: sentences.length,
    getScrollElement: () => parentRef.value,
    estimateSize: () => 55,
})

const virtualRows = computed(() => rowVirtualizer.value.getVirtualItems())

const totalSize = computed(() => rowVirtualizer.value.getTotalSize())

const measureElement = (el: any) => {
    if (!el) {
        return
    }

    rowVirtualizer.value.measureElement(el)

    return undefined
}
</script>
  