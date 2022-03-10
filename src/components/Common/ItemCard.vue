<template>
    <q-card flat class="rounded-borders scborder q-mb-md q-py-md" >
        <q-item style="background-color:#ffffff;">
            <q-item-section>
                <h6 class="font-bold fs-20 q-ma-none q-pb-xs pc">{{item.item_name}}</h6>
                <p class="fs-15 font-regular sc">{{item.item_desc}}</p>
                <p class="fs-11 font-regular q-pt-md">AS LOW AS</p>
                <div class="fs-20 font-regular pc q-mt-none q-mb-sm"><span class="fs-14 font-regular PC q-mt-xs">{{currency_symbol}}</span>{{(item.item_sale_price/100)}} <span class="fs-14 font-regular PC q-mt-xs">/ Per Month</span></div>
                <q-separator />
            </q-item-section>
        </q-item>
        <q-item exact class="list-padding" v-for="dataItems in item.item_hightlights" :key="dataItems.id" :item_hightlight="dataItems">
            <q-item-section avatar>
                <q-icon name="check_circle" style="color:#BDBDBD; font-size:20px" />
            </q-item-section>
            <q-item-section>
                <p class="fs-15 font-regular">{{dataItems.text}}</p>
            </q-item-section>
        </q-item>
        <div  class="q-px-md q-pt-md" v-if="item.item_type=='options'&&item.stock_status=='in_stock'">
            <q-btn color="primary" :to="'/category/options/' + item.item_id" style="width:100%; padding: 12px 24px">
                <div class="fit row wrap justify-between items-start content-start font-bold">
                    <div class="col-6 text-left fs-16	">
                        {{item.button_text}}
                    </div>
                    <div class="col-6 text-right fs-16">
                        <q-icon name="arrow_forward" color="white" />
                    </div>
                </div>
            </q-btn>
        </div>
        <div  class="q-px-md q-pt-md" v-if="item.item_type!='options'&&item.stock_status=='in_stock'">
            <q-btn color="primary"  @click="addToCart()" style="width:100%; padding: 12px 24px">
                <div class="fit row wrap justify-between items-start content-start font-bold">
                    <div class="col-6 text-left fs-16	">
                        {{item.button_text}}
                    </div>
                    <div class="col-6 text-right fs-16">
                        <q-icon name="arrow_forward" color="white" />
                    </div>
                </div>
            </q-btn>
        </div>
        <div  class="q-px-md q-pt-md" v-if="item.stock_status=='outofstock'">
            <q-btn color="primary" style="width:100%; padding: 12px 24px">
                <div class="fit row wrap justify-between items-start content-start font-bold">
                    <div class="col-6 text-left fs-16	">
                       Out of stock
                    </div>
                    <div class="col-6 text-right fs-16">
                        <q-icon name="arrow_forward" color="white" />
                    </div>
                </div>
            </q-btn>
        </div>
    </q-card>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: ["item"],
    data() {
        return {
            currency_symbol:localStorage.getItem("currency_code")
        };
    },
    methods: {
        ...mapActions("tenantDetailsModules", ["addItemToCart"]),
        ...mapActions("tenantDetailsModules", ["getCartItmes"]),
        addToCart() {
            this.addItemToCart({
                product: this.item,
                quantity: 1,
                options: 1,
            });

            this.getCartItmes();
        }
    }
}
</script>
