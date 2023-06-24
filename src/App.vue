<template>
  <Layout>
    <div
      v-for="{ id, title, image } in products"
      :key="`product-${id}`"
    >
      <span>{{ title }}</span>
      <img :src="image"/>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Product } from '~/models/product';
import Layout from '~/components/Layout.vue';

const products = ref<Product[]>();

onMounted(async () => {
  const response = await fetch('/api/products');
  products.value = await response.json();
});
</script>


