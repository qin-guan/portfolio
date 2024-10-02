<script setup lang="ts">

const days = daysBetween(new Date("2026-08-15"), new Date(Date.now()))

function daysBetween(date1, date2) {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const differenceMs = Math.abs(date1 - date2);
    return Math.round(differenceMs / ONE_DAY);
}

</script>
<template>

	{{ days }} days

</template>