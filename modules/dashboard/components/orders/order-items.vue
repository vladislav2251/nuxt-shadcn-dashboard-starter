<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table';
import { FlexRender, getCoreRowModel, useVueTable } from '@tanstack/vue-table';
import { Skeleton } from '~/components/ui/skeleton';

interface OrderItem {
    name: string;
    price: number;
    total: number;
    quantity: number;
};

const data = ref<OrderItem[]>([
    {
        name: 'Wireless Headphones',
        price: 25.99,
        total: 51.98,
        quantity: 1,
    },
    {
        name: 'Bluetooth Speaker',
        price: 49.99,
        total: 49.99,
        quantity: 2,
    },
]);

const columns: ColumnDef<OrderItem>[] = [
    {
        accessorKey: 'name',
        header: 'Product name',
        cell: ({ row }) => h('div', { class: 'flex items-center gap-2' }, [
            h(Skeleton, { class: 'w-20 h-20 border rounded-2xl border-border object-cover' }),
            h('span', row.getValue('name')),
        ]),
    },
    {
        accessorKey: 'quantity',
        header: 'Quantity',
        cell: ({ row }) => h('div', row.getValue('quantity')),
    },
    {
        accessorKey: 'price',
        header: () => h('div', { class: 'text-right' }, 'Price'),
        cell: ({ row }) => {
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(row.getValue('price'));
            return h('div', { class: 'text-right font-medium' }, formatted);
        },
    },
    {
        accessorKey: 'total',
        header: () => h('div', { class: 'text-right' }, 'Total'),
        cell: ({ row }) => {
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(row.getValue('total'));
            return h('div', { class: 'text-right font-medium' }, formatted);
        },
    },
];

const table = useVueTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
});
</script>

<template>
    <Card class="col-span-2">
        <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="text-lg font-bold leading-none tracking-tight">
                Order Items
            </h3>
        </div>

        <CardContent>
            <ScrollArea class="grid mt-4 w-full h-[240px]">
                <Table>
                    <TableHeader>
                        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                            <TableHead v-for="header in headerGroup.headers" :key="header.id">
                                <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header" :props="header.getContext()" />
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <template v-if="table.getRowModel().rows?.length">
                            <template v-for="row in table.getRowModel().rows" :key="row.id">
                                <TableRow :data-state="row.getIsSelected() && 'selected'">
                                    <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                                        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                                    </TableCell>
                                </TableRow>
                                <TableRow v-if="row.getIsExpanded()">
                                    <TableCell :colspan="row.getAllCells().length">
                                        {{ JSON.stringify(row.original) }}
                                    </TableCell>
                                </TableRow>
                            </template>
                        </template>

                        <TableRow v-else>
                            <TableCell
                                :colspan="columns.length"
                                class="h-24 text-center"
                            >
                                Ніяких результатів.
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </ScrollArea>
        </CardContent>
    </Card>
</template>
