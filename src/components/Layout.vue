<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <img :src="logoImage" :class="$style.logo"/>
    </div>
    <div :class="$style.body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoImage from '~/assets/logo.png';
</script>

<style module>
.root {
  font: 500 16px/20px 'sans-serif';
  color: #333;
}

.logo {
  width: 100px;
  height: 100px;
}
</style>