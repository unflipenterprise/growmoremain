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
      <q-page-container>
        <!-- <q-item tag="label" class="q-mt-sm" style="background-color:#f4f7f8;">
            <q-item-section >
                <q-item-label lines="1" class="pc font-regular fs-14" style="color:#00a99d; text-align:center">Saving of $34 on this bill with 10 Unflip Cashback</q-item-label>
            </q-item-section>
        </q-item> -->
        <q-item tag="label" class="q-mt-md">
            <q-item-section>
                <q-item-label caption class="sc font-regular fs-14">Your Order From</q-item-label>
                <q-item-label lines="1" class="pc font-regular fs-16">Grow More By SN</q-item-label>
            </q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item tag="label" class="q-mt-sm">
            <q-item-section>
                <q-item-label lines="1" class="pc font-regular fs-16">+91 9032757325</q-item-label>
            </q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item tag="label" class="q-mt-sm">
            <q-item-section>
                <q-item-label caption class="sc font-regular fs-14">You Details For this Order</q-item-label>
                <q-item-label class="pc font-regular fs-16">Hyderabad - GVK One</q-item-label>
                <q-item-label style="margin-top:12px !important" class="sc font-regular fs-14"> 3rd Flr Municipal Nos.6-3-251/1 and 6-3-251/5 to 6-3-251/7 Situated at Road No.01 Banjara Hills Hyderabad Telangana </q-item-label>
            </q-item-section>
        </q-item>
        <div class="divider"></div>
        <q-item tag="label" class="q-mt-sm">
            <q-item-section>
                <q-item-label lines="1" class="pc font-regular fs-18">Services in the Cart</q-item-label>
            </q-item-section>
        </q-item>

        <SingleCartItem  v-for="n in 4" :key="n"/>

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
                <q-item-label caption class="pc font-regular fs-15">$600.00</q-item-label>
            </q-item-section>
        </q-item>
        <q-item tag="label" class="cart-item">
            <q-item-section>
                <q-item-label class="pc font-regular fs-16">Sub Charges</q-item-label>
            </q-item-section>
            <q-item-section side style="width:125px !important">
                <q-item-label caption class="pc font-regular fs-15">$0.00</q-item-label>
            </q-item-section>
        </q-item>
        <q-item tag="label" class="cart-item">
            <q-item-section>
                <q-item-label class="pc font-regular fs-16">Taxes & Charges</q-item-label>
            </q-item-section>
            <q-item-section side style="width:125px !important">
                <q-item-label caption class="pc font-regular fs-15">$00.00</q-item-label>
            </q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item tag="label" class=" q-mb-lg cart-item">
            <q-item-section>
                <q-item-label class="pc font-regular fs-18">To pay</q-item-label>
            </q-item-section>
            <q-item-section side style="width:135px !important">
                <q-item-label caption class="pc font-regular fs-18 row">
                    <span class="fs-14 pc col-auto q-mr-xs" style="text-decoration:line-through" >$600.00 </span>
                    <span class="fs18 col-auto" > $600.00</span>
                </q-item-label>
                <q-item-label style="color:green" class=" fs-14 pc font-regular">You Saved $2000</q-item-label>
            </q-item-section>
        </q-item>
    </q-page-container>
    </PaneBody>
    <PaneFooter>
      <div class="q-pa-md row cart-footer">
        <div>1 Service | $40.00</div>
        <q-space />
        <div>
          <div class="fit row justify-between items-center content-center">
            <div class="col-60">View Cart</div>
            <div class="col">
              <q-icon right size="1em" name="local_mall" />
            </div>
          </div>
        </div>
      </div>
    </PaneFooter>
  </Pane>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    return {
      slide: ref(1),
    }
  },
  props:["id"],
  data(){
    return{

    }
  },
  components: {
    Pane: require("components/~Global/Pane/Pane.vue").default,
    PaneHeader: require("components/~Global/Pane/PaneHeader.vue").default,
    PaneBody: require("components/~Global/Pane/PaneBody.vue").default,
    PaneFooter: require("components/~Global/Pane/PaneFooter.vue").default,
    SingleCartItem: require("components/Common/SingleCartItem.vue").default
  }
};
</script>