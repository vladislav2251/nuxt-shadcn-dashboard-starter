<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

interface Props {
    tag?: string;
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    tag: 'ul',
});
</script>

<template>
    <component
        :is="props.tag"
        data-sidebar="menu"
        :class="cn('flex w-full min-w-0 flex-col gap-1', props.class)"
    >
        <slot />
    </component>
</template>
