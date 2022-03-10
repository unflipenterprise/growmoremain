<template>
<div class="col-6 q-pa-sm">
    <q-item :to="{name:'categoryItem', params: {categoryId: category.id}}" clickable v-ripple flat :style="{'background-color':category.category_color}" class="cat_card rounded-borders">
    <q-item-section>
    <q-icon :style="{'color':category.category_icon_color}" class="cat_icon" :name="category.category_icon" />
    <p class="fs-18 font-bold q-pt-sm">{{category.category_name}}</p>
    </q-item-section>
    </q-item>
</div>
</template>
<script>
export default {
    props: ['category'],
}
</script>
