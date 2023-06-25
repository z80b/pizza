<template>
  <div :class="$style.root">
    <img :src="image" :class="$style.image"/>
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.price">
      <span>{{ price }}</span>
      <span :class="$style.ruble">руб</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  },
});
</script>

<style module>
.root {
  font-size: 13px;
  border: solid 1px #4a2222;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 3px 3px 10px 0px #00000033;
  cursor: pointer;
  transition: ease 0.4s transform;
}

.title {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin: 10px 0;
  height: 40px;
}

.price {
  font-size: 20px;
  font-weight: 700;
  color: #4a2222;
}

.ruble {
  margin-left: 4px;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.root:hover {
  transform: scale(1.04);
}
</style>