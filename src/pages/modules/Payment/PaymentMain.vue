<template>
  <q-page class="flex flex-center relative-position">
    <payment-component/>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'PaymentMain',

  components: {
    'PaymentComponent' : require('components/Payment/PaymentComponent').default
  }

})
</script>
