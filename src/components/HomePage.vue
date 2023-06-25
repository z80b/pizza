<template>
  <div :class="$style.root">
    <Swiper
      :breakpoints="{
        240: {
          slidesPerView: 1,
          spaceBetween: 32,
          grid: {
            rows: 2,
          },
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 32,
          grid: {
            rows: 2,
          },
        },
        864: {
          slidesPerView: 3,
          spaceBetween: 32,
          grid: {
            rows: 2,
          },
        },
      }"
      :modules="[Grid, Navigation]"
      :class="$style.slider"
      :wrapper-class="$style.swiperWrapper"
      :navigation="{
        disabledClass: $style.disabledArrow,
        nextEl: `.${$style.rightArrow}`,
        prevEl: `.${$style.leftArrow}`,
      }"
    >
      <SwiperSlide
        v-for="product in productsStore.products"
        :key="`product-${product.id}`"
        :class="$style.slide"
      >
        <ProductCard
          :title="product.title"
          :image="product.image"
          :price="product.price"
          :class="$style.product"
          @click="productCardClick(product)"
        />
      </SwiperSlide>
    </Swiper>
    <ButtonArrow
      type="left"
      :class="$style.leftArrow"
    />
    <ButtonArrow
      type="right"
      :class="$style.rightArrow"
    />
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products';
import { useOrderStore } from '~/stores/order';
import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid, Navigation } from 'swiper';
import ProductCard from '~/components/ProductCard.vue';
import ButtonArrow from '~/components/ButtonArrow.vue';
import type { Product } from '~/models/product';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

const router = useRouter();
const productsStore = useProductsStore();
const { createOrder } = useOrderStore();
productsStore.update();

const productCardClick = (product: Product) => {
  createOrder(product);
  router.push({ path: '/order' });
};
</script>

<style module>
.root {
  position: relative;
}
.slider {
  padding: 0 20px;
}
.swiperWrapper {
  flex-direction: row !important;
  align-items: baseline;
  padding: 20px 0;
}

.product {
  margin: auto;
}

.leftArrow,
.rightArrow {
  display: none;
}

.leftArrow {
  left: 0;
}

.rightArrow {
  right: 0;
}

.disabledArrow,
.disabledArrow:hover {
  opacity: 0.2;
  cursor: default;
}

@media screen and (min-width: 720px) {
  .root {
    padding: 0 100px;
    box-sizing: border-box;
  }

  .leftArrow,
  .rightArrow {
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -50px;
  }
}
</style>
