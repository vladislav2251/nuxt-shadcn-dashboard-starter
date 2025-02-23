<script setup lang="ts">
import type {
    ColumnFiltersState,
    ExpandedState,
    SortingState,
    Updater,
    VisibilityState,
} from '@tanstack/vue-table';
import type { Order } from './columns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { ref } from 'vue';
import { columns } from './columns';

const data = ref<Order[]>([
    {
        id: '1a2b3c',
        name: 'Product A',
        customer: 'John Doe',
        status: 'success',
        date: '2023-02-24',
        email: 'john.doe@example.com',
        price: 316,
    },
    {
        id: '2b3c4d',
        name: 'Product B',
        customer: 'Jane Smith',
        status: 'processing',
        date: '2023-03-10',
        email: 'jane.smith@example.com',
        price: 425,
    },
    {
        id: '3c4d5e',
        name: 'Product C',
        customer: 'Alice Johnson',
        status: 'failed',
        date: '2023-04-15',
        email: 'alice.johnson@example.com',
        price: 299,
    },
    {
        id: '4d5e6f',
        name: 'Product D',
        customer: 'Bob Brown',
        status: 'success',
        date: '2023-05-20',
        email: 'bob.brown@example.com',
        price: 512,
    },
    {
        id: '5e6f7g',
        name: 'Product E',
        customer: 'Charlie White',
        status: 'processing',
        date: '2023-06-05',
        email: 'charlie.white@example.com',
        price: 378,
    },
    {
        id: '6f7g8h',
        name: 'Product F',
        customer: 'David Black',
        status: 'failed',
        date: '2023-07-18',
        email: 'david.black@example.com',
        price: 621,
    },
    {
        id: '7g8h9i',
        name: 'Product G',
        customer: 'Emily Green',
        status: 'success',
        date: '2023-08-22',
        email: 'emily.green@example.com',
        price: 455,
    },
    {
        id: '8h9i0j',
        name: 'Product H',
        customer: 'Franklin Harris',
        status: 'processing',
        date: '2023-09-30',
        email: 'franklin.harris@example.com',
        price: 389,
    },
    {
        id: '9i0j1k',
        name: 'Product I',
        customer: 'Grace Lee',
        status: 'failed',
        date: '2023-10-14',
        email: 'grace.lee@example.com',
        price: 267,
    },
    {
        id: '0j1k2l',
        name: 'Product J',
        customer: 'Henry Adams',
        status: 'success',
        date: '2023-11-25',
        email: 'henry.adams@example.com',
        price: 499,
    },
    {
        id: '1k2l3m',
        name: 'Product K',
        customer: 'Isabella Martinez',
        status: 'processing',
        date: '2023-12-05',
        email: 'isabella.martinez@example.com',
        price: 350,
    },
    {
        id: '2l3m4n',
        name: 'Product L',
        customer: 'Jack Wilson',
        status: 'failed',
        date: '2024-01-17',
        email: 'jack.wilson@example.com',
        price: 275,
    },
    {
        id: '3m4n5o',
        name: 'Product M',
        customer: 'Katherine Moore',
        status: 'success',
        date: '2024-02-08',
        email: 'katherine.moore@example.com',
        price: 620,
    },
    {
        id: '4n5o6p',
        name: 'Product N',
        customer: 'Liam Hall',
        status: 'processing',
        date: '2024-03-11',
        email: 'liam.hall@example.com',
        price: 489,
    },
    {
        id: '5o6p7q',
        name: 'Product O',
        customer: 'Mia Allen',
        status: 'failed',
        date: '2024-04-19',
        email: 'mia.allen@example.com',
        price: 230,
    },
    {
        id: '6p7q8r',
        name: 'Product P',
        customer: 'Noah Scott',
        status: 'success',
        date: '2024-05-23',
        email: 'noah.scott@example.com',
        price: 540,
    },
    {
        id: '7q8r9s',
        name: 'Product Q',
        customer: 'Olivia Young',
        status: 'processing',
        date: '2024-06-30',
        email: 'olivia.young@example.com',
        price: 412,
    },
    {
        id: '8r9s0t',
        name: 'Product R',
        customer: 'Paul Nelson',
        status: 'failed',
        date: '2024-07-12',
        email: 'paul.nelson@example.com',
        price: 295,
    },
    {
        id: '9s0t1u',
        name: 'Product S',
        customer: 'Quinn Carter',
        status: 'success',
        date: '2024-08-28',
        email: 'quinn.carter@example.com',
        price: 475,
    },
    {
        id: '0t1u2v',
        name: 'Product T',
        customer: 'Rachel Turner',
        status: 'processing',
        date: '2024-09-15',
        email: 'rachel.turner@example.com',
        price: 350,
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

function valueUpdater<T extends Updater<unknown>>(updaterOrValue: T, ref: Ref) {
    ref.value = typeof updaterOrValue === 'function'
        ? updaterOrValue(ref.value)
        : updaterOrValue;
};
</script>

<template>
    <Input
        class="max-w-[384px]"
        placeholder="Product name..."
        :model-value="table.getColumn('name')?.getFilterValue() as string"
        @update:model-value=" table.getColumn('name')?.setFilterValue($event)"
    />
    <div class="relative flex flex-1">
        <ScrollArea class="grid h-[calc(80vh-220px)] w-full rounded-md border md:h-[calc(80dvh-200px)]">
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
