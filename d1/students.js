var students = ["mohamed","ahmed","Amira","Samir"];
console.log(students.length);
//initilization  boolean exp     increamenter
for(var i=0;  i<=students.length-1;  i++){
    console.log(students[i]);
}

console.log("==============================");

for(var i=students.length-1;  i>=0;  i--){
    console.log(students[i]);
}
console.log("==============================");
// for(i=1;i<=10;i++) console.log(i);

students[2] = "any";
students.pop();
students.shift();

for(var i=0;  i<=students.length-1;  i++){
    console.log(students[i]);
}