<template>
  <Pane>
    <PaneHeader>
      <template v-slot:left>
        <q-btn @click="$router.go(-1)" flat round dense icon="arrow_back" class="q-mr-sm" />
      </template>
      <template v-slot:center>
        <div class="q-toolbar__title ellipsis fs-18 font-bold"> High Speed Internet {{categoryId}}</div>
      </template>
    </PaneHeader>
    <PaneBody>
      <div>
        <div class="category-title q-px-md q-py-xl" style="background-color:teal; color:white">
          <div class="fs-22 font-bold">Hello world</div>
          <p class="fs-16 font-regular q-pt-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        </div>
        <div class="category-banner q-pa-md">
          <img src="https://via.placeholder.com/400x180">
        </div>
        <div class="item-card q-px-md">
          <ItemCard v-for="item in items" :key="item.id" :item="item"/>
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
  props:["categoryId"],
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
      "items": [
                {
                    "item_id": 2,
                    "item_name": "Product Name 2",
                    "item_slug": "productslug2",
                    "item_mrp": 1000,
                    "item_price": 900,
                    "item_sale_price": 850,
                    "item_max_qty": 5,
                    "is_featured": "false",
                    "is_onsale": "true",
                    "date_onsale_start": "2022-02-20 07:03:08",
                    "date_onsale_end": "2022-02-25 07:03:08",
                    "sale_type": "virtual",
                    "physical_shipping": "false",
                    "tax_status": null,
                    "tax_class": null,
                    "tax_amount": null,
                    "item_ranking": 1,
                    "item_weight": 0,
                    "item_type": "options",
                    "item_print_name": "product 2 print name",
                    "item_short_name": "product 2 short name",
                    "item_desc": "product 2 main desc",
                    "item_short_desc": "product 2 short desc",
                    "item_cart_desc": "Items short 2 desc",
                    "item_thumb": "item 2 image",
                    "item_image": "item 2 image",
                    "category_id": 1,
                    "discount_id": 1,
                    "created_at": "2022-02-20 07:03:08",
                    "updated_at": "2022-02-20 07:03:08",
                    "parent_id": null,
                    "tenant_id": 1,
                    "currency_id": 1,
                    "status": "active",
                    "item_text": "",
                    "other_text": "",
                    "button_text": "ADD TO CART",
                    "lowest_amount": 0,
                    "stock_status": "in_stock",
                    "item_hightlights": [
                        {
                            "id": 4,
                            "text": "Unlimited Browsing"
                        },
                        {
                            "id": 5,
                            "text": "Unlimited Downloading"
                        },
                        {
                            "id": 6,
                            "text": "Powered by Smart fiber tech"
                        }
                    ]
                },
                {
                    "item_id": 3,
                    "item_name": "Product Name 3",
                    "item_slug": "productslug3",
                    "item_mrp": 1000,
                    "item_price": 900,
                    "item_sale_price": 850,
                    "item_max_qty": 5,
                    "is_featured": "false",
                    "is_onsale": "true",
                    "date_onsale_start": "2022-02-20 07:03:08",
                    "date_onsale_end": "2022-02-25 07:03:08",
                    "sale_type": "virtual",
                    "physical_shipping": "false",
                    "tax_status": null,
                    "tax_class": null,
                    "tax_amount": null,
                    "item_ranking": 1,
                    "item_weight": 0,
                    "item_type": "regular",
                    "item_print_name": "product 3 print name",
                    "item_short_name": "product 3 short name",
                    "item_desc": "product main desc",
                    "item_short_desc": "product 3 short desc",
                    "item_cart_desc": "Items short 3 desc",
                    "item_thumb": "item 3 image",
                    "item_image": "item 3 image",
                    "category_id": 1,
                    "discount_id": 1,
                    "created_at": "2022-02-20 07:03:08",
                    "updated_at": "2022-02-20 07:03:08",
                    "parent_id": null,
                    "tenant_id": 1,
                    "currency_id": 1,
                    "status": "active",
                    "item_text": "",
                    "other_text": "",
                    "button_text": "ADD TO CART",
                    "lowest_amount": 0,
                    "stock_status": "in_stock",
                    "item_hightlights": [
                        {
                            "id": 7,
                            "text": "Unlimited Browsing"
                        },
                        {
                            "id": 8,
                            "text": "Unlimited Downloading"
                        },
                        {
                            "id": 9,
                            "text": "Powered by Smart fiber tech"
                        }
                    ]
                },
                {
                    "item_id": 4,
                    "item_name": "Product Name 4",
                    "item_slug": "productslug4",
                    "item_mrp": 1000,
                    "item_price": 900,
                    "item_sale_price": 850,
                    "item_max_qty": 5,
                    "is_featured": "false",
                    "is_onsale": "true",
                    "date_onsale_start": "2022-02-20 07:03:08",
                    "date_onsale_end": "2022-02-25 07:03:08",
                    "sale_type": "virtual",
                    "physical_shipping": "false",
                    "tax_status": null,
                    "tax_class": null,
                    "tax_amount": null,
                    "item_ranking": 1,
                    "item_weight": 0,
                    "item_type": "regular",
                    "item_print_name": "product 4 print name",
                    "item_short_name": "product 4 short name",
                    "item_desc": "product 4 main desc",
                    "item_short_desc": "product 4 short desc",
                    "item_cart_desc": "Items short 4 desc",
                    "item_thumb": "item 4 image",
                    "item_image": "item 4 image",
                    "category_id": 1,
                    "discount_id": 1,
                    "created_at": "2022-02-20 07:03:08",
                    "updated_at": "2022-02-20 07:03:08",
                    "parent_id": null,
                    "tenant_id": 1,
                    "currency_id": 1,
                    "status": "active",
                    "item_text": "",
                    "other_text": "",
                    "button_text": "ADD TO CART",
                    "lowest_amount": 0,
                    "stock_status": "in_stock",
                    "item_hightlights": [
                        {
                            "id": 10,
                            "text": "Unlimited Browsing"
                        },
                        {
                            "id": 11,
                            "text": "Unlimited Downloading"
                        },
                        {
                            "id": 12,
                            "text": "Powered by Smart fiber tech"
                        },
                        {
                            "id": 13,
                            "text": "New Highlights "
                        }
                    ]
                }
            ]

    }
  },
  components: {
    Pane: require("components/~Global/Pane/Pane.vue").default,
    PaneHeader: require("components/~Global/Pane/PaneHeader.vue").default,
    PaneBody: require("components/~Global/Pane/PaneBody.vue").default,
    PaneFooter: require("components/~Global/Pane/PaneFooter.vue").default,
    ItemCard: require("components/Common/ItemCard.vue").default,
    CartBar: require("components/Common/CartBar.vue").default
  }
};
</script>
