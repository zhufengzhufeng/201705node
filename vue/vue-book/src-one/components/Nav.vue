<template>
    <nav>
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-list"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-54"></i>
        <span>添加</span>
      </router-link>
    </nav>
</template>
<script>
    // 默认导出一个对象
    export default {
        data () {
            return {msg: 'hello'}
        },
        methods: {},
        components: {},
        computed: {}
    }
</script>
<style scoped lang="less">
  nav{
    position: fixed;left: 0;bottom:0;width: 100%;height: 50px;
    display: flex;
    border-top: 1px solid #ccc;
    a{
      justify-content: center;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .router-link-active{
      color: orangered;
    }
  }
</style>
