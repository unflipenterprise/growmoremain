<template>
    <header class="bg-white absolute-top full-width pane-header">
        <q-toolbar>
          <slot name="left"/>
          <slot name="center"/>
          <slot name="right"/>
        </q-toolbar>
    </header>
</template>
<script>
export default {

}
</script>