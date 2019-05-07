<template>
    <!--只能存在一个根容器-->
    <div class="">
        Vuex {{ count}}{{$store.state.count}}
        <button type="button" @click="increment">增加</button>
        <button type="button" @click="decrement">删减</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'
    export default {
        name: '',
        //props: ["",""],
        props: {
        },

        //所有的初始化状态全部放入data中
        data() {
            return {}
        },
        methods: mapActions([       //预定义的做关联
            'increment',
            'decrement'
        ]),
        //计算属性
        computed: mapState([
            'count'
       ]),

        //实时监听数据变化，可以在这里做相关判断
        watch: {}

    }
</script>

<!--样式-->
<!--
Add "scoped" attribute to limit CSS to this component only
添加scoped属性限制样式只在当前组件中生效
-->
<style>

</style>
