<template>
  <div id="app">
    <!--绑定传值 -->
  <product-list-one v-bind:products="products"></product-list-one>
 
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
     products:[
       {name: "马云", price: 200},
       {name: "马华腾", price: 50},
       {name: "马蓉", price: 100},
       {name: "马冬梅", price: 1500}

       
     ]
    }
  }
}
</script>

<style lang="sass">

</style>
