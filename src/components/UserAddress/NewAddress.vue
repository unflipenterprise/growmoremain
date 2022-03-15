<template>
  <div style="width:100%">
    <pane>
      <pane-header>
        <template v-slot:left>
          <q-btn @click="$router.go(-1)" flat round dense icon="arrow_back" class="q-mr-sm" />
        </template>
        <template v-slot:center>
          <div class="q-toolbar__title ellipsis fs-18 font-bold"> Details </div>
        </template>
      </pane-header>
      <pane-body>
          <q-form  ref="myFormAddress">
          <div class="q-px-md q-pt-md">
              <q-input outlined v-model="phone" type="number" hint="Telephone number" class="input-style q-pt-sm" label="Enter your Phone Number"  :rules="[ val => val && val.length > 0 || 'Enter your Phone Number']"/>
              <q-input outlined v-model="email" type="email" class="input-style q-pt-sm" label="Enter your Email Address "  :rules="[ val => val && val.length > 0 || 'Enter your Email']"/>
              <br>
              <q-input outlined v-model="houseno" type="text" class="input-style q-pt-sm" label="Appartment, House No, Flat No"  :rules="[ val => val && val.length > 0 || 'Enter your Appartment, House No']"/>
              <q-input outlined v-model="streetadress" type="text" class="input-style q-pt-sm" label="Street Colony Area Name"  :rules="[ val => val && val.length > 0 || 'Enter your Street Colony Area Name']"/>
              <q-input outlined v-model="town" type="text" class="input-style q-pt-sm" label="Locality/Town"  :rules="[ val => val && val.length > 0 || 'Enter your Locality/Town']"/>
              <q-input outlined v-model="landmark" type="text" class="input-style q-pt-sm" label="Land Mark"  :rules="[ val => val && val.length > 0 || 'Enter your Land Mark']"/>
              <q-input outlined v-model="country" type="text" class="input-style q-pt-sm" label="Country"  :rules="[ val => val && val.length > 0 || 'Enter your Country']"/>
              <q-input outlined v-model="state" type="text" class="input-style q-pt-sm" label="State"  :rules="[ val => val && val.length > 0 || 'Enter your State']"/>
              <q-input outlined v-model="city" type="text" class="input-style q-pt-sm" label="City"  :rules="[ val => val && val.length > 0 || 'Enter your City']"/>
              <q-input outlined v-model="pincode" type="text" class="input-style q-pt-sm" label="Pin Code"  :rules="[ val => val && val.length > 0 || 'Enter Pin Code']"/>
              <div class="q-pt-xs q-pa-md">
                  <q-btn size="12px" color="primary" @click="onSubmit" style="color:white !important" align="left" class="fs-14 q-py-md font-regular color-white full-width q-my-xs">
                      <div >Save Adress</div>
                  </q-btn>
              </div>
          </div>
        </q-form>
      </pane-body>
    </pane>
  </div>
</template>
<script>

import { ref } from 'vue'
import { useRouter } from 'vue-router';
import {mapGetters,mapActions} from 'vuex';

export default {
setup (props) {
    const router = useRouter();
    return {
        phone: ref(''),
        email: ref(''),
        houseno: ref(''),
        streetadress: ref(''),
        town: ref(''),
        country: ref(''),
        state: ref(''),
        landmark: ref(''),
        city: ref(''),
        pincode: ref(''),
        redirectCart(){
            router.push({ path: '/cart' });
        }
    }
},
  components: {
    Pane: require("components/~Global/Pane/Pane.vue").default,
    PaneHeader: require("components/~Global/Pane/PaneHeader.vue").default,
    PaneBody: require("components/~Global/Pane/PaneBody.vue").default,
    PaneFooter: require("components/~Global/Pane/PaneFooter.vue").default,
    SingleCartItem: require("components/Common/SingleCartItem.vue").default
  },
    methods: {
       ...mapActions("tenantDetailsModules", ["addAddressData"]),
        onSubmit () {
            let vm = this;
            this.$refs.myFormAddress.validate()
                .then(success => {
                    if (this.phone!='' && this.email!='' && this.houseno!='' && this.streetadress!='' && this.town!='' && this.landmark!='' && this.city!='' &&  this.pincode!='' && this.country!='' && this.state!='' ){
                        var dataList={
                            'phone':this.phone,
                            'email':this.email,
                            'house_no':this.houseno,
                            'street_address':this.streetadress,
                            'landmark':this.landmark,
                            'city':this.city,
                            'pincode':this.pincode,
                            'locality':this.town,
                            'state':this.state,
                            'country':this.country,
                        };
                        let returnResponse=this.addAddressData({
                            formData:dataList
                        });
                        if (returnResponse) {
                           this.redirectCart();
                        }
                    }
                })
                .catch(err => {
                    alert("Something wrong");
                })

        }
    },

}
</script>


Pane
