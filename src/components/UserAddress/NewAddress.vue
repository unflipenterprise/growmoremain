<template>
<div style="width:100%">
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
    </PaneBody>
    <PaneFooter>
                <div class="q-pt-xs q-pa-md">
                    <q-btn size="12px" color="primary" @click="onSubmit"  style="color:white !important" align="left" class="fs-14 q-py-md font-regular color-white full-width q-my-xs">
                        <div >Add Address and Continue</div>
                    </q-btn>
                </div>
    </PaneFooter>
    </Pane>
    </div>
</template>
<script>
export default {

}
</script>

