<template>
    <div class="stats-list">
        <StatsItem :typeStats="0" />
        <StatsItem :typeStats="1" />
        <StatsItem :typeStats="2" />
    </div>
</template>

<script setup>
import StatsItem from '@/components/Stats/StatsItem.vue'
</script>

<style scoped>
.stats-list {
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>