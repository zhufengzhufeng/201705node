<template>
    <div class="page">
      <MHeader title="珠峰书城"></MHeader>
      <div class="scroll-content">
        <Swiper :swiperSlides="arr"></Swiper>
      </div>
    </div>
</template>
<script>
    import MHeader from '../components/Header.vue';
    import Swiper from '../components/Swiper.vue';
    import axios from 'axios'; //引入ajax的请求方法
    export default {
        data () {
            return {msg: 'hello',arr:[]}
        },
        methods: {},
        components: {MHeader,Swiper},
        computed: {},
        created(){ //直接获取后台数据， 跨域 8080=>3000 不靠谱
            axios.get('/api/sliders').then(res=>{ //箭头函数 保证this指向
                this.arr = res.data;
            }).catch(err=>{
                console.log(err);
            });
        }
    }
</script>
<style scoped></style>
