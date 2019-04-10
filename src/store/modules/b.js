

const state = {
    count:0
}

const mutations = {
    add(state){
        state.count += 2
    },
    reduce(state){
        state.count -= 2
    }

}

const actions = {
    add: ({commit})=>{
        commit('add')
    },
    reduce: ({commit})=>{
        commit('reduce')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}