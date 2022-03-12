<template>
  <q-page class="flex flex-center relative-position">
    <NewAddress/>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

export default ({
  name: 'PageIndex',
  setup(){
    const router = useRouter();
    return {
      redirectcart(){
        router.push({ path: '/' });
      }
    }
  },
  components: {
    'NewAddress' : require('components/UserAddress/NewAddress').default
  } ,
  methods: {
    reloadAuth () {
      if (!localStorage.getItem("userToken")){
        this.redirectcart();
      }
    }
  },
  beforeMount(){
    this.reloadAuth()
  },

})
</script>
