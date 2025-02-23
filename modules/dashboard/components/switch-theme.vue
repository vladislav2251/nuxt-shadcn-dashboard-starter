<script setup lang="ts">
import { IconMoon } from '#components';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger>
            <div :class="cn(buttonVariants({ variant: 'outline', size: 'icon' }))" variant="outline" size="icon">
                <IconMoon />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="min-w-32" align="end">
            <DropdownMenuItem>
                System
            </DropdownMenuItem>
            <DropdownMenuItem>
                Dark
            </DropdownMenuItem>
            <DropdownMenuItem>
                Light
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
