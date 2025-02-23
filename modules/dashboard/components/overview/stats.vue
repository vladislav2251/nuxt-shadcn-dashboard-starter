<script setup lang="ts">
import { IconActivity, IconCreditCard, IconDollarSign, IconUser2 } from '#components';

interface ICard {
    title: string;
    icon: Component;
    content: string;
    action: string;
};

const cards = ref<ICard[]>([
    {
        title: 'Total Revenue',
        icon: IconDollarSign,
        content: '$45,231.89.',
        action: '+20.1% from last month',
    },
    {
        title: 'Subscriptions',
        icon: IconUser2,
        content: '+2350',
        action: '+180.1% from last month',
    },
    {
        title: 'Sales',
        icon: IconCreditCard,
        content: '+12,234',
        action: '+19% from last month',
    },
    {
        title: 'Active Now',
        icon: IconActivity,
        content: '+573',
        action: '+201 since last hour',
    },
]);
</script>

<template>
    <Card v-for="item in cards" :key="item.title">
        <CardHeader
            class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
            <CardTitle class="text-sm font-medium">
                {{ item.title }}
            </CardTitle>

            <component :is="item.icon" :size="16" :stroke-width="1.5" class="font-normal" />
        </CardHeader>

        <CardContent>
            <div class="text-2xl font-bold">
                {{ item.content }}
            </div>
            <p class="text-xs text-muted-foreground">
                {{ item.action }}
            </p>
        </CardContent>
    </Card>
</template>
