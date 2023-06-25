export const routes = [
  {
    path: '/',
    component: import('~/components/HomePage.vue'),
    meta: {
      title: 'Choose you pizza',
    },
  },
  {
    path: '/order',
    component: import('~/components/OrderPage.vue'),
    meta: {
      title: 'Make order',
    },
  },
];