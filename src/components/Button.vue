<template>
  <button
    :class="$style.root"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style module>
.root {
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

.root:hover {
  background-color: var(--buttonBorderColor);
}

.root:disabled,
.root:disabled:hover {
  background-color: var(--buttonBorderColor);
  color: var(--disabledButtonTextColor);
}
</style>
