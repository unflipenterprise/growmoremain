<template>
    <q-item-label header class="pc fs-16 font-regular">{{itemOptions.option_name}}{{(itemOptions.is_required)?'*':''}}<span class="fs-11 sc">{{(itemOptions.is_required)?'required':''}}</span></q-item-label>
    <q-item tag="label" v-ripple v-for="(item, index11) in itemOptions.option_item">
        <q-item-section avatar top v-if="itemOptions.option_type=='radio'">
            <q-radio v-model="checkedProducts[index]" :val="itemOptions.id+'-'+item.id+'-'+item.option_price"  @click="addToOptions(item)"></q-radio>
        </q-item-section>

        <q-item-section avatar top v-if="itemOptions.option_type=='checkbox'">
            <q-checkbox  v-model="checkedProducts" :val="itemOptions.id+'-'+item.id+'-'+item.option_price"  @click="addToOptions(item)"></q-checkbox >
        </q-item-section>

        <q-item-section>
            <q-item-label lines="1" class="pc font-regular fs-16">{{item.option_item_name}}</q-item-label>
            <q-item-label class="font-regular fs-14">${{item.option_price}}</q-item-label>
            <q-item-label caption class="font-regular discount fs-14">{{item.other_text}}</q-item-label>
        </q-item-section>
    </q-item>
    <q-separator spaced/>
</template>

<script>
    import { mapState, mapActions,mapGetters} from "vuex";
    export default {
        props: ["itemOptions","checkedProducts","index"],
        computed: {
            ...mapGetters("tenantDetailsModules", ["optionsItemProduct"]),
        },
        methods: {
            // ...mapActions("tenantDetailsModules", ["addToOptionsiItmes"]),
            addToOptions(item) {
                console.log(this.checkedProducts);

                // // var data=this.addToOptionsiItmes(this.checkedProducts);
                // console.log(this.optionsItemProduct[0].item_id);
                // this.addToCart("asdsad");
            }
        }
    }
</script>
