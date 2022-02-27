<template>
  <q-page class="flex flex-center relative-position">
    <Home/>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'PageIndex',

  components: {
    'Home' : require('components/Home/Home').default
  }

})
</script>
