<template>
  <div id="app">
    <!--绑定传值   不需要属性传值-->
  <!-- <product-list-one v-bind:products="products"></product-list-one>
  <product-list-two v-bind:products="products"></product-list-two> -->

  <product-list-one ></product-list-one>
  <product-list-two ></product-list-two>




  
  </div>
</template>

<script>
// 引入组件
import ProductlistOne from './components/ProductlistOne'
import ProductlistTwo from './components/ProductlistTwo'
export default {
  name: 'app',
  components: {
    // 注册组件
    "product-list-one": ProductlistOne,
    "product-list-two": ProductlistTwo
    
  },
  data () {
    return {
    
    }
  }
}
</script>

<style lang="sass">

</style>
