<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps<{
    product: {
        id: string;
    };
}>();
const router = useRouter();
const open = ref<boolean>(false);

function toggleAlert() {
    open.value = !open.value;
};

function editPush(id: string) {
    router.push(`/dashboard/product/edit/${id}`);
};
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon">
                <span class="sr-only">
                    open menu
                </span>
                <IconEllipsis class="w-4 h-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="editPush(product.id)">
                <IconEdit />
                <span>
                    Edit
                </span>
            </DropdownMenuItem>
            <DropdownMenuItem @click="toggleAlert()">
                <IconTrash2 />
                <span>
                    Delete
                </span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

    <AlertDialog :open="open">
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>This action will permanently delete the product</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <Button variant="outline" @click="toggleAlert()">
                    Cancel
                </Button>
                <Button variant="destructive" @click="toggleAlert()">
                    Continue
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>
