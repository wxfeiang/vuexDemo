<template>
  <div class="product-list-one">
  <h2>product-list-one</h2>
  <ul>
    <li v-for="product in selproduct">

      <span class="name">{{product.name}}</span>
      <span class="price">$ {{product.price}}</span>
    </li>
  </ul>
  <!-- 穿参数 -->
   <button @click="redproduct(4)">商品降价</button>
  </div>
</template>

<script>
// 引入
import {mapGetters} from 'vuex'

export default {
  //  拿到  父级组件
  //props: ["products"],
  // store  传值 不需要

  /*data () {
    return {
    //  products:[
    //    {name: "马云", price: 200},
    //    {name: "马华腾", price: 50},
    //    {name: "马蓉", price: 100},
    //    {name: "马冬梅", price: 1500}

       
    //  ]
    }
  }
  */
  //  计算属性

  computed: {
    // 拿到 store 值  自定义数组products1
    products() {
      return this.$store.state.products;
    },
    selproduct() {
      // 在单独页面使用方式
      /* var selproduct = this.$store.state.products.map(
        product=>{
          return {
            name: "**"+ product.name+" **",
            price: product.price/2
          }

        }
      );
      //  最后在返回出去
      return selproduct;
    }
    */
      //  从中央状态获取
      return this.$store.getters.selproduct;
    },
    // 多个 getters 
    
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([  // 新方法  浏览器不识别  安装 bable
      'selproduct',


      
    ])
  },
  methods:{
    redproduct :function (amount) {
      // this.$store.state.products.forEach(product => {
      //   product.price -=1;
      // });

      // 调用
     // this.$store.commit('redproduct');

      // 走 action (方法) 穿参数
      this.$store.dispatch("redproduct",amount)
      
    }
  }
};
</script>

<style lang="sass" scoped>
.product-list-one
    background: #FFF8B1
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2)
    margin-bottom: 30px
    padding: 10px 20px

.product-list-one ul
    padding: 0

.product-list-one li
    display: inline-block
    margin-right: 10px
    margin-top: 10px
    padding: 20px
    background: rgba(255,255,255,0.7)

.price
    font-weight: bold
    color: #E8800C

</style>
