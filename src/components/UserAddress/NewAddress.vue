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
        <q-form>
          <div class="q-px-md q-pt-md">
              <q-input outlined v-model="name" type="text" class="input-style" label="Your Full Name" :rules="[ val => val && val.length > 0 || 'Enter your Name']" />
              <q-input outlined v-model="phone" type="number" hint="Telephone number" class="input-style q-pt-sm" label="Enter your Phone Number"  :rules="[ val => val && val.length > 0 || 'Enter your Phone Number']"/>
              <q-input outlined v-model="email" type="email" class="input-style q-pt-sm" label="Enter your Email Address "  :rules="[ val => val && val.length > 0 || 'Enter your Email']"/>
              <br>
              <q-input outlined v-model="email" type="text" class="input-style q-pt-sm" label="Appartment, House No, Flat No"  :rules="[ val => val && val.length > 0 || 'Enter your Email']"/>
              <q-input outlined v-model="email" type="text" class="input-style q-pt-sm" label="Street Colony Area Name"  :rules="[ val => val && val.length > 0 || 'Enter your Email']"/>
              <q-input outlined v-model="email" type="text" class="input-style q-pt-sm" label="Locality/Town"  :rules="[ val => val && val.length > 0 || 'Enter your Email']"/>
              <q-input outlined v-model="email" type="text" class="input-style q-pt-sm" label="Land Mark"  :rules="[ val => val && val.length > 0 || 'Enter your Email']"/>
              <q-input outlined v-model="email" type="text" class="input-style q-pt-sm" label="City"  :rules="[ val => val && val.length > 0 || 'Enter your Email']"/>
              <q-input outlined v-model="email" type="text" class="input-style q-pt-sm" label="Pin Code"  :rules="[ val => val && val.length > 0 || 'Enter your Email']"/>
              <q-input outlined v-model="email" type="text" class="input-style q-pt-sm" label="Enter your Email Address"  :rules="[ val => val && val.length > 0 || 'Enter your Email']"/>
          </div>
        </q-form>
      </pane-body>
      <pane-footer>
        <div class="q-pa-md row option-footer">
          <q-btn to="/createaddress" class="select-address-footer q-pa-md" style="width: 100%">
                  Add New Address
          </q-btn>
        </div>
      </pane-footer>
    </pane>
  </div>
</template>
<script>
export default {
  components: {
    Pane: require("components/~Global/Pane/Pane.vue").default,
    PaneHeader: require("components/~Global/Pane/PaneHeader.vue").default,
    PaneBody: require("components/~Global/Pane/PaneBody.vue").default,
    PaneFooter: require("components/~Global/Pane/PaneFooter.vue").default,
    SingleCartItem: require("components/Common/SingleCartItem.vue").default
  }

}
</script>


Pane
