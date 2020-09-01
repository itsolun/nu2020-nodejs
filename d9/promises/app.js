///promises & callbacks
// https://www.tutorialspoint.com/es6/es6_promises.htm

function add_positivenos_async(n1, n2) {
   console.log("begin promise");
    let p = new Promise(function (resolve, reject) {
        
       if (n1 >= 0 && n2 >= 0) {
          //do some complex time consuming work
         resolve("promise::"+(n1 + n2))
       }
       else
          reject('promise::NOT_Postive_Number_Passed') 
       })
       return p;
 }

 add_positivenos_async(10, 20)
    .then(successHandler) // if promise resolved
    .catch(errorHandler);// if promise rejected

 add_positivenos_async(-10, -20)
    .then(successHandler) // if promise resolved
    .catch(errorHandler);// if promise rejected

 function errorHandler(err) {
    console.log('Handling error', err)
 }
 function successHandler(result) {
    console.log('Handling success', result)
 }

 console.log('end')


//  function add_positivenos_async(n1, n2) {
//     let p = new Promise(function (resolve, reject) {
//        if (n1 >= 0 && n2 >= 0) {
//           //do some complex time consuming work
//           resolve(n1 + n2)
//        }
//        else
//           reject('NOT_Postive_Number_Passed')
//     })

//     return p;
//  }
 //Promise.all(iterable)

Promise.all([add_positivenos_async(10,20),add_positivenos_async(30,40),add_positivenos_async(50,60)])
 .then(function(resolveValue){
    console.log(resolveValue[0])
    console.log(resolveValue[1])
    console.log(resolveValue[2])
    console.log('all add operations done')
 })
 .catch(function(err){
    console.log('Error',err)
 })
 console.log('end')


 //=====================callbacks=======================
 //Ex.2
 //3 callbacks inside each other
 
 function add_positivenos_callback(n1, n2,callback,params) {
   console.log("callback");
       if (n1 >= 0 && n2 >= 0) {
          //do some complex time consuming work
          var result = (n1 + n2);
          successHandler(result) ;
       }
       else{
        var err = 'NOT_Postive_Number_Passed';
        errorHandler(err) ;
       }
       callback(...params);

    
 }

 add_positivenos_callback(10,20,add_positivenos_callback,[5,10,()=>{},[]]);//single itiration
 
 add_positivenos_callback(10,20,add_positivenos_callback,
    [5,10,add_positivenos_callback,
        [20,30,add_positivenos_callback,
            [-5,-10,()=>{},[]]]]);//single itiration


//EXample 3 callbacks
setTimeout(function() {   
   console.log("one");   
   setTimeout(function() {   
      console.log("two");   
      setTimeout(function() {   
         console.log("three");   
      }, 1000);   
   }, 1000);   
}, 1000); 

//setTimeout(callback,time)