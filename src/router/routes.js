
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ],
    meta: {
      header: 1
    }
  },
  {
    path: '/about',
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/About.vue') }
    ],
    meta: {
      header: 1
    }
  },
  {
    path: '/cart',
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Cart.vue') }
    ],
    meta: {
      header: 2
    }
  },
  // {
  //   path: '/category/:id',
  //   name: 'category',
  //   props: true,
  //   component: () => import('src/layouts/Layout.vue'),
  //   children: [
  //     { path: '', component: () => import('src/pages/CategoryItem.vue') }
  //   ],
  //   meta: {
  //     header: 1
  //   }
  // },

  {
    path: '/category',
    props: true,
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('src/pages/modules/Categories/CategoryItem.vue') }
    ],
    meta: {
      header: 1
    }
  },
  {
    path: '/itemoptions',
    props: true,
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('src/pages/modules/Items/ItemOptions.vue') }
    ],
    meta: {
      header: 2
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
