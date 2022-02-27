<template>
<div class="col-6 q-pa-sm">
    <q-item :to="{name:'category', params: {id: category.id}}" clickable v-ripple flat class="rounded-borders" :style="category.category_color" style="height:120px;">
    <q-item-section>
    <q-icon style="font-size: 2em; color:#DB45A6" :name="category.category_icon" />
    <p class="fs-18 font-bold q-pt-sm">{{category.category_name}}</p>
    </q-item-section>
    </q-item>
</div>
</template>
<script>
export default {
    props: ["category"],
}
</script>
