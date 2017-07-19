new Vue({
    el:'#app',
    data:{
      todos:[
          {isSelected:true,title:'晚上回家睡觉'},
          {isSelected:true,title:'晚上看电视'},
          {isSelected:true,title:'晚上洗澡'}
      ],
      todo:{
            isSelected:false,
            title:""
      }
    },
    computed:{
        count:{
            get(){
                //计算数组里 有多少个没勾选的
                return this.todos.filter(item=>!item.isSelected).length
            }
        }
    },
    methods:{
        remove(g){ //g代表当前要删除掉这一项，去数组里过滤掉
            //返回true表示 放到新数组中，返回的是最终的新数组 要覆盖掉老数组
            this.todos=this.todos.filter(item=>item!==g);
        },
        addOne(){
            this.todos.unshift(this.todo);
            //赋予一个新对象，放置每次放入的对象都是同一个
            this.todo = {isSelected:false,title:''}
        }
    },

});