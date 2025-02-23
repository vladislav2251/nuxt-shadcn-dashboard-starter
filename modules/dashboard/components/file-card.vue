<script setup lang="ts">
import filterBytes from '@/utils/filter-bytes';

const props = defineProps({
    file: {
        type: Object as () => File & { preview?: string; file: File },
        required: true,
    },
});

const emit = defineEmits(['remove']);
function isFileWithPreview(file: File): file is File & { preview: string } {
    return 'preview' in file && typeof file.preview === 'string';
};
</script>

<template>
    <div class="relative flex items-center space-x-4">
        <div class="flex flex-1 space-x-4">
            <div v-if="isFileWithPreview(props.file)" class="max-w-12 max-h-12">
                <img
                    :src="props.file.preview"
                    :alt="props.file.file.name"
                    class="aspect-square shrink-0 w-full h-full rounded-md object-cover"
                >
            </div>

            <div class="flex w-full flex-col gap-2">
                <div class="space-y-px">
                    <p class="line-clamp-1 text-sm font-medium text-foreground/80">
                        {{ props.file.file.name }}
                    </p>

                    <p class="text-xs text-muted-foreground">
                        {{ filterBytes(props.file.file.size) }}
                    </p>
                </div>
            </div>
        </div>

        <div class="flex items-center gap-2">
            <Button type="button" class="size-7 p-0" @click="emit('remove')">
                <IconCross class="size-4 " aria-hidden="true" />
                <span class="sr-only">Remove file</span>
            </Button>
        </div>
    </div>
</template>
