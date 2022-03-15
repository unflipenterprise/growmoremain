<template>
  <div>
    <p>Total Items {{cartItemCount}} in Qty</p>
    <p>Total Amount to Pay: {{currency_symbol}}{{cartTotalPrice}}</p>
    <q-list bordered padding >
      <q-item clickable v-ripple style="width:100% !important">
        <q-item-section>
          <q-item-label>Cash On Delivery</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple style="width:100% !important">
        <q-item-section @click="created()">
          <q-item-label>Razorpay </q-item-label>
        </q-item-section>
      </q-item>
      </q-list>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  let orderId = Math.ceil(Math.random()*500)
  export default {
    setup(){
      return {
        currency_symbol:localStorage.getItem("currency_code"),
      }
    },
    data(){
      return{
        script: `https://checkout.razorpay.com/v1/checkout.js`
      }
    },
    computed: {
      ...mapGetters("tenantDetailsModules", ["cartItemCount"]),
      ...mapGetters("tenantDetailsModules", ["cartTotalPrice"]),
    },
    methods:{
      async loadRazorPay(){
        return new Promise(resolve=>{
          const script = document.createElement('script')
          script.src = this.script
          script.onload = () =>{
            resolve(true)
          };
          script.onerror = () =>{
            resolve(false)
          };
          document.body.appendChild(script)
        })
      },
      async created(){
        alert("CSd");
        const result = await this.loadRazorPay();
        if(!result){
          alert('Failed to load razorpay script')
          return
        }
        const options = {
          key:'rzp_test_WE5GM8vLcRjYYr',
          amount:2000,
          currency: `USD`,
          name: `Growmore`,
          description: `Growmore Descriptions`,
          //order_id:orderId,
          //image: `Your business logo`,
          handler: function(response){
            alert(response);
          console.log(response);
            // It is function executed on success
          },
          prefill: {
            name: `Zahid Hasan`,
            email: `aiubzahid@gmail.com`,
            contact: `01741174838`
          }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    }
  }
</script>


<style>

</style>
