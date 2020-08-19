const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

//remove space from start and end
console.log(greeting.trim());
// expected output: "Hello world!";


console.log(greeting.trimStart());
// expected output: "Hello world!";

console.log(greeting.trimEnd());
// expected output: "Hello world!";
