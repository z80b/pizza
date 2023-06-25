import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from '~/models/product';

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([]);

  const update = async () => {
    const response = await fetch('/api/products');
    products.value = await response.json();
  };
  return { products, update };
});