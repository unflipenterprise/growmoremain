<template>
    <div>
    <q-item tag="label" class="cart-item">
        <q-item-section>
            <q-item-label class="pc font-regular fs-16">{{item.item_name}}</q-item-label>
            <q-item-label caption style="margin-top:12px !important" class="pc font-regular fs-15" v-if="item.cart_item_options.length==''">{{currency_symbol}}{{item.item_sale_price/100}} X {{item.qty}}</q-item-label>

            <q-item-label caption style="margin-top:12px !important" class="pc font-regular fs-15" v-if="item.cart_item_options.length>0">{{currency_symbol}}{{getOptionsPrice(item.cart_item_options)}} X {{item.qty}}</q-item-label>
            <q-item-label lines="2" caption class="sc font-regular fs-14" style="margin-top:18px !important" v-if="item.cart_item_options.length>0">{{getOptionsPlaneName(item.cart_item_options)}}</q-item-label>

            <q-item-label :to="'/category/cartoptions/' + item.ci_id" style="margin-top:12px !important" class="pc font-regular fs-12" v-if="item.cart_item_options.length>0" @click="changePlanActions()">CHANGE PLAN <i class="fas fa-angle-down"></i></q-item-label>
        </q-item-section>
    </q-item>
        <q-item-section side top>
            <q-btn round flat icon="delete_outline" @click="removeCartItem()" />
        </q-item-section>
    <q-separator spaced />
    </div>
</template>
<script>
    import { mapState, mapActions,mapGetters} from "vuex";
    import { useRouter } from 'vue-router';
    export default {
        props: ["item"],
        setup(){
            const router = useRouter();
            return {
                currency_symbol:localStorage.getItem("currency_code"),
                redirectcartOptions(cartId){
                    router.push({ path: '/category/cartoptions/'+cartId+'' });
                }
            }
        },
        data(){
            return{
                getOptionsPrice(itemCartOptions){
                    let total = 0;
                    if (itemCartOptions){
                        itemCartOptions.forEach(item2 => {
                            total += (item2.option_sale_price/100)* 1;
                        });
                    }
                    return total;
                },
                getOptionsPlaneName(itemCartOptions){
                    let totalItems = 0;
                    if (itemCartOptions){
                        itemCartOptions.forEach(item2 => {
                            totalItems+=item2.option_item_name;
                        });
                    }
                    return totalItems;
                }
            }
        },
        methods: {
            ...mapActions("tenantDetailsModules", ["removeCart"]),
            ...mapActions("tenantDetailsModules", ["getCartItmes"]),
            removeCartItem() {
                this.removeCart(this.item.ci_id);
                this.getCartItmes();
            },
            changePlanActions(){
                this.redirectcartOptions(this.item.ci_id);
            }
        }
    }
</script>
