import type { ColumnDef } from '@tanstack/vue-table';
import { Button, Checkbox, IconArrowUpDown } from '#components';
import { h } from 'vue';
import orderTableDropdown from '../order-table-dropdown.vue';

export interface Order {
    id: string;
    name: string;
    customer: string;
    status: string;
    email: string;
    date: string;
    price: number;
}

export const columns: ColumnDef<Order>[] = [
    {
        id: 'select',
        header: ({ table }) => h(Checkbox, {
            'modelValue': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
            'onUpdate:modelValue': value => table.toggleAllPageRowsSelected(!!value),
            'ariaLabel': 'Select all',
        }),
        cell: ({ row }) => h(Checkbox, {
            'modelValue': row.getIsSelected(),
            'onUpdate:modelValue': value => row.toggleSelected(!!value),
            'ariaLabel': 'Select row',
        }),
        enableSorting: false,
        enableHiding: false,
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
        accessorKey: 'customer',
        header: () => h('div', { class: 'text-right' }, 'Customer'),
        cell: ({ row }) => {
            return h('div', { class: 'text-right' }, row.getValue('customer'));
        },
    },
    {
        accessorKey: 'status',
        header: () => h('div', { class: 'text-right' }, 'Status'),
        cell: ({ row }) => {
            return h('div', { class: 'text-right' }, row.getValue('status'));
        },
    },
    {
        accessorKey: 'email',
        header: () => h('div', { class: 'text-right' }, 'Email'),
        cell: ({ row }) => {
            return h('div', { class: 'text-right' }, row.getValue('email'));
        },
    },
    {
        accessorKey: 'date',
        header: () => h('div', { class: 'text-right' }, 'Date'),
        cell: ({ row }) => {
            const date = new Date(row.getValue('date'));
            const formattedDate = new Intl.DateTimeFormat('uk-UA', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }).format(date);

            return h('div', { class: 'truncate w-64' }, formattedDate);
        },
    },
    {
        accessorKey: 'price',
        header: () => h('div', { class: 'text-right' }, 'Price'),
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
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const order = row.original;

            return h(orderTableDropdown, {
                order,
                onExpand: row.toggleExpanded,
            });
        },
    },
];
