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
                <q-item exact class="list-padding" v-for="(itemOptions, index) in optionsItem" :key="itemOptions.id" :itemOptions="itemOptions">
                    <q-item-label header class="pc fs-16 font-regular">{{itemOptions.option_name}}{{(itemOptions.is_required)?'*':''}}<span class="fs-11 sc">{{(itemOptions.is_required)?'required':''}}</span></q-item-label>
                    <q-item tag="label" v-ripple v-for="(item, index11) in itemOptions.option_item">
                        <q-item-section avatar top v-if="itemOptions.option_type=='radio'">
                            <q-radio v-model="checkedProducts[index]" :val="itemOptions.id+'-'+item.id+'-'+item.option_price"></q-radio>
                        </q-item-section>
                        <q-item-section avatar top v-if="itemOptions.option_type=='checkbox'">
                            <q-checkbox  v-model="checkedProducts" :val="itemOptions.id+'-'+item.id+'-'+item.option_price"></q-checkbox >
                        </q-item-section>
                        <q-item-section>
                            <q-item-label lines="1" class="pc font-regular fs-16">{{item.option_item_name}}</q-item-label>
                            <q-item-label class="font-regular fs-14">${{item.option_price}}</q-item-label>
                            <q-item-label caption class="font-regular discount fs-14">{{item.other_text}}</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-separator spaced/>
                </q-item>
          </q-page-container>
        </div>
      </div>
    </PaneBody>
    <PaneFooter >
      <div class="q-pa-md row option-footer">
        <q-btn color="primary q-pa-md" style="width: 100%">
                <div class="fit row wrap justify-between items-start content-start font-bold">
                    <div class="col-6 text-left fs-16	">
                        Total ${{(totalOptionsPrice())?totalOptionsPrice():0}}
                    </div>
                    <div class="col-6 text-right fs-16" @click="addToCart()">
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

import routes from '../../router/routes'

export default {
  setup(){
    return {
      slide: ref(1),
    }
  },
  props:["id"],
    data(){
        const totalPrice=0;
        return{
            checkedProducts:[],
            totalOptionsPrice(){
                var item_option_price   =0;
                var totalItemOptionsPrice=0;
                var itemstext='';
                if (this.checkedProducts.length>0) {
                    for (let i = 0; i < this.checkedProducts.length; i++) {
                        itemstext = this.checkedProducts[i];
                        var splitData = itemstext.split("-");
                        item_option_price = splitData[2];
                        totalItemOptionsPrice = Number(totalItemOptionsPrice) + Number(item_option_price);
                    }
                }
                return totalItemOptionsPrice;
            },
            totalSelectedOptionsItem(){
                var item_option_price   =0;
                var item_option_id      ='';
                var cart_item_id        ='';

                var itemstext='';
                var dataList=[];
                if (this.checkedProducts.length>0) {
                    for (let i = 0; i < this.checkedProducts.length; i++) {
                        itemstext = this.checkedProducts[i];
                        var splitData = itemstext.split("-");
                        cart_item_id = splitData[0];
                        item_option_id = splitData[1];
                        item_option_price = splitData[2];
                        var newdataList = {
                            'cart_item_id': cart_item_id,
                            'item_option_id': item_option_id,
                            'selected': 'selected',
                        };
                        dataList.push(newdataList);
                    }
                }
                return dataList;
            }
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
        ...mapGetters("tenantDetailsModules", ["optionsItemProduct"]),
    },
    mounted() {
        this.getOptionsData(this.id);
    },
    methods: {
        ...mapActions("tenantDetailsModules", ["getOptionsData"]),
        ...mapActions("tenantDetailsModules", ["addItemToCart"]),
        ...mapActions("tenantDetailsModules", ["getCartItmes"]),

        addToCart() {
            this.addItemToCart({
                product:this.optionsItemProduct[0],
                quantity:1,
                options:this.totalSelectedOptionsItem(),
            });

            // this.getCartItmes();
            routes.push({ path: '/cart' });
        }
    }
};
</script>
