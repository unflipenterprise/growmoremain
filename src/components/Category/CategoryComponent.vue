<template>
  <pane>
    <pane-header>
      <template v-slot:left>
        <q-btn @click="$router.go(-1)" flat round dense icon="arrow_back" class="q-mr-sm" />
      </template>
      <template v-slot:center>
        <div class="q-toolbar__title ellipsis fs-18 font-bold"> All Services </div>
      </template>
    </pane-header>
    <pane-body>
      <div class="q-pt-sm justify-start  items-start content-start">
        <category-list-card v-for="category in categories" :key="category.id" :category="category"/>
      </div>
    </pane-body>
    <pane-footer><cart-bar/></pane-footer>
    </pane>
</template>

<script>

import { useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'
import { mapState,mapGetters} from "vuex";

export default {
  name:"CategoryComponent",
  setup () {
    const $q = useQuasar()
    let timer
    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })
  },
  components: {
    Pane: require("components/~Global/Pane/Pane.vue").default,
    PaneHeader: require("components/~Global/Pane/PaneHeader.vue").default,
    PaneBody: require("components/~Global/Pane/PaneBody.vue").default,
    PaneFooter: require("components/~Global/Pane/PaneFooter.vue").default,
    CategoryListCard: require("components/Category/CategoryListCard.vue").default,
    CartBar: require("components/Common/CartBar.vue").default,
},
   computed: {
    ...mapState("tenantDetailsModules", ["tenantData"]), //Use state variables data
    ...mapGetters("tenantDetailsModules", ["tenantDetails"]),
    ...mapGetters("tenantDetailsModules", ["servicesImage"]),
    ...mapGetters("tenantDetailsModules", ["categories"]),
  },

}
</script>

<style>

</style>
