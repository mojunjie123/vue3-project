<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script setup>
// import { useStore } from './store/vuex'
import { useSidebarStore } from './store/pinia/sidebar'
// const store = useStore()
// console.log(store.state.name)
const sidebar = useSidebarStore()
console.log(sidebar)
</script>

<style lang="scss">
.notification-popper-class {
  padding: 0 !important;
}
</style>
