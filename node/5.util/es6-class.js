class Person {
    constructor(name){
        this.name = name;
    }
    sleep(){
        console.log('睡觉');
    }
    static a(){ //通过类来调用
        console.log('a');
    }
}
class Girl extends Person {
    constructor(name,age){
        super(name);//super中的this默认指向Girl
        this.age = age
    }
}
let girl = new Girl(1,2);
console.log(girl.name);
console.log(girl.age);
Girl.a(); //子类可以调用父类的静态方法