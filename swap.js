var a = 8;
var b = 9;

console.log("before swap:a=",a,"b=", b);

var x = 5;
var y = 8;
x= x+y;
y= x-y;
x= x-y;
console.log("after swap:x=",x,"y=", y);

var p = 5;
var q = 8;

[p, q] = [q, p];
console.log("after swap:p=",p,"q=",q );