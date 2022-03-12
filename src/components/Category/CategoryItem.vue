<template>
  <Pane>
    <PaneHeader>
      <template v-slot:left>
        <q-btn @click="$router.go(-1)" flat round dense icon="arrow_back" class="q-mr-sm" />
      </template>
      <template v-slot:center>
        <div class="q-toolbar__title ellipsis fs-18 font-bold">  {{(singleCategory)?singleCategory.category_name:''}}</div>
      </template>
    </PaneHeader>
    <PaneBody>
      <div>
        <div class="category-title q-px-md q-py-xl" :style="{'background-color':(singleCategory)?singleCategory.category_header_color:''}"  style="">
          <div class="fs-22 font-bold" :style="{'color':(singleCategory)?singleCategory.category_color:''}">{{(singleCategory)?singleCategory.category_name:''}}</div>

          <p class="fs-16 font-regular q-pt-md" :style="{'color':(singleCategory)?singleCategory.category_color:''}">{{(singleCategory)?singleCategory.category_desc:''}}</p>
        </div>
        <div class="category-banner" :class="(singleCategory)?singleCategory.banner_1:'q-px-md q-pt-md'">
          <img :src="(singleCategory)?singleCategory.banner_1:''">
        </div>
        <div class="item-card q-px-md q-pt-md">
          <ItemCard v-for="item in categoryItemList" :key="item.id" :item="item"/>
        </div>
      </div>
    </PaneBody>
    <PaneFooter>
        <CartBar/>
    </PaneFooter>
  </Pane>
</template>

<script>
  import { mapState,mapGetters,mapActions} from "vuex";
import { ref } from 'vue'
export default {
  setup(){
    return {
      slide: ref(1),
    }
  },
  props:["categoryId"],
  components: {
    Pane: require("components/~Global/Pane/Pane.vue").default,
    PaneHeader: require("components/~Global/Pane/PaneHeader.vue").default,
    PaneBody: require("components/~Global/Pane/PaneBody.vue").default,
    PaneFooter: require("components/~Global/Pane/PaneFooter.vue").default,
    ItemCard: require("components/Common/ItemCard.vue").default,
    CartBar: require("components/Common/CartBar.vue").default
  },
  computed: {
    ...mapState("tenantDetailsModules", ["categorySingleData"]),
    ...mapGetters("tenantDetailsModules", ["singleCategory"]),
    ...mapGetters("tenantDetailsModules", ["categoryItemList"]),
  },
  mounted() {
    this.getCategoryData(this.categoryId);
  },
  methods: {
    ...mapActions("tenantDetailsModules", ["getCategoryData"]),
  }
};
</script>
