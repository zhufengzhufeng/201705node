<template>
    <div class="page">
      <!--keep-alive有缓存的作用 transition template....-->
      <transition name="slider">
        <keep-alive>
          <router-view style="position: absolute;top: 0;left: 0;width: 100%;"></router-view>
        </keep-alive>
      </transition>
      <MNav></MNav>
    </div>
</template>
<script>
    import MNav from './components/Nav.vue'
    export default {
        data () {
            return {msg: 'hello'}
        },
        methods: {},
        components: {MNav},
        computed: {}
    }
</script>
<style scoped>
  /* 进入前的位置*/
  .slider-enter{
    transform: translateX(100%);
  }
  /*激活时的动画*/
  .slider-enter-active{
    transition: all .3s;
  }
  /*离开的目的地和动画*/
  .slider-leave-active{
    transform:translateX(-100%);
    transition: all .3s;
  }
</style>
