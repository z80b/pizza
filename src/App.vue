<template>
  <Layout :title="<string>route.meta.title">
    <router-view></router-view>
  </Layout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Layout from '~/components/Layout.vue';

const route = useRoute()
</script>