<script setup lang="ts">
const data = [
    { name: 'chrome', visitors: 275, fill: '#C8C5DC' },
    { name: 'safari', visitors: 200, fill: '#079485' },
    { name: 'firefox', visitors: 287, fill: '#203E49' },
    { name: 'edge', visitors: 173, fill: '#E9BC5F' },
    { name: 'other', visitors: 190, fill: '#F79858' },
];

function valueFormatter(tick: number | Date) {
    return typeof tick === 'number' ? `${new Intl.NumberFormat('us').format(tick).toString()}` : '';
}
</script>

<template>
    <Card class="h-full">
        <CardHeader class="items-center pb-0">
            <CardTitle>Pie Chart - Donut with Text</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
            <DonutChart
                index="name"
                category="visitors"
                class="!h-full"
                :data="data"
                :colors="data.map((item) => item.fill)"
                :value-formatter="valueFormatter"
            />
        </CardContent>

        <CardFooter class="flex-col gap-2 text-sm">
            <div class="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month
                <IconTrendingUp class="h-4 w-4" />
            </div>
            <div class="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
            </div>
        </CardFooter>
    </Card>
</template>
