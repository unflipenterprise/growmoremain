<template>
<div>
  <q-item class="q-py-md" :to="{name:'categoryItem', params: {categoryId: category.id}}" clickable v-ripple>
    <q-item-section avatar class="q-mr-sm">
      <q-avatar :style="{'background-color':category.category_color}" size="50px">
        <q-icon :style="{'color':category.category_icon_color}" class="cat_icon" :name="category.category_icon" />
      </q-avatar>
    </q-item-section>
    <q-item-section>{{category.category_name}}</q-item-section>
  </q-item>
  <q-separator spaced="" />
</div>
</template>
<script>
export default {
    props: ['category'],
}
</script>
