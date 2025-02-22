<template>
  < class="container">
  <h1>vue3 + typescript + vite2 + element-plus二次封装组件</h1>
  <calendar />
  <myForm />
  <myMenu />
  <router-link to="/chooseArea">toChooseArea</router-link><br />
  <router-link to="/chooseCity">toChooseCity</router-link><br />
  <router-link to="/chooseTime">toChooseTime</router-link><br />
</template>

<script lang="ts" setup>
import calendar from './calendar/index.vue'
import myForm from './form/index.vue'
import myMenu from './menu/index.vue'
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 40px;
    position: relative;
    top: -100px;
  }
}
</style>
