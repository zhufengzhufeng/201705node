function Person(name) {
    this.name = name;
}
Person.prototype.sleep = function () {
    console.log('睡觉');
};
Person.a = function () {
    console.log('a');
};
function Girl(name,age) {
    this.age = age;
    Person.call(this,name)
}