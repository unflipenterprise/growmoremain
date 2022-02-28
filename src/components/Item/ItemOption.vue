<template>
  <Pane>
    <PaneHeader>
      <template v-slot:left>
        <q-btn @click="$router.go(-1)" flat round dense icon="arrow_back" class="q-mr-sm" />
      </template>
      <template v-slot:center>
        <div class="q-toolbar__title ellipsis fs-18 font-bold"> Item Name Goes here </div>
      </template>
    </PaneHeader>
    <PaneBody>
      <div>
        <div class="item-card q-py-md">
            <q-page-container v-if="optionsItem">
             <ItemOptionCard v-for="itemOptions in optionsItem" :key="itemOptions.id" :itemOptions="itemOptions" />
          </q-page-container>
        </div>
      </div>
    </PaneBody>
    <PaneFooter>
      <div class="q-pa-md row option-footer">
        <q-btn color="primary q-pa-md" style="width: 100%">
                <div class="fit row wrap justify-between items-start content-start font-bold">
                    <div class="col-6 text-left fs-16	">
                        Total $230.00
                    </div>
                    <div class="col-6 text-right fs-16">
                        Add Item
                    </div>
                </div>
        </q-btn>
      </div>
    </PaneFooter>
  </Pane>
</template>

<script>
import { ref } from 'vue'
import { mapState, mapActions,mapGetters} from "vuex";
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
    ItemOptionCard: require("components/Common/ItemOptionCard.vue").default
  } ,
    computed: {
        ...mapState("tenantDetailsModules", ["itemsOptionData"]),
        ...mapGetters("tenantDetailsModules", ["optionsItem"]),
    },
    mounted() {
        this.getOptionsData(this.id);
    },
    methods: {
        ...mapActions("tenantDetailsModules", ["getOptionsData"]),
    }
};
</script>
