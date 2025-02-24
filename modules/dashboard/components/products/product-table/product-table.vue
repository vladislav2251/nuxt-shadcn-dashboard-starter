<script setup lang="ts">
import type {
    ColumnFiltersState,
    ExpandedState,
    SortingState,
    Updater,
    VisibilityState,
} from '@tanstack/vue-table';
import type { Product } from './columns';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    FlexRender,
    getCoreRowModel,
    getExpandedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useVueTable,
} from '@tanstack/vue-table';
import { columns } from './columns';

function valueUpdater<T extends Updater<unknown>>(updaterOrValue: T, ref: Ref) {
    ref.value = typeof updaterOrValue === 'function'
        ? updaterOrValue(ref.value)
        : updaterOrValue;
};

const data = ref<Product[]>([
    {
        id: '1',
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        image: '',
        category: 'Electronics',
        price: 199.99,
    },
    {
        id: '2',
        name: 'Smartphone Stand',
        description: 'Adjustable stand for smartphones and tablets',
        image: '',
        category: 'Accessories',
        price: 29.99,
    },
    {
        id: '3',
        name: 'Mechanical Keyboard',
        description: 'RGB backlit mechanical keyboard with customizable keys',
        image: '',
        category: 'Electronics',
        price: 129.99,
    },
    {
        id: '4',
        name: 'Gaming Mouse',
        description: 'Ergonomic gaming mouse with customizable DPI settings',
        image: '',
        category: 'Accessories',
        price: 59.99,
    },
    {
        id: '5',
        name: 'USB-C Hub',
        description: 'Multiport USB-C hub with HDMI, USB, and SD card slots',
        image: '',
        category: 'Accessories',
        price: 49.99,
    },
    {
        id: '6',
        name: '4K Monitor',
        description: '27-inch 4K UHD monitor with HDR support',
        image: '',
        category: 'Electronics',
        price: 349.99,
    },
    {
        id: '7',
        name: 'Bluetooth Speaker',
        description: 'Portable Bluetooth speaker with deep bass and long battery life',
        image: '',
        category: 'Audio',
        price: 79.99,
    },
    {
        id: '8',
        name: 'External SSD',
        description: '1TB portable external SSD with fast read/write speeds',
        image: '',
        category: 'Storage',
        price: 149.99,
    },
    {
        id: '9',
        name: 'Smartwatch',
        description: 'Fitness tracking smartwatch with heart rate monitor',
        image: '',
        category: 'Wearables',
        price: 199.99,
    },
    {
        id: '10',
        name: 'Wireless Charger',
        description: 'Fast wireless charger for smartphones and accessories',
        image: '',
        category: 'Accessories',
        price: 39.99,
    },
    {
        id: '11',
        name: 'Wireless Charger',
        description: 'Fast wireless charger for smartphones and accessories',
        image: '',
        category: 'Accessories',
        price: 39.99,
    },
]);

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});
const expanded = ref<ExpandedState>({});

const table = useVueTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
    onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
    onExpandedChange: updaterOrValue => valueUpdater(updaterOrValue, expanded),
    state: {
        get sorting() { return sorting.value; },
        get columnFilters() { return columnFilters.value; },
        get columnVisibility() { return columnVisibility.value; },
        get rowSelection() { return rowSelection.value; },
        get expanded() { return expanded.value; },
    },
});
</script>

<template>
    <div class="flex flex-wrap items-center gap-4">
        <Input
            class="max-w-[384px]"
            placeholder="Search name..."
            :model-value="table.getColumn('name')?.getFilterValue() as string"
            @update:model-value=" table.getColumn('name')?.setFilterValue($event)"
        />

        <Button class="border-dashed border hover:bg-zinc-900" variant="ghost">
            <IconPlusCircle />
            Categories
        </Button>
    </div>
    <div class="relative flex flex-1">
        <ScrollArea class="grid h-[calc(91vh-220px)] w-full rounded-md border md:h-[calc(88vh-200px)]">
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
                            Not results.
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </ScrollArea>
    </div>
    <div class="flex items-center justify-end space-x-2">
        <div class="space-x-2">
            <Button
                variant="outline"
                size="icon"
                :disabled="!table.getCanPreviousPage()"
                @click="table.previousPage()"
            >
                <IconChevronLeft />
            </Button>
            <Button
                variant="outline"
                size="icon"
                :disabled="!table.getCanNextPage()"
                @click="table.nextPage()"
            >
                <IconChevronRight />
            </Button>
        </div>
    </div>
</template>
