<template>
  <q-layout view="lHr lpR lFr">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer v-if="$route.meta.header === 1" bordered class="bg-white text-white">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs v-model="tab" dense class="bg-white-2 text-dark">
          <q-route-tab
            class="q-py-md"
            v-for="(nav,index) in navLinks"
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
};
</script>