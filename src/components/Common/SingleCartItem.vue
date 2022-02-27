<template>
    <div>
    <q-item tag="label" class="cart-item">
        <q-item-section>
            <q-item-label class="pc font-regular fs-16">Item Name Goes Here</q-item-label>
            <q-item-label caption style="margin-top:12px !important" class="pc font-regular fs-15">$189 x 5</q-item-label>
            <q-item-label lines="2" caption class="sc font-regular fs-14" style="margin-top:18px !important">Plan Name goes here</q-item-label>
            <q-item-label to="/customize" style="margin-top:12px !important" class="pc font-regular fs-12">CHANGE PLAN <i class="fas fa-angle-down"></i></q-item-label>
        </q-item-section>
        <q-item-section side top>
            <q-btn round flat icon="delete_outline" @click.stop="removeCartItem()" />
        </q-item-section>
    </q-item>
    <q-separator spaced />
    </div>
</template>
<script>
export default {

}
</script>