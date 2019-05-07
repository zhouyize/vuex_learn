import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count:1
}

const mutations = {         //对state做操作，state的修改只能在这里
    increment(state){
        state.count++
    },

    decrement(state){
        state.count--
    }
}

const actions = {
    increment:({commit})=>{
        commit('increment')
    },

    decrement:({commit})=>{
        commit('decrement')
    }
}

export default new Vuex.Store({state,mutations,actions})