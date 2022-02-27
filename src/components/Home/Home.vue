<template>
  <Pane>
    <PaneHeader>
      <template v-slot:left>
        <q-btn flat round dense icon="grid_view" class="q-mr-sm"></q-btn>
        <q-space/>
      </template>
      <template v-slot:center>
        <q-item-section avatar><img src="https://www.growmorebysn.com/assets/images/logo.png" style="height:40px" alt=""></q-item-section>
        <q-space/>
      </template>
      <template v-slot:right>
        <q-btn flat round dense icon="notifications_none" class="q-mr-sm"></q-btn>
      </template>
    </PaneHeader>
    <PaneBody>
      <div>
        <q-card flat class=" fs-16 font-regular">
          <q-card-section class="q-pa-none" style="border-radius:0px">
            <q-item class="q-px-md">
              <div class="q-pt-md font-regular">
                <p class="fs-15">Hello, Welcome to</p>
                <p class="fs-20 font-bold" style="color:#0A6375">Grow More By SN</p>
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
              <q-carousel-slide v-for="(slide, index) in slider" :name="slide.id" :img-src="slide.promotion_image" />
              </q-carousel>
            </div>
          </q-card-section>
        </q-card>
        <div>
          <h6 class="font-bold fs-20 q-ma-none q-pb-none q-px-md q-pt-lg" style="color:#0A6375">Exclusive Service Offers for you</h6>
          <p class="fs-15 font-regular q-px-md">Get Most Affortable rates & plans with exclusive offers</p>
        </div>
        <div class="row q-pa-sm justify-start  items-start content-start">
          <CategoryCard v-for="category in Categories" :key="category.id" :category="category"/>
        </div>
        <div style="text-align:center"><q-btn  to="/about" flat text-color="primary" class="category-list-button fs-16 font-bold">All Services</q-btn ></div>
        <div class="q-pa-md" >
          <img class="banner_1" src="https://images.pexels.com/photos/10046269/pexels-photo-10046269.jpeg?cs=srgb&dl=pexels-vitaliy-izonin-10046269.jpg&fm=jpg"  alt="">
        </div>
      </div>
    </PaneBody>
    <PaneFooter>
      <CartBar/>
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
  data(){
    return{
      slider:[
        {
          "id": 1,
          "promotion_image": "https://cdn.quasar.dev/img/parallax1.jpg",
        },
        {
          "id": 2,
          "promotion_image": "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          "id": 3,
          "promotion_image": "https://cdn.quasar.dev/img/mountains.jpg",
        },
        {
          "id": 4,
          "promotion_image": "https://cdn.quasar.dev/img/parallax1.jpg",
        }
      ],
      Categories:[
        {
          "id": 1,
          "category_name": "High Speed Internet",
          "category_desc": "category desc",
          "category_slug": "high-speed-internet",
          "category_icon": "rocket_launch",
          "category_image": "categoryimages",
          "category_color": "background-color:#f1f1f1",
        },
        {
          "id": 4,
          "category_name": "Fitness & Gym",
          "category_desc": "category desc",
          "category_slug": "fitness-gym",
          "category_icon": "sports_gymnastics",
          "category_image": "categoryimages2",
          "category_color": "background-color:#f1f1f1",
        },
        {
          "id": 5,
          "category_name": "Education",
          "category_desc": "category desc 3",
          "category_slug": "educations",
          "category_icon": "school",
          "category_image": "categoryimages",
          "category_color": "background-color:#f1f1f1",
        },
        {
          "id": 6,
          "category_name": "E Store India",
          "category_desc": "category desc",
          "category_slug": "e-store-india",
          "category_icon": "grid_view",
          "category_image": "categoryimages2",
          "category_color": "background-color:#f1f1f1",
        }
      ]

    }
  },
  components: {
    Pane: require("components/~Global/Pane/Pane.vue").default,
    PaneHeader: require("components/~Global/Pane/PaneHeader.vue").default,
    PaneBody: require("components/~Global/Pane/PaneBody.vue").default,
    PaneFooter: require("components/~Global/Pane/PaneFooter.vue").default,
    CategoryCard: require("components/Common/CategoryCard.vue").default,
    CartBar: require("components/Common/CartBar.vue").default
  }
};
</script>
