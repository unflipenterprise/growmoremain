<template>
    <div class="q-ma-md" style="height:400px">

    <q-scroll-area class="absolute fullscreen" :bar-style="{ borderRadius: '1px', opacity: 1 }" :thumb-style="{ right: '1px', borderRadius: '0.2px', background: 'gray', width: '5px', opacity: 0.5 }" style="width:100; z-index:1000; margin-top: 50px;" >
      <slot/>
    </q-scroll-area>
  </div>
</template>
<script>
export default {
  props: ['margin'],
}
</script>
