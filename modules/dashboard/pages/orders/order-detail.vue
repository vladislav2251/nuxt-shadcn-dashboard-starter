<script setup lang="ts">
import FormLayout from '../../components/form-layout.vue';
import OrderDetail from '../../components/orders/order-detail.vue';
import ScrollContainer from '../../components/scroll-container.vue';

useHead({
    title: 'Dashboard: Order Detail',
});
</script>

<template>
    <FormLayout>
        <ScrollContainer>
            <OrderDetail />
        </ScrollContainer>
    </FormLayout>
</template>
