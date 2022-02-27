<template>
  <q-page class="flex flex-center relative-position">
    <Cart/>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'PageIndex',

  components: {
    'Cart' : require('components/Cart/Cartpage').default
  }

})
</script>
