<script setup lang="ts">
import FormLayout from '../../components/form-layout.vue';
import Heading from '../../components/heading.vue';
import ProductListing from '../../components/products/product-listing.vue';
import ScrollContainer from '../../components/scroll-container.vue';

useHead({
    title: 'Dashboard: Product',
});
</script>

<template>
    <FormLayout>
        <ScrollContainer>
            <Heading
                title="Products"
                description="Manage products (Server side table functionalities.)"
                label="Add New"
                href="/dashboard/product/new"
            />

            <Separator class="!ml-0 mt-3" />
            <ProductListing />
        </ScrollContainer>
    </FormLayout>
</template>
