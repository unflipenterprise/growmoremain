<template>
  <div class="q-pa-md">
    <p class="pc font-regular fs-16">Name     : {{userName}}</p>
    <p class="pc font-regular fs-16">Number   : {{userPhone}}</p>
    <p class="pc font-regular fs-16">Address  : {{selectedAdressBottom}}</p>
    <table>
      <thead>
      <tr>
        <th>Item</th>
        <th>OrderId</th>
        <th>TransactionsID</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="orderList in userOrderList">
        <td><p v-for="orderItem in orderList.order_items">{{orderItem.item_name}}-{{orderItem.qty}}</p></td>
        <td>{{orderList.order_id}}</td>
        <td>{{orderList.transaction_id}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <q-btn color="black" label="Logout" @click="logoutSession()"/>
  <q-btn color="black" label="Back" to="/"/>
</template>

<script>
  import { useRouter } from 'vue-router';
  import { mapState, mapActions,mapGetters} from "vuex";

  export default {
    setup () {
      const router = useRouter();
      return {
        userName :localStorage.getItem('growMoreUserName'),
        userPhone :localStorage.getItem('gorwMoreUserPhone'),
        selectedAdressBottom :localStorage.getItem('selectedAdressBottom'),
        selectedAdressTop :localStorage.getItem('selectedAdressTop'),
        redirectHomePage(){
          router.push({ path: '/' });
        }
      }
    },
    computed: {
      ...mapGetters("tenantDetailsModules", ["userOrderList"]),
    },
    mounted() {
      this.getOrderHistory();
    },
    methods:{
      ...mapActions("tenantDetailsModules", ["getOrderHistory"]),
      logoutSession(){
        localStorage.removeItem('userToken');
        localStorage.removeItem('rzp_device_id');
        localStorage.removeItem('growMoreUserId');
        localStorage.removeItem('TranscationAmount');
        localStorage.removeItem('growMoreUserName');
        localStorage.removeItem('TranscationId');
        localStorage.removeItem('gorwMoreUserPhone');
        localStorage.removeItem('selectedAdressBottom');
        localStorage.removeItem('selectedAdressTop');
        localStorage.removeItem('selectedDefaultAddressID');
        this.redirectHomePage();
      }
    }
  }
</script>

<style>
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td, table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even){background-color: #f2f2f2;}

  table tr:hover {background-color: #ddd;}

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
  }
</style>
