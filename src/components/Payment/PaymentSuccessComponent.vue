<template>
  <PaneHeader>
    <template v-slot:center>
      <div class="q-toolbar__title ellipsis fs-18 font-bold bi-align-center"> Payment Successs</div>
    </template>
  </PaneHeader>

  <div>
    <p>Successfully Completed Your Order</p>
    <p>Payment Amount : {{currency_symbol}}{{paymentAmount}}</p>
    <p>Transaction ID :{{transactionsId}}</p>

    <div class="q-pa-md row">
      <q-btn  class="select-address-footer q-pa-md" style="width: 100%" @click="homePageCall()">
        Back To Home
      </q-btn>
    </div>

  </div>
</template>

<script>
  import { useRouter } from 'vue-router';
  import { mapState, mapActions,mapGetters} from "vuex";
  export default {
    setup(){
      const router = useRouter();
      return {
        currency_symbol :localStorage.getItem("currency_code"),
        paymentAmount   :localStorage.getItem("TranscationAmount"),
        transactionsId  :localStorage.getItem("TranscationId"),
        redirectcart(){
          router.push({ path: '/' });
        },
      }
    },
    components: {
      PaneHeader: require("components/~Global/Pane/PaneHeader.vue").default,
    },
    data(){

    },
    computed: {

    },
    methods:{
      ...mapActions("tenantDetailsModules", ["getCartItmes"]),
      reloadAuth () {
        if (!localStorage.getItem("userToken")){
          this.redirectcart();
        }
      },
      homePageCall(){
        this.redirectcart();
        this.getCartItmes();
      }
    },
    beforeMount(){
      this.reloadAuth()
    },
  }
</script>


<style>

</style>
