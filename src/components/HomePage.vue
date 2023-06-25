<template>
  <Swiper
    :slidesPerView="3"
    :spaceBetween="24"
    :grid="{ rows: 2 }"
    :modules="[Grid, Pagination]"
    :class="$style.slider"
    :wrapper-class="$style.swiperWrapper"
  >
  <SwiperSlide
    v-for="{ id, title, image, price } in productsStore.products"
    :key="`product-${id}`"
    :class="$style.slide"
  >
    <ProductCard
      :title="title"
      :image="image"
      :price="price"
      :class="$style.product"
    />
  </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid, Pagination } from 'swiper';
import ProductCard from '~/components/ProductCard.vue';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const productsStore = useProductsStore();
productsStore.update();
</script>

<style module>
.swiperWrapper {
  flex-direction: row !important;
  align-items: baseline;
  padding: 20px 0;
}

.product {
  margin: auto;
}
</style>
