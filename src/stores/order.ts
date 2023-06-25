import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { Product } from '~/models/product';
import type { Address } from '~/models/address';

type OrderedProduct = {
  product: Product,
  address?: Address,
};

export const useOrderStore = defineStore('orders', () => {
  const order = ref<OrderedProduct>();

  const localStorageOrder = localStorage.getItem('order');
  if (localStorageOrder) {
    order.value = JSON.parse(localStorageOrder);
  }

  const createOrder = (product: Product) => {
    order.value = { product };
  };

  const updateAddress = (address: Address) => {
    const product = order.value?.product as Product;
    order.value = { product, address };
  };

  watch(
    () => order,
    (state) => {
      localStorage.setItem('order', JSON.stringify(state.value));
    }, {
      deep: true,
    }
  );

  return { order, createOrder, updateAddress }
});