<template>
  <div :class="[
    $style.root, {
      [$style.left]: type === 'left',
      [$style.right]: type === 'right',
      [$style.circle]: circle,
    },
  ]"></div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  type: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
  },
  circle: {
    type: Boolean,
    default: true,
  },
});
</script>

<style module>
.root *:before,
.root *:after {
	box-sizing: border-box;
}
.root { 
  width: 100px;
  height: 100px;
  display: inline-block;
  position: relative;
  transition: ease 0.3s opacity;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-color: #000;
    border-width: 2px 2px 0 0;
    position: absolute;
    transform-origin: 50% 50%;
  }

  &.left::before { 
    transform: rotate(-135deg);
    margin: -15px 0 0 -10px;
  }
  &.right::before { 
    transform: rotate(45deg); 
    margin: -15px 0 0 -20px;
  }
  
  &::after {
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-color: #000;
    position: absolute;
    transform-origin: 50% 50%;
  }
  
  &.left::after { 
    width: 40px;
    height: 0;
    border-width: 2px 0 0 0;
    transform: translate(-14px, -1px);
  }
  &.right::after { 
    width: 40px;
    height: 0;
    border-width: 2px 0 0 0;
    transform: translate(-26px, -1px);
  }
  
  &.circle {
    background: rgba(242, 208, 207, 0.75);
    border-radius: 50px;
  }

  &:hover {
    opacity: 0.6;
  }
}
</style>