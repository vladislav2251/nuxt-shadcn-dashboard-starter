<script setup lang="ts">
import filterBytes from '@/utils/filter-bytes';
import FileCard from './file-card.vue';

const props = defineProps({
    value: Array as () => File[],
    accept: { type: String, default: 'image/*' },
    maxSize: { type: Number, default: 1024 * 1024 * 5 },
    maxFiles: { type: Number, default: 1 },
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    progresses: Object as () => Record<string, number>,
});

const emit = defineEmits(['update:value']);

// eslint-disable-next-line ts/no-explicit-any
const files = ref<any>([]);
const isDragActive = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

const isDisabled = computed(() => props.disabled || files.value.length >= props.maxFiles);

const dropzoneProps = computed(() => ({
    accept: props.accept,
    multiple: props.multiple || props.maxFiles > 1,
}));

watch(() => props.value, (newValue) => {
    if (JSON.stringify(newValue) !== JSON.stringify(files.value)) {
        files.value = newValue;
    }
});

function handleDrop(event: DragEvent) {
    const droppedFiles = Array.from(event.dataTransfer?.files || []);
    processFiles(droppedFiles);
    isDragActive.value = false;
}

function handleClick() {
    fileInput.value?.click();
    isDragActive.value = false;
}

function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const selectedFiles = Array.from(input.files || []);
    processFiles(selectedFiles);
}

function processFiles(selectedFiles: File[]) {
    const validFiles = selectedFiles.filter(file => file.size <= props.maxSize);

    const newFiles = validFiles.map(file => ({
        preview: URL.createObjectURL(file),
        file,
    }));

    files.value = props.multiple ? [...files.value, ...newFiles] : [...newFiles];
    emit('update:value', files.value);
}

function removeFile(index: number) {
    const removedFile = files.value[index];
    files.value.splice(index, 1);
    URL.revokeObjectURL(removedFile.preview);
    emit('update:value', files.value);
}
</script>

<template>
    <div class="relative flex flex-col gap-6 overflow-hidden">
        <div
            v-bind="dropzoneProps"
            class="group relative grid h-52 w-full cursor-pointer dark:hover:bg-zinc-900 place-items-center rounded-lg border-2 border-dashed px-5 py-2.5 text-center transition" :class="[
                isDragActive ? 'border-muted-foreground/50' : 'border-muted-foreground/25',
                isDisabled ? 'pointer-events-none opacity-60' : 'hover:bg-muted/100',
            ]"
            @drop.prevent="handleDrop"
            @dragover.prevent="isDragActive = true"
            @dragleave="isDragActive = false"
            @click="handleClick"
        >
            <input
                ref="fileInput"
                type="file"
                :multiple="multiple"
                :accept="accept"
                :disabled="isDisabled"
                class="hidden"
                @change="handleFileChange"
            >
            <div v-if="isDragActive" class="flex flex-col items-center justify-center gap-4 sm:px-5">
                <div class="rounded-full border border-dashed p-3">
                    <IconUpload class="size-7 text-muted-foreground" />
                </div>
                <p class="font-medium text-muted-foreground">
                    Upload your files here
                </p>
            </div>
            <div v-else class="flex flex-col items-center justify-center gap-4 sm:px-5">
                <div class="rounded-full border border-dashed p-3">
                    <IconUpload class="size-7 text-muted-foreground" />
                </div>
                <div class="space-y-px">
                    <p class="font-medium text-sm text-muted-foreground">
                        Drag 'n' drop files here, or click to select files
                    </p>
                    <p class="text-sm text-muted-foreground/70">
                        <span v-if="maxFiles > 1">
                            {{ maxFiles === Infinity ? 'multiple' : maxFiles }} files (up to {{ filterBytes(maxSize) }} each)
                        </span>
                        <span v-else>
                            file with {{ filterBytes(maxSize) }}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <ScrollArea v-if="files.length" class="h-fit w-full px-3">
            <div class="max-h-48 space-y-4">
                <FileCard
                    v-for="(file, index) in files"
                    :key="index"
                    :file="file"
                    @remove="removeFile(index)"
                />
            </div>
        </ScrollArea>
    </div>
</template>
