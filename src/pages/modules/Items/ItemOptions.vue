<template>
  <q-page class="flex flex-center relative-position">
    <ItemOption :id="id"/>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  name: 'PageIndex',
  props: ["id"],
  components: {
    'ItemOption' : require('components/item/ItemOption').default
  }

})
</script>
