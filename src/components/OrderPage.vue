<template>
  <div v-if="orderStore.product?.id" :class="$style.root">
    <div :class="$style.left">
      <div :class="$style.name">{{ orderStore.product?.title }}</div>
      <div :class="$style.caption">Address</div>
    </div>
    <div :class="$style.right">
      <div :class="$style.price">{{ orderStore.product?.price }} руб</div>
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
        <Button
          type="submit"
          :disabled="!isFromFilled"
        >
          <span>Make order</span>
        </Button>
      </form>
    </div>
    <Modal v-if="isModalOpened" @close="isModalOpened = false">
      <template #header>Message</template>
      <template #default>
        <div :class="$style.modalBody">
          <div :class="$style.modalBodyHead">
            <p>Order created</p>
            <img :src="orderStore.product?.image" :class="$style.image"/>
          </div>
          <div>
            <dl :class="$style.field">
              <dt :class="$style.fieldName">Name</dt>
              <dd :class="$style.fieldValue">{{ orderStore.product?.title }}</dd>
            </dl>
            <dl :class="$style.field">
              <dt :class="$style.fieldName">Price</dt>
              <dd :class="$style.fieldValue">{{ orderStore.product?.price }}</dd>
            </dl>
            <dl
              v-for="(item, field) in orderStore.address"
              :key="`addr-field-${field}`"
              :class="$style.field"
            >
              <dt :class="$style.fieldName">{{ field }}</dt>
              <dd :class="$style.fieldValue">{{ item }}</dd>
            </dl>
          </div>
        </div>
      </template>
      <template #footer>
        <Button @click="makeOrder">Submit</Button>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '~/stores/order';
import Button from '~/components/Button.vue';
import Modal from '~/components/Modal.vue';

const router = useRouter();
const orderStore = useOrderStore();

const street = ref(orderStore.address?.street);
const house = ref(orderStore.address?.house);
const flat = ref(orderStore.address?.flat);
const streetInputElement = ref<HTMLInputElement>();
const isModalOpened = ref(false)

const isFromFilled = computed(() => Boolean(
  street.value &&
  house.value &&
  flat.value
));

const updateOrder = () => {
  orderStore.updateAddress({
    street: street.value || '',
    house: house.value || null,
    flat: flat.value || null,
  })
  isModalOpened.value = true;
};

const makeOrder = () => {
  orderStore.clearStorage();
  router.push({ path: '/' });
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

.field {
  display: flex;
  font-size: 20px;
  justify-content: space-between;
}

.fieldName {
  font-weight: 700;
  text-transform: capitalize;
}

.image {
  display: block;
  width: 168px;
  margin: auto;
}

@media screen and (min-width: 512px) {
  .root {
    display: flex;
    justify-content: center;
  }

  .modalBody {
    display: flex;
  }

  .modalBodyHead {
    margin-right: 40px;
  }
}
</style>