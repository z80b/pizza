<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <a href="/" :class="$style.link">
        <img :src="logoImage" :class="$style.logo"/>
      </a>
      <div :class="$style.title">{{ title }}</div>
    </div>
    <div :class="$style.body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoImage from '~/assets/logo.png';

defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<style module>
.root {
  font: 500 16px/20px 'sans-serif';
  color: #333;
  min-width: 320px;
}

.title {
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.5;
  text-align: center;
}

.link {
  display: block;
}
.logo {
  width: 100px;
  height: 100px;
}

.header {
  padding: 20px 0 0;
}

.body {
  box-sizing: border-box;
  padding: 0 20px;
  border: var(--bodyBorder);
  border-radius: 10px;
}

@media screen and (min-width: 960px) {
  .header,
  .body {
    width: 960px;
    margin: auto;
  }
}

@media screen and (min-width: 1280px) {
  .header,
  .body {
    width: 1200px;
  }
}
</style>