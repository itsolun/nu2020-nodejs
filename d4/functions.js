//not arrow function 
function notarrow(x,y){
    return x*y;
}
let x = 2;
let y = 5;
console.log(notarrow(x,y));

//arrow function
//when to use
//when using a small callback function inline
let half = param => param/2;
console.log(half(10));

let z = ((x,y) => {return x*y;});
console.log(z(5,2));






