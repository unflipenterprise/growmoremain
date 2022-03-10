<template>
  <q-page class="flex flex-center relative-position">
    <NewAddress/>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'PageIndex',

  components: {
    'NewAddress' : require('components/UserAddress/NewAddress').default
  }

})
</script>
