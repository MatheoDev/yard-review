import { defineStore } from "pinia"
import { ref } from "vue"

export const useConfigStore = defineStore('config', () => {
    const tile = ref({
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        options: {
            attribution: '1.0.0 - MatheoDev © 2024',
            edgeBufferTiles: 5,
            maxZoom: 18,
            minZoom: 15,
        }
    })

    const map = ref({
        center: [51.01137015793673, 2.1842228124579064],
        zoom: 15,
    })

    return { tile, map }
})