<template>
  <div>
    <p>Total Items 2 in Qty</p>
    <p>Total Amount to Pay: $2500</p>
    <q-list bordered padding >
      <q-item clickable v-ripple style="width:100% !important">
        <q-item-section>
          <q-item-label>Cash On Delivery</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple style="width:100% !important">
        <q-item-section>
          <q-item-label>Debit Card</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple style="width:100% !important">
        <q-item-section>
          <q-item-label>UPI Payment</q-item-label>
        </q-item-section>
      </q-item>
      </q-list>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
