<template>
  <div class="stats-item" ref="stats">
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
import Stats from 'stats.js'

const statsJs = new Stats();
const stats = ref(null);

const props = defineProps({
  // 0 => FPS Frames rendered in the last second. The higher the number the better
  // 1 => MS Milliseconds needed to render a frame. The lower the number the better
  // 2 => MB MBytes of allocated memory. (Run Chrome with --enable-precise-memory-info)
  // 3 => Custom panel - User defined panel see "https://github.com/mrdoob/stats.js/blob/master/examples/custom.html"
  typeStats: {
    type: Number,
    required: true
  }
})

onMounted(() => {
  statsJs.showPanel(props.typeStats);
  // define relative position (default is absolute)
  statsJs.dom.style.position = 'relative';
  // add the stats to the DOM
  stats.value.appendChild(statsJs.dom);
  // start the animation
  requestAnimationFrame(animate);
})

function animate() {
  statsJs.begin();
  // code to be animated
  // here we get the current instance
  getCurrentInstance()
  statsJs.end();
  requestAnimationFrame(animate);
}
</script>