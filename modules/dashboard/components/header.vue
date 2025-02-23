<script setup lang="ts">
import UserNav from './user-nav.vue';
</script>

<template>
    <header
        class="flex border-b h-14 lg:h-[60px] shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear"
    >
        <div class="flex items-center gap-2 px-4">
            <SidebarTrigger
                class="-ml-1 [&_svg]:size-[none] [&_svg]:shrink-[none] border-none"
            />
        </div>

        <UserNav />
    </header>
</template>
