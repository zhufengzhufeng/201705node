<template>
    <div class="container">
      <h2 class="text-center text-danger">
        百度搜索框
      </h2>
      <input type="text"
             class="form-control"
             v-model="input"
             @keyup="getData"
      >
      <ul class="list-group">
        <li class="list-group-item" :class="{active:index == i}" v-for="(item,i) in s">{{item}}</li>
      </ul>
    </div>
</template>
<script>
    // axios + jsonp / fetch / jquery
    import jsonp from 'jsonp'
    export default {
        data () {
            return {msg: 'hello',s:[],input:'',index:-1}
        },
        created(){
            jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.input,{param:'cb'}, (err,data) => {
              this.s = data.s;
            });
        },
        methods: {
            getData(e){
              if(e.keyCode === 38 || e.keyCode === 40) { //向上
                  if(e.keyCode === 38){
                    this.index-=1;
                  }
                  if(e.keyCode === 40){
                    this.index+=1;
                  }
                  this.input = this.s[this.index];
                  return
              }
              if(e.keyCode === 13){
                  return window.open('https://www.baidu.com/s?wd='+this.input)
              }
              jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.input,{param:'cb'}, (err,data) => {
                this.s = data.s;
              });
            }
        },
        components: {},
        computed: {}
    }
</script>
<style scoped>

</style>
