import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { Product } from '~/models/product';

type OrderedProduct = Product & {
  count: number,
}

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref<OrderedProduct[]>([]);

  const localStorageOrders = localStorage.getItem('orders');
  if (localStorageOrders) {
    orders.value = JSON.parse(localStorageOrders);
  }

  watch(
    () => orders,
    (state) => {
      localStorage.setItem('orders', JSON.stringify(state));
    }
  );
});