<template>
  <div :class="$style.overlay">
    <div :class="$style.root">
      <div :class="$style.header">
        <button :class="$style.close" @click="$emit('close')"></button>
        <slot name="header"></slot>
      </div>
      <div :class="$style.body">
        <slot></slot>
      </div>
      <div :class="$style.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['close']);
</script>

<style module>
.overlay {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #d8b1b19a;
}
.root {
  position: relative;
  background-color: #fff;
  border: solid 1px var(--priceTextColor);
  border-radius: 10px;
  box-shadow: var(--boxShadow);
  margin: 0 20px;
}

.header,
.footer {
  box-sizing: border-box;
  padding: 20px 30px;
  font-size: 20px;
  line-height: 20px;
}

.header {
  height: 60px;
  font-weight: 700;
}

.footer {
  display: flex;
  justify-content: center;
}

.body {
  padding: 0 30px;
  font-size: 20px;
}

.close {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: var(--buttonColor);
  border: solid 1px var(--buttonBorderColor);
  transition: 0.2s ease-in-out;
  cursor: pointer;
}

.close::before,
.close::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 4px;
  border-radius: 2px;
  background-color: #fff;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(45deg);
}

.close::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>