<template>
    <div>
        <button @click="add(10)">增加</button>
        <button @click="jian(6)">减去</button>
        <p>{{this.$store.state.count}}</p>
    </div>
</template>
<script>
export default {
    name:"HomeUser",
    methods: {
        add(b) {
            // 用户行为
            // 提交修改 count 的业务函数 业务函数 在 store 中
            // store.commit 模式提交业务
            // 不能直接修改 count
            // x this.$store.state.count = this.$store.state.count + 1
            this.$store.dispatch("asyncincrement",b);
            // dispatch 给 actions 提交  提交方法
        },
        jian(b) {
            this.$store.commit("increment1",b);
        }
    },
}
</script>
<style scoped>

</style>