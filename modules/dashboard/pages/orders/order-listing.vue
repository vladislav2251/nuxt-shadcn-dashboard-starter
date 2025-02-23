<script setup lang="ts">
import FormLayout from '../../components/form-layout.vue';
import Heading from '../../components/heading.vue';
import OrderListing from '../../components/orders/order-listing.vue';
import ScrollContainer from '../../components/scroll-container.vue';

useHead({
    title: 'Dashboard: Orders',
});
</script>

<template>
    <FormLayout>
        <ScrollContainer>
            <Heading
                title="Orders"
                description="Manage orders (Server side table functionalities.)"
                label="Add New"
                href="/dashboard/order/new"
            />

            <Separator class="!ml-0 mt-3" />
            <OrderListing />
        </ScrollContainer>
    </FormLayout>
</template>
