<template>

    <q-item tag="label" class="q-py-md" v-ripple>
            <q-item-section avatar top>
                <q-radio v-model="base" val="tedal" color="primary" />
            </q-item-section>
            <q-item-section>
                <q-item-label lines="1" class="pc font-regular fs-16">3 Months</q-item-label>
                <q-item-label class="font-regular fs-14">$13.00</q-item-label>
                <q-item-label caption class="font-regular discount fs-14">Benefit: 1 Month Free</q-item-label>
            </q-item-section>
        </q-item>
        <q-separator spaced/>

</template>

<script>
export default {

}
</script>