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
      <q-btn to="/" class="select-address-footer q-pa-md" style="width: 100%">
        Back To Home
      </q-btn>
    </div>

  </div>
</template>

<script>
  export default {
    setup(){
      return {
        currency_symbol :localStorage.getItem("currency_code"),
        paymentAmount   :localStorage.getItem("TranscationAmount"),
        transactionsId  :localStorage.getItem("TranscationId"),
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

    }
  }
</script>


<style>

</style>
