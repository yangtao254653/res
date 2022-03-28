import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // 在 vue 应用中安装 vuex

let store = new Vuex.Store({ // Store 静态方法
    state: { count: 0 }, // 存放数据
    mutations: { // 存放用户提交的方法 => 业务
        // mutations操作修改
        increment(state,b){ // 修改 state 的业务函数
            // 每个 mutations 的第一个参数就是 state 本身
            state.count = state.count + b;
        },
        increment1(state,b){  
            state.count = state.count - b;
        }
    },
    actions:{
        asyncincrement(context,b){
            // 存放异步的 提交 mutation
            // 每个 action 的第一个参数是 store
            setTimeout(function(){
                context.commit("increment",b);
            },100)
        }
    }
});

export default store;