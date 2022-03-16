<template>
  <q-page class="flex flex-center relative-position">
    <CartItemOption :id="id"/>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'PageIndex',
  props: ["id"],
  components: {
    'CartItemOption' : require('components/item/CartItemOption.vue').default
  }

})
</script>
