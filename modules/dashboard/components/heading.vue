<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface IProps {
    title: string;
    description: string;
    href?: string;
    label?: string;
}

const props = defineProps<IProps>();
</script>

<template>
    <div class="flex items-start justify-between">
        <div>
            <h2 class="text-3xl font-semibold tracking-tight">
                {{ props.title }}
            </h2>
            <p class="text-sm text-muted-foreground">
                {{ props.description }}
            </p>
        </div>

        <NuxtLink v-if="props.href" :class="cn(buttonVariants())" :to="props.href">
            <IconPlus class="mr-2 h-4 w-4" />
            {{ props.label }}
        </NuxtLink>
    </div>
</template>
