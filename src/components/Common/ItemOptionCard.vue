<template>
    <q-item-label header class="pc fs-16 font-regular">{{itemOptions.option_name}}{{(itemOptions.is_required)?'*':''}}<span class="fs-11 sc">{{(itemOptions.is_required)?'required':''}}</span></q-item-label>
    <q-item tag="label" v-ripple v-for="(item, index) in itemOptions.option_item">
        <q-item-section avatar top>
            <q-radio v-model="item.model" :val="item.option_item_name"></q-radio>
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
    export default {
        props: ["itemOptions"],
    }
</script>
