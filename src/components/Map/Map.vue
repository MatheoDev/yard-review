<template>
    <div class="test">
        <div class="btn">
            <button @click="addPolygon">Add polygon</button>
            <button @click="hidePolygon">Hide polygon</button>
            <button @click="showPolygon">Show polygon</button>
            <button @click="removePolygon">Remove polygon</button>
            <button @click="incrementBearing">+</button>
            <button @click="decrementBearing">-</button>
        </div>

        <div id="map" class="map-container">
        </div>
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

    // add arround this coord 51.01137015793673, 2.1842228124579064 some polygon (rectangle 10px sur 20px en coord gps)
    // const polygon = L.polygon([
    //     [51.01137015793673, 2.1842228124579064],
    //     [51.01137015793673, 2.1842228124579064 + 0.0001],
    //     [51.01137015793673 + 0.0001, 2.1842228124579064 + 0.0001],
    //     [51.01137015793673 + 0.0001, 2.1842228124579064]
    // ]).addTo(map.value)
})

const addPolygon = () => {
    for (let i = 0; i < 100; i++) {
        const layerGroup = L.layerGroup().addTo(map.value)

        for (let j = 0; j < 100; j++) {
            L.polygon([
                [51.01137015793673 + i * 0.0001, 2.1842228124579064 + j * 0.0001],
                [51.01137015793673 + i * 0.0001, 2.1842228124579064 + j * 0.0001 + 0.0001],
                [51.01137015793673 + i * 0.0001 + 0.0001, 2.1842228124579064 + j * 0.0001 + 0.0001],
                [51.01137015793673 + i * 0.0001 + 0.0001, 2.1842228124579064 + j * 0.0001]
            ]).addTo(layerGroup)
        }
    }
}

const hidePolygon = () => {
    map.value.eachLayer((layer) => {
        if (layer instanceof L.Polygon) {
            layer.setStyle({ opacity: 0 })
        }
    })
}

const showPolygon = () => {
    map.value.eachLayer((layer) => {
        if (layer instanceof L.Polygon) {
            layer.setStyle({ opacity: 1 })
        }
    })
}

const removePolygon = () => {
    map.value.eachLayer((layer) => {
        if (layer instanceof L.Polygon) {
            map.value.removeLayer(layer)
        }
    })
}

const incrementBearing = () => {
    map.value.setBearing(map.value.getBearing() + 1)
}

const decrementBearing = () => {
    map.value.setBearing(map.value.getBearing() - 1)
}
</script>

<style scoped>
.map-container {
    height: 80vh;
}
.btn {
    display: flex;
    gap: 10px;
    margin: 10px;
}
</style>