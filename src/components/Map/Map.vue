<template>
    <div id="map" class="map-container">
    </div>
</template>

<script setup>
// Map component, we will perform it to have a fluid map
import { onMounted } from 'vue'
import { Map, TileLayer } from '@/assets/leaflet/leaflet-src.esm.js'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()

onMounted(() => {
    // init map
    const map = new Map('map')
    map.setView(configStore.map.center, configStore.map.zoom)
    // add tile layer
    const tileLayer = new TileLayer(configStore.tile.url, configStore.tile.options)
    tileLayer.addTo(map)
})
</script>

<style scoped>
.map-container {
    height: 50vh;
}
</style>