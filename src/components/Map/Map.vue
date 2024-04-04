<template>
    <div id="map" class="map-container">
    </div>
</template>

<script setup>
// Map component, we will perform it to have a fluid map
import { onMounted, ref } from 'vue'
import { Map, TileLayer } from '@/assets/leaflet/leaflet-src.esm.js'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()

const map = ref(null)

onMounted(() => {
    // init map
    map.value = new Map('map')
    map.value.setView(configStore.map.center, configStore.map.zoom)
    // add tile layer
    const tileLayer = new TileLayer(configStore.tile.url, configStore.tile.options)
    tileLayer.addTo(map.value)
})
</script>

<style scoped>
.map-container {
    height: 50vh;
}
</style>