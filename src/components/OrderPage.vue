<template>
  <div :class="$style.root">
    <div :class="$style.left">
      <div :class="$style.name">{{ order?.product.title }}</div>
      <div :class="$style.caption">Address</div>
    </div>
    <div :class="$style.right">
      <div :class="$style.price">{{ order?.product.price }} руб</div>
      <form :class="$style.form" @submit.prevent="updateOrder">
        <input
          type="text"
          v-model="street"
          ref="streetInputElement"
          :class="$style.input"
        />
        <input
          type="text"
          v-model="house"
          :class="$style.input"
        />
        <input
          type="text"
          v-model="flat"
          :class="$style.input"
        />
        <button
          type="submit"
          :class="$style.button"
          :disabled="!isFromFilled"
        >
          <span>Make order</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useOrderStore } from '~/stores/order';

const { updateAddress, order } = useOrderStore();

const street = ref(order?.address?.street);
const house = ref(order?.address?.house);
const flat = ref(order?.address?.flat);
const streetInputElement = ref<HTMLInputElement>();

const isFromFilled = computed(() => street.value && house.value && flat.value);

const updateOrder = () => {
  updateAddress({
    street: street.value || '',
    house: house.value || null,
    flat: flat.value || null,
  });
};

onMounted(() => {
  if (streetInputElement) {
    streetInputElement.value?.focus();
  }
});
</script>

<style module>
.root {
  padding: 20px 0;
}

.left,
.right {
  padding: 0 10px;
}

.name,
.price,
.caption {
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 20px;
}

.price {
  color: var(--priceTextColor);
}
.form {
  display: block;
}

.input {
  display: block;
  box-sizing: border-box;
  font-size: 2rem;
  line-height: 1.2;
  width: 100%;
  padding: 1rem;
  margin-bottom: 20px;
  border: solid 2px var(--priceTextColor);
  border-radius: 5px;
}

.button {
  font-size: 1.5em;
  font-weight: 700;
  line-height: 4rem;
  padding: 0 4rem;
  background-color: var(--buttonColor);
  border: solid 1px var(--buttonBorderColor);
  border-radius: 5px;
  cursor: pointer;
  transition: ease 0.3s background-color;
}

.button:hover {
  background-color: var(--buttonBorderColor);
}

.button:disabled,
.button:disabled:hover {
  background-color: var(--buttonBorderColor);
  color: var(--disabledButtonTextColor);
}

@media screen and (min-width: 512px) {
  .root {
    display: flex;
    justify-content: center;
  }  
}
</style>