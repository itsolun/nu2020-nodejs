function average(x,y){
    var avg = (x+y)/2;
    return avg;
}

console.log(average(2,3));

function factorial(n){
    var fact = 1;
    for(i=n;i>=1;i--){
        fact *= i; 
    }

    return fact;
}

//n! = n*n-1*n-2*...*1

console.log(factorial(5));
//output 120
//5*4*3*2*1

//fibonachi sequence
//0 + 1 + 1 + 2+ 3 + 5 + 8 

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  /*
  function(material){ 
    return material.length;
  }
  */
  console.log(materials.map(material => material.length+1 *2 /100));
  /*
  console.log(materials.map(function(material){ 
      x= material.length;
        x = x +1 *2 /100;
    return x;
  }));
  */
  // expected output: Array [8, 6, 7, 9]