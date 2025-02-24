<script setup lang="ts">
import { IconMoon } from '#components';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useColorMode } from '@vueuse/core';

const colorMode = useColorMode();

function toggleTheme() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger>
            <div :class="cn(buttonVariants({ variant: 'outline', size: 'icon' }))" variant="outline" size="icon">
                <IconMoon />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="min-w-32" align="end">
            <DropdownMenuItem @click="toggleTheme">
                System
            </DropdownMenuItem>
            <DropdownMenuItem @click="toggleTheme">
                Dark
            </DropdownMenuItem>
            <DropdownMenuItem @click="toggleTheme">
                Light
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
