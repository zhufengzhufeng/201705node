<template>
    <div class="page">
      <MHeader title="珠峰书城"></MHeader>
      <div class="scroll-content">
        <Swiper :swiperSlides="arr"></Swiper>

        <!--最新上架-->
        <h3>最新上架</h3>
        <ul class="hot-list" v-if="books.length">
          <li v-for="book in books">
            <img :src="book.bookCover" alt="">
            <span>{{book.bookName}}</span>
          </li>
        </ul>
        <Loading v-else></Loading>
      </div>
    </div>
</template>
<script>
    import MHeader from '../components/Header.vue';
    import Swiper from '../components/Swiper.vue';
    import Loading from '../components/Loading.vue'
    import axios from 'axios'; //引入ajax的请求方法
    export default {
        data () { //arr是轮播图数据 books是最新上架
            return {msg: 'hello',arr:[],books:[]}
        },
        methods: {},
        components: {MHeader,Swiper,Loading},
        computed: {},
        created(){ //直接获取后台数据， 跨域 8080=>3000 不靠谱
            axios.get('/api/sliders').then(res=>{ //箭头函数 保证this指向
                this.arr = res.data;
            }).catch(err=>{
                console.log(err);
            });
            axios.get('/api/hot').then(res=>{
                 this.books = res.data;
            }).catch(err=>{
              console.log(err);
            });
        }
    }
</script>
<style scoped lang="less">
  h3{line-height: 45px;color: #2d2d2d;padding: 1%}
  .hot-list{
    padding: 1%;
    display: flex;
    flex-wrap: wrap;
    li{
      width: 33.3333%;
      img{width: 100%}
      span{color:#2a2a2a;display: inline-block;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}
    }
  }

</style>
