<template>
  <div>
    <div
      v-for="{ id, title, image } in products"
      :key="`product-${id}`"
    >
      <span>{{ title }}</span>
      <img :src="image"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

type Product = {
  title: string,
  image: string,
  price: number,
};

const products = ref<Product[]>();

onMounted(async () => {
  const response = await fetch('/api/products');
  products.value = await response.json();
});
</script>


