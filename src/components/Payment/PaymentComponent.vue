<template>
  <PaneHeader>
    <template v-slot:left>
      <q-btn @click="$router.go(-1)" flat round dense icon="arrow_back" class="q-mr-sm" />
    </template>
    <template v-slot:center>
      <div class="q-toolbar__title ellipsis fs-18 font-bold"> Payment</div>
    </template>
  </PaneHeader>

  <div>
    <p>Total Items {{cartItemCount}} in Qty</p>
    <p>Total Amount to Pay: {{currency_symbol}}{{cartTotalPrice}}</p>
    <q-list bordered padding >
      <q-item clickable v-ripple style="width:100% !important">
        <q-item-section>
          <q-item-label  @click="cashOnDelivary(this.cartTotalPrice)">Cash On Delivery</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple style="width:100% !important">
        <q-item-section @click="created(this.cartTotalPrice)">
          <q-item-label>Razorpay </q-item-label>
        </q-item-section>
      </q-item>
      </q-list>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';
  import masterOrderApi from "../../apis/Orders";
  import { useRouter } from 'vue-router';
  let orderId = Math.ceil(Math.random()*500000);

  export default {
    setup(){
      const router = useRouter();
      return {
        currency_symbol:localStorage.getItem("currency_code"),
        redirectSuccess(){
          router.push({ path: '/paymentsuccess' });
        },
      }
    },
    components: {
      PaneHeader: require("components/~Global/Pane/PaneHeader.vue").default,
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
      async created(paidAmount){
        const result = await this.loadRazorPay();
        if(!result){
          alert('Failed to load razorpay script')
          return
        }
        const options = {
          key:'rzp_test_WE5GM8vLcRjYYr',
          amount:this.cartTotalPrice*100,
          currency: `INR`,
          name: `Gorwmore`,
          description: `Growmore Is One Of The Bigest Platform`,
          //order_id:orderId,
          //image: `Your business logo`,
          handler: function(response){
            if (response.razorpay_payment_id){
              let dataList={
                address_id:localStorage.getItem('selectedDefaultAddressID'),
                payment_id:response.razorpay_payment_id,
                payment_method:'Online Payment',
                platform:'Razorpay',
                currency:localStorage.getItem('currency_code'),
                paid_amount:paidAmount,
                status:'success',
              };
              masterOrderApi.store(dataList).then(response2 => {
                if (response2){
                  localStorage.setItem('TranscationId',response.razorpay_payment_id);
                  localStorage.setItem('TranscationAmount',paidAmount);
                  window.location.href = "http://localhost:8080/paymentsuccess"
                }
              });
            }
          },
          prefill: {
            name:localStorage.getItem('growMoreUserName'),
            contact:localStorage.getItem('gorwMoreUserPhone')
          }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      },
      cashOnDelivary(paidAmount){
        let dataList={
          address_id:localStorage.getItem('selectedDefaultAddressID'),
          payment_id:orderId,
          payment_method:'CashOnDelivary',
          platform:'Cash',
          currency:localStorage.getItem('currency_code'),
          paid_amount:paidAmount,
          status:'success',
        };
        masterOrderApi.store(dataList).then(response => {
          if (response){
            localStorage.setItem('TranscationId',orderId);
            localStorage.setItem('TranscationAmount',paidAmount);
            this.redirectSuccess();
          }
        });
      }
    }
  }
</script>


<style>

</style>
