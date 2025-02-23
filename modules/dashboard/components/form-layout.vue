<script setup lang="ts">
import Header from './header.vue';
import SidebarNav from './sidebar-nav.vue';
</script>

<template>
    <SidebarProvider>
        <SidebarNav />

        <SidebarInset>
            <Header />
            <slot />
        </SidebarInset>
    </SidebarProvider>
</template>
