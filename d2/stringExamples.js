const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"

//split url
let url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split";
let segments = url.split("/");

console.log(segments[segments.length-1]);

segments.forEach(element => console.log(element));
