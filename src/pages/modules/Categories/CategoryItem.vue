<template>
  <q-page class="flex flex-center relative-position">
    <CategoryItem />
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'PageIndex',

  components: {
    'CategoryItem' : require('components/Category/CategoryItem').default
  }

})
</script>
