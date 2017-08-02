<template>
  <div class="page">
    <MHeader title="添加页面"></MHeader>
    <div class="scroll-content">
      <ul class="form-list">
        <li>
          <label for="bookName">书名</label>
          <input type="text" placeholder="请输入书名" id="bookName" v-model="book.bookName">
        </li>
        <li>
          <label for="bookCover">书的封面地址</label>
          <input type="text" placeholder="请输入封面" id="bookCover" v-model="book.bookCover">
        </li>
        <li>
          <label for="bookInfo">书的详细信息</label>
          <input type="text" placeholder="请输入详细信息" id="bookInfo" v-model="book.bookInfo">
        </li>
        <li>
          <button @click="add">添加图书</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import MHeader from '../components/Header.vue';
  import axios from 'axios';
  export default {
    data () {
      return {
        msg: 'hello',
        book: {
          bookName: '',
          bookCover: '',
          bookInfo: ''
        }
      }
    },
    methods: {
        add(){//增加图书
          axios.post('/api/book',this.book).then(res=>{
            this.book = {
              bookName: '',
              bookCover: '',
              bookInfo: ''
            };
            this.$router.push('/list'); //成功后跳转到列表页面
          });
        }
    },
    components: {MHeader},
    computed: {}
  }
</script>
<style scoped lang="less">
  .form-list {
    padding: 10px 30px;
    li {
      height: 65px;
      display: flex;
      flex-direction: column;
      input {
        margin-top: 5px;
        box-shadow: none;
        border: 1px solid #666;
        height: 30px;
      }
      button {
        height: 40px;
      }
    }

  }
</style>
