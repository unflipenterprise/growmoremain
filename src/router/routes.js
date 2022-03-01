const routes = [
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        meta: {
          header: 1,
        },
      },
      {
        path: "category/:categoryId",
        name: "category",
        props: true,
        component: () => import("pages/modules/Categories/CategoryItem.vue"),
        meta: {
          header: 1,
        },
      },
      {
        path: "/about",
        component: () => import("pages/About.vue"),
        meta: {
          header: 1,
        },
      },
      {
        path: '/category/options/:id',
        name: "options",
        props: true,
        component: () => import("pages/modules/Items/ItemOptions.vue"),
        meta: {
          header: 1,
        },
      },
      {
        path: "/cart",
        component: () => import("pages/Cart.vue"),
        meta: {
          header: 2,
        },
      },
      {
        path: "/selectaddress",
        component: () => import("pages/modules/UserAddress/AddressList.vue"),
        meta: {
          header: 2,
        },
      },
      {
        path: "/createaddress",
        component: () => import("pages/modules/UserAddress/CreateAddress.vue"),
        meta: {
          header: 2,
        },
      },
    ],
  },
  {
    path: "/:catchAll(.)",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
