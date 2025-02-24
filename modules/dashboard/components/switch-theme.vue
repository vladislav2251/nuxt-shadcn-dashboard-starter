<script setup lang="ts">
import { IconMoon } from '#components';
import { useColorMode } from '#imports';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const colorMode = useColorMode();

function setTheme(mode: 'system' | 'light' | 'dark') {
    colorMode.preference = mode;
}
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger>
            <div :class="cn(buttonVariants({ variant: 'outline', size: 'icon' }))">
                <IconMoon />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="min-w-32" align="end">
            <DropdownMenuItem @click="setTheme('system')">
                System
            </DropdownMenuItem>
            <DropdownMenuItem @click="setTheme('dark')">
                Dark
            </DropdownMenuItem>
            <DropdownMenuItem @click="setTheme('light')">
                Light
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
