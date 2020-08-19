# nu2020-nodejs
Node JS Examples for Nile University 2020 backend track
Javascript cheat sheet
1-variables
var x =1;
let x =1;
const x = 1;

-arrays
let ar = [10,20,30,40,50,60,70];
let fruits = [“banana”,”Mango”,”Orange”];
console.log(fruits.length);
fruits.pop();//remove last element
.shift();//remove first element
.splice(pos,num);//remove middle elements

2-condition statements
If(x>0) {
//single line comment
}else if(x<-1){
//statement
}else{
//x ==0
//another stat.
}

3-operators
x++;
++x;
--x;
x--;


4-loop 
For(i=0;i<10;i=i+3;){
}
let x =10;
while( x>0){
console.log(x);
x--;
}


5-functions
function factorial(n){
    var fact = 1;
    for(i=n;i>=1;i--){
        fact *= i; 
    }

    return fact;
}
//n! = n*n-1*n-2*...*1

console.log(factorial(5));

 
6-string
let fname = “Mahmoud”;

string functions (string object methonds)
substr
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"

Trim
Replace

Search
match

Regular Expression
Email expression
https://digitalfortress.tech/tricks/top-15-commonly-used-regex/
Exp		
\n	New line 	
\r	New line (enter)	
.	Any character(single character)	
$		
^		
.*	Any character  repeated any time(can be no characters)	
.+ 	Any character repeated at least once	
()	Define variable by order (exp1)(exp2)…(expn)	$1 $2 $n
[0-9]	Single number matching	
[0-9]+	Sequence of numbers	
		
[a-z]	Single small alphabet	
[a-zA-Z0-9]	Specific set of characters	
.+@.+\.[a-z]+	Email expression	
(.+)@(.+)\.([a-z]+)
$1,$2,$3
 
Functions 

parseInt()
function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0; }
  return parsed * 100;
}

console.log(roughScale(' 0xF', 16));
// expected output: 1500

console.log(roughScale('1010', 2));
// expected output: 0
parseFloat()
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// expected output: 28.695307297889173

console.log(circumference('4.567abcdefgh'));
// expected output: 28.695307297889173

console.log(circumference('abcdefgh'));
// expected output: NaN
class
object
JSON
let jsonobj = {
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}

console.log(jsonobj.browsers.firefox.name);

let stringjson = JSON.stringify(jsonobj);
console.log(stringjson);

let newobj = JSON.parse(stringjson);
console.log(newobj.browsers.firefox.pref_url);

JSON functions
Methods
1.	JSON.parse()
2.	JSON.stringify()

