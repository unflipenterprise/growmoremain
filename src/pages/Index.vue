<template>
  <q-page class="flex flex-center relative-position">
    <home-component/>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'Home',

  components: {
    'HomeComponent' : require('components/Home/HomeComponent').default
  }

})
</script>
