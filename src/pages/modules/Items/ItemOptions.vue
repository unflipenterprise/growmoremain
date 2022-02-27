<template>
  <q-page class="flex flex-center relative-position">
    <ItemOption/>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'PageIndex',

  components: {
    'ItemOption' : require('components/item/ItemOption').default
  }

})
</script>
