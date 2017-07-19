let vm = new Vue({
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
      },
      location:'complete'
    },
    computed:{
        count:{
            get(){
                //计算数组里 有多少个没勾选的
                return this.todos.filter(item=>!item.isSelected).length
            }
        },
        newTodos(){
            //根据todos计算出全部 未完成 已完成
            if(this.location === 'complete'){
                return this.todos
            }else if(this.location === 'finish'){
                return this.todos.filter(item=>item.isSelected)
            }else{
                return this.todos.filter(item=>!item.isSelected)
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
//spa 单页开发，不跳转页面
//路由： 不同的路径，显示不同的内容，浏览器路径发生变化就会产生历史管理
//hash 锚点   开发时一般用 hash
//h5 自带的api方法 没有 # 号，但是需要服务端支持，在开发时使用如果刷新页面会导致404 history.pushState

//监听hash值的变化
//window.location
let listener = function () {vm.location = window.location.hash.slice(1)};
window.addEventListener('hashchange',listener);