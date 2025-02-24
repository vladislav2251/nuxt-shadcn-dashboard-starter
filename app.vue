<script setup>
import { useHead } from '#imports';
import { useColorMode } from '@vueuse/core';
import { computed } from 'vue';

const colorMode = useColorMode();
const color = computed(() => (colorMode.value === 'dark' ? '#111827' : 'white'));

useHead({
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'theme-color', name: 'theme-color', content: color },
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    htmlAttrs: { lang: 'en', class: colorMode.value },
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
