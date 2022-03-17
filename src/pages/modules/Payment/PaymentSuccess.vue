<template>
    <q-page class="flex flex-center relative-position">
        <payment-success-component/>
    </q-page>
</template>

<script>
    import { ref } from 'vue'

    export default ({
        name: 'PaymentMain',
        components: {
            'PaymentSuccessComponent' : require('components/Payment/PaymentSuccessComponent').default
        }

    })
</script>
