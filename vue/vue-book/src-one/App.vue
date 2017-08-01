<template>
    <div class="page">
      <router-view></router-view>
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

</style>
