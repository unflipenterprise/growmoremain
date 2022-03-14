<template>
  <Pane>
    <PaneHeader>
      <template v-slot:left>
        <q-btn @click="$router.go(-1)" flat round dense icon="arrow_back" class="q-mr-sm" />
      </template>
      <template v-slot:center>
        <div class="q-toolbar__title ellipsis fs-18 font-bold"> Cart </div>
      </template>
    </PaneHeader>
    <PaneBody>
      <q-page-container class="q-py-md q-pb-lg">
        <!-- <q-item tag="label" class="q-mt-sm" style="background-color:#f4f7f8;">
            <q-item-section >
                <q-item-label lines="1" class="pc font-regular fs-14" style="color:#00a99d; text-align:center">Saving of $34 on this bill with 10 Unflip Cashback</q-item-label>
            </q-item-section>
        </q-item> -->
        <q-item class="q-pa-md">
            <q-item-section>
                <q-item-label caption class="sc font-regular fs-14">Your Order From</q-item-label>
                <q-item-label lines="1" class="pc font-regular fs-16">{{(tenantDetails)?tenantDetails.tenant_name:''}}</q-item-label>
            </q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item class="q-pa-md" >
            <q-item-section>
                <q-item-label lines="1" class="pc font-regular fs-16">+{{(tenantDetails)?tenantDetails.phone:''}}</q-item-label>
            </q-item-section>
        </q-item>
        <q-separator spaced />

        <q-item class="q-pa-md" v-if="selectedAdressTop==''">
          <q-item-section>
              <q-btn to="/selectaddress" class="pc font-regular fs-16">
                  Please Select/Add Your Address
              </q-btn>
          </q-item-section>
          <q-item-section side top>
            <q-icon name="place"></q-icon>
          </q-item-section>
        </q-item>

         <q-item class="q-pa-md" v-if="selectedAdressTop">
          <q-item-section>
            <q-item-label class="pc font-regular fs-16">{{selectedAdressTop}}</q-item-label>
            <q-item-label class="fs-12 q-pt-sm">{{selectedAdressBottom}}</q-item-label>
          </q-item-section>
          <q-item-section side top>
              <q-btn to="/selectaddress">
                  <q-icon name="edit"></q-icon>
              </q-btn>
          </q-item-section>
        </q-item>

        <div class="divider"></div>
        <q-item tag="label" class="q-mt-sm">
            <q-item-section>
                <q-item-label lines="1" class="pc font-regular fs-18">Services in the Cart</q-item-label>
            </q-item-section>
        </q-item>

        <SingleCartItem  v-for="item in cartListing" :key="item.ci_id" :item="item"/>

        <div class="divider"></div>
        <q-item tag="label" class="q-mt-sm">
            <q-item-section>
                <q-item-label lines="1" class="pc font-regular fs-18">Bill Detail</q-item-label>
            </q-item-section>
        </q-item>
        <q-item tag="label" class="cart-item">
            <q-item-section>
                <q-item-label class="pc font-regular fs-16">Sub Total</q-item-label>
            </q-item-section>
            <q-item-section side style="width:125px !important">
                <q-item-label caption class="pc font-regular fs-15">{{currency_symbol}}{{cartTotalPrice}}</q-item-label>
            </q-item-section>
        </q-item>
        <q-item tag="label" class="cart-item">
            <q-item-section>
                <q-item-label class="pc font-regular fs-16">Sub Charges</q-item-label>
            </q-item-section>
            <q-item-section side style="width:125px !important">
                <q-item-label caption class="pc font-regular fs-15">{{currency_symbol}}0.00</q-item-label>
            </q-item-section>
        </q-item>
        <q-item tag="label" class="cart-item">
            <q-item-section>
                <q-item-label class="pc font-regular fs-16">Taxes & Charges</q-item-label>
            </q-item-section>
            <q-item-section side style="width:125px !important">
                <q-item-label caption class="pc font-regular fs-15">{{currency_symbol}}00.00</q-item-label>
            </q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item tag="label" class=" q-mb-lg q-mt-md cart-item">
            <q-item-section>
                <q-item-label class="pc font-regular fs-18">To pay</q-item-label>
            </q-item-section>
            <q-item-section side style="width:160px !important">
                <q-item-label caption class="pc font-regular fs-18 row">
                    <span class="fs-14 pc col-auto q-mr-xs" style="text-decoration:line-through" >{{currency_symbol}}{{cartTotalPrice}}</span>
                    <span class="fs18 col-auto" >{{currency_symbol}}{{cartTotalPrice}}</span>
                </q-item-label>
                <q-item-label style="color:green" class=" fs-14 pc font-regular">You Saved {{currency_symbol}}2000</q-item-label>
            </q-item-section>
        </q-item>
    </q-page-container>
    </PaneBody>
    <PaneFooter>
      <div class="q-pa-md row option-footer" v-if="selectedAdressTop==''">
        <q-btn to="/selectaddress" class="select-address-footer q-pa-md" style="width: 100%">
                Select / Add Address
        </q-btn>
      </div>
        <div class="q-pa-md row option-footer" v-if="selectedAdressTop">
            <q-btn to="/payment" class="select-address-footer q-pa-md" style="width: 100%">
                Pay Now
            </q-btn>
        </div>
    </PaneFooter>
  </Pane>
</template>

<script>
import { ref } from 'vue';
import {mapGetters,mapActions} from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup(){
      const router = useRouter();
    return {
      slide: ref(1),
        redirectcart(){
            router.push({ path: '/' });
        },
        currency_symbol:localStorage.getItem("currency_code"),
        selectedAdressTop :(localStorage.getItem("selectedAdressTop"))?localStorage.getItem("selectedAdressTop"):'',
        selectedAdressBottom :(localStorage.getItem("selectedAdressBottom"))?localStorage.getItem("selectedAdressBottom"):'',
    }
  },
  props:["id"],
  data(){
    return{
        userToken:localStorage.getItem("userToken")||''
    }
  },
  components: {
    Pane: require("components/~Global/Pane/Pane.vue").default,
    PaneHeader: require("components/~Global/Pane/PaneHeader.vue").default,
    PaneBody: require("components/~Global/Pane/PaneBody.vue").default,
    PaneFooter: require("components/~Global/Pane/PaneFooter.vue").default,
    SingleCartItem: require("components/Common/SingleCartItem.vue").default
  },computed: {
        ...mapGetters("tenantDetailsModules", ["cartListing"]),
        ...mapGetters("tenantDetailsModules", ["tenantDetails"]),
        ...mapGetters("tenantDetailsModules", ["cartTotalPrice"]),
    },
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
};
</script>
