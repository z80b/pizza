import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { Product } from '~/models/product';
import type { Address } from '~/models/address';

export const useOrderStore = defineStore('orders', () => {
  const product = ref<Product>();
  const address = ref<Address>();

  const localStorageOrder = localStorage.getItem('order');
  if (localStorageOrder) {
    const order = JSON.parse(localStorageOrder);
    product.value = order.product;
    address.value = order.address;
  }

  const createOrder = (value: Product) => {
    product.value = value;
  };

  const updateAddress = (value: Address) => {
    address.value = value;
  };

  const saveToStorage = () => {
    localStorage.setItem('order', JSON.stringify({
      product: product.value,
      address: address.value,
    }));
  };

  const clearStorage = () => {
    product.value = {
      id: 0,
      title: '',
      image: '',
      price: 0,
    };
    address.value = {
      street: '',
      house: null,
      flat: null,
    };
    localStorage.removeItem('order');
  };

  watch(() => product, saveToStorage, { deep: true });
  watch(() => address, saveToStorage, { deep: true });

  return { product, address, createOrder, updateAddress, clearStorage };
});