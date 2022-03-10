<template>
  <q-page class="flex flex-center relative-position">
    <category-component />
  </q-page>
</template>

<script>
export default {
  name: "Category",

  components: {
    CategoryComponent: require("components/Category/CategoryComponent").default,
  },
};
</script>
