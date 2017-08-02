<template>
    <div class="page">
      <MHeader title="列表页"></MHeader>
      <div class="scroll-content">
        <ul class="list">
          <li v-for="book in books">
            <img v-lazy="book.bookCover">
            <div>
              <h3>{{book.bookName}}</h3>
              <p>{{book.bookInfo}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
    import MHeader from '../components/Header.vue';
    import axios from 'axios'; //axios不支持use ,VueResource 支持use
    export default {
        data () {
            return {msg: 'hello',books:[]}
        },
        methods: {
            getBooks(){
              axios.get('/api/book').then(res=>{
                  this.books = res.data;
              });
            }
        },
        components: {MHeader},
        computed: {},
        created(){
            this.getBooks();
        },
        activated(){ //缓存后依然会走的函数
          this.getBooks(); //虽然缓存 但是点击来在重新获取数据
        }
    }
</script>
<style scoped lang="less">
  .list{
    margin: 10px 2%;
    li{
      padding:20px 0 ;
      border-bottom: 1px solid #ccc;
      display: flex;
      img{width: 120px;height: 90px;}
      div{
        margin-left: 15px;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
