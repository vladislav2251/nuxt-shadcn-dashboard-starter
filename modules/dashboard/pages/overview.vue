<script setup lang="ts">
import FormLayout from '../components/form-layout.vue';
import AreaGraph from '../components/overview/area-graph.vue';
import BarGraph from '../components/overview/bar-graph.vue';
import PieGraph from '../components/overview/pie-graph.vue';
import Sales from '../components/overview/sales.vue';
import Stats from '../components/overview/stats.vue';
import ScrollContainer from '../components/scroll-container.vue';

useHead({
    title: 'Nuxt Shadcn Dashboard Starter',
});
</script>

<template>
    <FormLayout>
        <ScrollContainer scrollable>
            <div class="space-y-2">
                <div class="flex items-center justify-between space-y-2">
                    <h2 class="text-2xl font-bold tracking-tight">
                        Hello, welcome back! 👋
                    </h2>
                </div>

                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Stats />
                </div>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-7">
                    <div class="col-span-4">
                        <BarGraph />
                    </div>

                    <div class="col-span-4 xl:col-span-3">
                        <Sales />
                    </div>

                    <div class="col-span-4">
                        <AreaGraph />
                    </div>

                    <div class="col-span-4 xl:col-span-3">
                        <PieGraph />
                    </div>
                </div>
            </div>
        </ScrollContainer>
    </FormLayout>
</template>
