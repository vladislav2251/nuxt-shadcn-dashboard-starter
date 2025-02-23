import type { ColumnDef } from '@tanstack/vue-table';
import { Button, IconArrowUpDown } from '#components';
import { h } from 'vue';
import Skeleton from '~/components/ui/skeleton/Skeleton.vue';
import ProductTableDropdown from './product-table-dropdown.vue';

export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    price: number;
}

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'image',
        header: () => h('div', { class: 'text-right' }, 'Image'),
        cell: ({ row }) => {
            const imageUrl = row.getValue('image');
            return h(Skeleton, { src: imageUrl, class: 'w-16 h-16 object-cover rounded' });
        },
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return h(Button, {
                variant: 'ghost',
                onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
            }, () => ['Name', h(IconArrowUpDown, { class: 'ml-2 h-4 w-4' })]);
        },
        cell: ({ row }) => {
            return h('div', { class: 'text-right' }, row.getValue('name'));
        },
    },
    {
        accessorKey: 'category',
        header: () => h('div', { class: 'text-right' }, 'Category'),
        cell: ({ row }) => {
            return h('div', { class: 'text-right' }, row.getValue('category'));
        },
    },
    {
        accessorKey: 'price',
        header: ({ column }) => {
            return h(Button, {
                variant: 'ghost',
                onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
            }, () => ['Price', h(IconArrowUpDown, { class: 'ml-2 h-4 w-4' })]);
        },
        cell: ({ row }) => {
            const price = Number.parseFloat(row.getValue('price'));
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(price);

            return h('div', { class: 'text-right font-medium' }, formatted);
        },
    },
    {
        accessorKey: 'description',
        header: () => h('div', { class: 'text-right' }, 'Description'),
        cell: ({ row }) => {
            return h('div', { class: 'text-right' }, row.getValue('description'));
        },
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const product = row.original;

            return h(ProductTableDropdown, {
                product,
                onExpand: row.toggleExpanded,
            });
        },
    },
];
