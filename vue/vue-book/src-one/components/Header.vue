<template>
    <div class="header">
        {{title}}
    </div>
</template>
<script>
    export default {
        props:{
            title:{}
        },
        data () {
            return {msg: 'hello'}
        },
        methods: {},
        components: {},
        computed: {}
    }
</script>
<style scoped>
  .header{background: #f1f1f1;text-align: center;height: 45px;line-height: 45px;position: fixed;width: 100%;z-index: 200}
</style>
