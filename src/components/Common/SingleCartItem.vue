<template>
    <div>
    <q-item tag="label" class="cart-item">
        <q-item-section>
            <q-item-label class="pc font-regular fs-16">{{item.item_name}}</q-item-label>
            <q-item-label caption style="margin-top:12px !important" class="pc font-regular fs-15">${{item.item_sale_price/100}} X {{item.qty}}</q-item-label>
            <q-item-label lines="2" caption class="sc font-regular fs-14" style="margin-top:18px !important" v-if="item.cart_item_options.length>0">Plan Name goes here</q-item-label>
            <q-item-label to="/customize" style="margin-top:12px !important" class="pc font-regular fs-12" v-if="item.cart_item_options.length>0">CHANGE PLAN <i class="fas fa-angle-down"></i></q-item-label>
        </q-item-section>
        <q-item-section side top>
            <q-btn round flat icon="delete_outline" @click.stop="removeCartItem()" />
        </q-item-section>
    </q-item>
    <q-separator spaced />
    </div>
</template>
<script>
    import { mapState, mapActions,mapGetters} from "vuex";
    export default {
        props: ["item"],
        methods: {
            ...mapActions("tenantDetailsModules", ["removeCart"]),
            ...mapActions("tenantDetailsModules", ["getCartItmes"]),
            removeCartItem() {
                this.removeCart(this.item.ci_id);
                this.getCartItmes();
            }
        }
    }
</script>
