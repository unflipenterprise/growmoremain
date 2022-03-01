<template>
  <q-page class="flex flex-center relative-position">
    <UserAddress/>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'PageIndex',

  components: {
    'UserAddress' : require('components/UserAddress/UserAddress').default
  }

})
</script>
