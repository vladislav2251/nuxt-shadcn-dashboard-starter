<script setup lang="ts">
const data = [
    {
        name: 'Jan',
        mobile: Math.floor(Math.random() * 5000) + 1000,
        desktop: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Feb',
        mobile: Math.floor(Math.random() * 5000) + 1000,
        desktop: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Mar',
        mobile: Math.floor(Math.random() * 5000) + 1000,
        desktop: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Apr',
        mobile: Math.floor(Math.random() * 5000) + 1000,
        desktop: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'May',
        mobile: Math.floor(Math.random() * 5000) + 1000,
        desktop: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Jun',
        mobile: Math.floor(Math.random() * 5000) + 1000,
        desktop: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Jul',
        mobile: Math.floor(Math.random() * 5000) + 1000,
        desktop: Math.floor(Math.random() * 5000) + 1000,
    },

];
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>Area Chart - Stacked</CardTitle>
            <CardDescription>
                Showing total visitors for the last 6 months
            </CardDescription>
        </CardHeader>

        <CardContent class="pb-6 px-0 pt-0">
            <AreaChart
                :colors="['#449F97', '#C8C5DC']"
                :margin="{ left: 12, right: 12 }"
                :show-legend="false"
                :data="data"
                index="name"
                class="!h-full"
                :show-y-axis="false"
                :categories="['mobile', 'desktop']"
            />
        </CardContent>

        <CardFooter>
            <div class="flex w-full items-start gap-2 text-sm">
                <div class="grid gap-2">
                    <div class="flex items-center gap-2 font-medium leading-none">
                        Trending up by 5.2% this month
                        <IconTrendingUp class="h-4 w-4" />
                    </div>
                    <div class="flex items-center gap-2 leading-none text-muted-foreground">
                        January - June 2024
                    </div>
                </div>
            </div>
        </CardFooter>
    </Card>
</template>
