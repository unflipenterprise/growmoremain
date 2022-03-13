<template>
  <q-layout view="lHr lpR lFr">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer
      v-if="$route.meta.header === 1"
      bordered
      class="bg-white text-white"
    >
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs v-model="tab" indicator-color="transparent" active-color="black" dense class="bg-white-2 text-grey-7">
          <q-route-tab

            class="q-py-md"
            v-for="(nav, index) in navLinks"
            :key="nav.title"
            exact
            :name="nav.title"
            :label="nav.title"
            :to="nav.to"
          />
        </q-tabs>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { createI18n } from 'vue-i18n'
import { mapState, mapActions,mapGetters} from "vuex";

var navigator_info = window.navigator;
var screen_info = window.screen;
var deviceId = navigator_info.mimeTypes.length;
deviceId += navigator_info.userAgent.replace(/\D+/g, '');
deviceId += navigator_info.plugins.length;
deviceId += screen_info.height || '';
deviceId += screen_info.width || '';
deviceId += screen_info.pixelDepth || '';
let guestId = Math.ceil(Math.random()*1000000)

export default {
  name: "Layout",
  setup () {
    return {
      tab: ref('Home')
    }
  },

  data() {
    return {
      navLinks: [
        {
          title: "Home",
          icon: "home",
          to: "/",
        },
        {
          title: "About",
          icon: "auto_stories",
          to: "/about",
        },
        {
          title: "Cart",
          icon: "local_mall",
          to: "/cart",
        },
        {
          title: "Profile",
          icon: "person",
          to: "/profile",
        },
      ],
    };
  },
  mounted() {
    this.getTenantInformations();  //use actions info
    this.getCartItmes();
    if (!localStorage.getItem("deviceId") && !localStorage.getItem("guestId") && !localStorage.getItem("userToken")){
      localStorage.setItem('deviceId',deviceId);
      localStorage.setItem('guestId',guestId);
    }
  },
  methods: {
    ...mapActions("tenantDetailsModules", ["getTenantInformations"]), //calling methods name
    ...mapActions("tenantDetailsModules", ["getCartItmes"]),
  }
};
</script>
