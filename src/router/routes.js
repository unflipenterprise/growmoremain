
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'category/:categoryId',
        name: 'category',
        props: true,
        component: () => import('pages/modules/Categories/CategoryItem.vue')
      }
    ],
    meta: {
      header: 1
    }
  },
  {
    path: '/about',
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/About.vue') },
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
  //   path: '/category/:categoryId',
  //   name: 'category',
  //   props: true,
  //   component: () => import('src/layouts/Layout.vue'),
  //   children: [
  //     { path: '', component: () => import('') }
  //   ],
  //   meta: {
  //     header: 1
  //   }
  // },
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
  {
    path: '/selectaddress',
    props: true,
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('src/pages/modules/UserAddress/AddressList.vue') }
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
