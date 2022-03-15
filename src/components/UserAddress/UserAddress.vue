<template>
  <Pane>
    <PaneHeader>
      <template v-slot:left>
        <q-btn @click="$router.go(-1)" flat round dense icon="arrow_back" class="q-mr-sm" />
      </template>
      <template v-slot:center>
        <div class="q-toolbar__title ellipsis fs-18 font-bold"> Details </div>
      </template>
    </PaneHeader>
    <PaneBody>
      <q-page-container class="q-py-md q-pb-lg" v-if="getAddresss.length>0">
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="pc font-regular fs-16">Hyderabad - GVK ONE</q-item-label>
            <q-item-label class="fs-12 q-pt-sm">Address Goes here with full details of form submitted</q-item-label>
          </q-item-section>
        </q-item>
    </q-page-container>
      <q-page-container class="q-py-md q-pb-lg" v-if="getAddresss.length<=0">
        <q-item-label class="pc font-regular fs-16">No Address Found Add New</q-item-label>
      </q-page-container>
    </PaneBody>
    <PaneFooter>
      <div class="q-pa-md row option-footer">
        <q-btn to="/createaddress" class="select-address-footer q-pa-md" style="width: 100%">
                Add New Address
        </q-btn>
      </div>
    </PaneFooter>
  </Pane>
</template>

<script>
import { ref } from 'vue';
import {mapGetters,mapActions} from 'vuex';

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
  },
  mounted() {
    this.getUserAddressList();  //use actions info
  },computed: {
        ...mapGetters("tenantDetailsModules", ["getAddresss"]),
        ...mapGetters("tenantDetailsModules", ["cartListing"]),
        ...mapGetters("tenantDetailsModules", ["tenantDetails"]),
        ...mapGetters("tenantDetailsModules", ["cartTotalPrice"]),
    },
  methods: {
    ...mapActions("tenantDetailsModules", ["getUserAddressList"]),
  }
};
</script>
