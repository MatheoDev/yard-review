<template>
    <div id="map" class="map-container">
    </div>
</template>

<script setup>
// Map component, we will perform it to have a fluid map
import { onMounted, ref } from 'vue'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()

const map = ref(null)

onMounted(() => {
    // init map
    map.value = L.map('map', configStore.map)
    // add tile layer
    const tileLayer = L.tileLayer(configStore.tile.url, configStore.tile.options)
    tileLayer.addTo(map.value)
})
</script>

<style scoped>
.map-container {
    height: 50vh;
}
</style>