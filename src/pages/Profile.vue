<template>
  <div class="q-pa-md">
    <p class="pc font-regular fs-16">Name     : {{userName}}</p>
    <p class="pc font-regular fs-16">Number   : {{userPhone}}</p>
    <p class="pc font-regular fs-16">Address  : {{selectedAdressBottom}}</p>
    <q-table
            title="Your Total order List"
            dense
            :rows="rows"
            :columns="columns"
            row-key="name"
    />
  </div>
  <q-btn color="black" label="Logout" @click="logoutSession()"/>
  <q-btn color="black" label="Back" to="/"/>
</template>

<script>
  const columns = [
    {
      name: 'name',
      required: true,
      label: 'ProductName',
      align: 'left',
      field: row => row.name,
      format: val => `${val}`,
      sortable: true
    },
    { name: 'orderNumber', align: 'center', label: 'OrderNumber', field: 'orderNumber', sortable: true },
    { name: 'status', label: 'Status', field: 'status', sortable: true },
  ]

  const rows = [
    {
      name: 'Frozen Yogurt',
      orderNumber: 159,
      status:'Paid',
    },
    {
      name: 'Ice cream sandwich',
      orderNumber: 237,
      status:'Paid',
    },
    {
      name: 'Eclair',
      orderNumber: 262,
      status:'Paid',
    },
    {
      name: 'Cupcake',
      orderNumber: 305,
      status:'Paid',
    },
    {
      name: 'Gingerbread',
      orderNumber: 356,
      status:'Paid',
    },
    {
      name: 'Jelly bean',
      orderNumber: 375,
      status:'Paid',
    },
    {
      name: 'Lollipop',
      calories: 392,
      status:'Paid',
    },
    {
      name: 'Honeycomb',
      calories: 408,
      status:'Paid',
    },
    {
      name: 'Donut',
      calories: 452,
      status:'Paid',
    },
    {
      name: 'KitKat',
      calories: 518,
      status:'Paid',
    }
  ]
  import { useRouter } from 'vue-router';

  export default {
    setup () {
      const router = useRouter();
      return {
        columns,
        rows,
        userName :localStorage.getItem('growMoreUserName'),
        userPhone :localStorage.getItem('gorwMoreUserPhone'),
        selectedAdressBottom :localStorage.getItem('selectedAdressBottom'),
        selectedAdressTop :localStorage.getItem('selectedAdressTop'),
        redirectHomePage(){
          router.push({ path: '/' });
        }
      }
    },
    methods:{
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

</style>
