<script setup lang="ts">
import { useColorMode } from '#imports';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from 'lucide-vue-next';

const colorMode = useColorMode();
function setTheme(mode: 'system' | 'light' | 'dark') {
    colorMode.preference = mode;
}

const themeIcon = computed(() => {
    if (colorMode.preference === 'system') {
        return colorMode.value === 'dark' ? MoonIcon : SunIcon;
    }
    return colorMode.preference === 'dark' ? MoonIcon : SunIcon;
});
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger>
            <div :class="cn(buttonVariants({ variant: 'outline', size: 'icon' }))">
                <component :is="themeIcon" />
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
