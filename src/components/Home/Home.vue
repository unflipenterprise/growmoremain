<template>
  <Pane>
    <PaneHeader>
      <template v-slot:left>
        <q-btn flat round dense icon="grid_view" class="q-mr-sm"></q-btn>
        <q-space/>
      </template>
      <template v-slot:center>
        <q-item-section avatar><img :src="(tenantDetails)?tenantDetails.tenant_logo:''" style="height:40px" alt=""></q-item-section>
        <q-space/>
      </template>
      <template v-slot:right>
        <q-btn flat round dense icon="notifications_none" class="q-mr-sm"></q-btn>
      </template>
    </PaneHeader>
    <PaneBody>
      <div>
        <q-btn color="purple" @click="showLoading" label="Show Loading" />
        <q-card flat class=" fs-16 font-regular">
          <q-card-section class="q-pa-none" style="border-radius:0px">
            <q-item class="q-px-md">
              <div class="q-pt-md font-regular">
                <p class="fs-15">Hello, Welcome to</p>
                <p class="fs-20 font-bold" style="color:#0A6375">{{(tenantDetails)?tenantDetails.tenant_name:''}}</p>
              </div>
            </q-item>
            <div class="q-pa-md">
              <q-carousel
                style="font-size:5px !important; border-radius:4px "
                animated
                v-model="slide"
                control-type="flat"
                arrows
                navigation
                height="180px"
                infinite
              >
              <q-carousel-slide v-for="(slide, index) in sliders" :name="slide.id" :img-src="slide.promotion_image" />
              </q-carousel>
            </div>
          </q-card-section>
        </q-card>
        <div>
          <h6 class="font-bold fs-20 q-ma-none q-pb-none q-px-md q-pt-lg" style="color:#0A6375">Exclusive Service Offers for you</h6>
          <p class="fs-15 font-regular q-px-md">Get Most Affortable rates & plans with exclusive offers</p>
        </div>
        <div class="row q-pa-sm justify-start  items-start content-start">
          <CategoryCard v-for="category in categories" :key="category.id" :category="category"/>
        </div>
        <div style="text-align:center"><q-btn  to="/about" flat text-color="primary" class="category-list-button fs-16 font-bold">All Services</q-btn ></div>
        <div class="q-pa-md" >
          <img class="banner_1" :src="servicesImage"  alt="">
        </div>
      </div>
    </PaneBody>
    <PaneFooter>
      <CartBar/>
    </PaneFooter>
  </Pane>
</template>

<script>
import { ref } from 'vue';
import { useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'
import { mapState,mapGetters} from "vuex";
export default {
  setup () {
    const $q = useQuasar()
    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })

    return {
      slide: ref(1),
      showLoading () {
        $q.loading.show({
          message: 'Loading Awesomeness. Please wait...',
          boxClass: 'bg-grey-2 text-grey-9',
          spinnerColor: 'primary'
        })

        // hiding in 3s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 3000)
      }
    }
  },
  components: {
    Pane: require("components/~Global/Pane/Pane.vue").default,
    PaneHeader: require("components/~Global/Pane/PaneHeader.vue").default,
    PaneBody: require("components/~Global/Pane/PaneBody.vue").default,
    PaneFooter: require("components/~Global/Pane/PaneFooter.vue").default,
    CategoryCard: require("components/Common/CategoryCard.vue").default,
    CartBar: require("components/Common/CartBar.vue").default
  },
  computed: {
    ...mapState("tenantDetailsModules", ["tenantData"]), //Use state variables data
    ...mapGetters("tenantDetailsModules", ["tenantDetails"]),
    ...mapGetters("tenantDetailsModules", ["servicesImage"]),
    ...mapGetters("tenantDetailsModules", ["categories"]),
    ...mapGetters("tenantDetailsModules", ["sliders"])
  },
}
</script>




