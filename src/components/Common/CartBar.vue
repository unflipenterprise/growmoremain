<template>
    <div>
      <q-item @click="$refs.auth.open('bottom')" clickable v-ripple flat class="q-pa-md row cart-footer" v-if="cartItemCount">
        <div>{{cartTotalQuantity}} Service | ${{cartTotalPrice}}</div>
        <q-space />
        <div>
          <div class="fit row justify-between items-center content-center">
            <div class="col-60">View Cart</div>
            <div class="col">
              <q-icon right size="1em" name="local_mall" />
            </div>
          </div>
        </div>
      </q-item>
       <auth :model="bottom" ref="auth" />
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    components:{
      'Auth' : require('components/Common/Auth').default
    },
    computed: {
        ...mapGetters("tenantDetailsModules", ["cartItemCount"]),
        ...mapGetters("tenantDetailsModules", ["cartTotalPrice"]),
        ...mapGetters("tenantDetailsModules", ["cartTotalQuantity"])
    },
}
</script>
