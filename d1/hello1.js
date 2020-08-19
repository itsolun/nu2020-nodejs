/*
Author: mahmoud seoudi
version: v1.0.0
url: http://itsolun.com
*/

console.log("hello world");

var x=1;
console.log("x = "+x);

var y = x++;
// var y=x; //y=1,x=1
// x=x+1; //x=2

console.log("x = "+x+", y = "+y);

var y = ++x;
// x=x+1; //x=3
// y=x; //y=3,x=3
console.log("x = " + x + ", y = "+y);

//string
console.log(x+""+y);

//number
console.log(x+y);

console.log("=================================");
x*=2;
//x=x*2;
console.log(x);

x/=2;
//x=x/2;
console.log(x);

x+=2;
//x=x+2;
console.log(x);

x-=2;
//x=x-2;
console.log(x);