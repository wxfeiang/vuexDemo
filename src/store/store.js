//  引入 vue  vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 使用 vuex
Vue.use(Vuex)
// 输出数据
export const store = new Vuex.Store({
  //严格模式 
  strict: true,
  // 数据 状态 存
  state: {
    products: [{
        name: "马云",
        price: 200
      },
      {
        name: "马华腾",
        price: 50
      },
      {
        name: "马蓉",
        price: 100
      },
      {
        name: "马冬梅",
        price: 1500
      }
    ]
  },
  getters: { // 获取
    //设置方法 
    selproduct: (state) => {
      var selproduct = state.products.map(
        product => {
          return {
            name: "**" + product.name + " **",
            price: product.price / 2
          }

        }
      );
      //  最后在返回出去
      return selproduct;
    }

  },
  mutations: { // 事件状态追踪
    // 同步
    redproduct: (state,playload) => {
      state.products.forEach(product => {
        product.price -= playload;
      })
    }
  },
  actions: {
    redproduct: (context,playload) => {
      setTimeout(function () {
          // 
       context.commit('redproduct',playload);
       


      }, 3000)


    }
  }




});
