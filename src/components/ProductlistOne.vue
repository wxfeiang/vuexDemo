<template>
  <div class="product-list-one">
  <h2>product-list-one</h2>
  <ul>
    <li v-for="product in products">

      <span class="name">{{product.name}}</span>
      <span class="price">$ {{product.price}}</span>
    </li>
  </ul>
 
  </div>
</template>

<script>
export default {
  //  拿到  父级组件
  props: ["products"],
  
  data () {
    return {
    //  products:[
    //    {name: "马云", price: 200},
    //    {name: "马华腾", price: 50},
    //    {name: "马蓉", price: 100},
    //    {name: "马冬梅", price: 1500}

       
    //  ]
    }
  }
}
</script>

<style lang="sass">

</style>
