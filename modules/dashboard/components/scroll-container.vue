<script setup lang="ts">
interface IProps {
    scrollable?: boolean;
}

const props = defineProps<IProps>();
</script>

<template>
    <ScrollArea v-if="props.scrollable" class="h-[calc(100dvh-52px)]">
        <div class="h-full p-4 md:px-6">
            <slot />
        </div>
    </ScrollArea>

    <div v-else class="h-full p-4 md:px-6">
        <slot />
    </div>
</template>
