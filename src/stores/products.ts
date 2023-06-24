import { defineStore } from 'pinia';
import type { Product } from '~/models/product';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
  }),
});