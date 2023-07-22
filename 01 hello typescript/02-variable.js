var myName = "arvind";
//if i try to change the data type of myName, it will throw me an error
myName = 7;
/**
 * Type 'number' is not assignable to type 'string'
  let myName: string
 */
//typescript is smart, so i dont have explicitly mention the type
var thisRepo = "hello typescript";
thisRepo = true;
// Type 'boolean' is not assignable to type 'string'.ts(2322)
// let thisRepo: string
console.log(thisRepo);
