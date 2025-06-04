var mouse = {
    name: "Mickey",
    sayHi: function () {
        console.log("Hi, my name is " + this.name);
    }
}

mouse.sayHi();//hi, name is:mickey - context ở đây là mouse hay this trong hàm sayHi là object mouse

//-------
var say = mouse.sayHi;
say();//hi, name is:undefined - ở đây context là global context nó có các giá trị khác nhau tùy vào môi trường, this.name ở đây ra undefined vì global context ko có key nào tên là name.

//-------
var talk = mouse.sayHi.bind(mouse);
talk(); //hi, name is:mickey - .bind(<value>), value chính là đại diện cho biến this ở trong hàm


var cat = {
    name: "tom"
}
var noi = mouse.sayHi.bind(cat);
noi();//hi, name is:tom

//=============
function run(callback) {
    console.log('run.....');
    callback();
}
run(mouse.sayHi);
//tương tự lệnh
run(function () {
    console.log("hi, name is:" + this.name);
});
//kết quả:
//run.....
//hi, name is:undefined
//----------
run(mouse.sayHi.bind(mouse));
//run.....
//hi, name is:mickey