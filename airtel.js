// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};
//  console.log(obj['a']['b']['c']);
const findPath = (object, path) => {
    const pathArray = path.split('.');
    let updatedObj = object;
    for(let val of pathArray){
        if(updatedObj.hasOwnProperty(val)){
            updatedObj= updatedObj[val];
            console.log(val,updatedObj );
        } else {
            return 'undefined';
            break;
        }
    }
    // pathArray.forEach((val,index)=> {
        
    // })
    return updatedObj;
};

console.log(findPath(obj, 'a.c'));
// const Routes = [
//     {
//         path:"**", Component:PageNotFound
//     }
//     ]
// RouterModule.forRoot(Routes)
// RouterModule.forChild({})

// {
    
    
// }

//JIT
//
//AOT

// ngDoCheck 

 
//  for(let key in object){
//          if(key === val && typeof(object[key]) ==='Object' ){
//              const remainingPath =pathArray.slice(index).join('.');
//              findPath(object[key],remainingPath)
//          }
//         }


const inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];
/* output [1, 2, 3, 4, 5, 6, 7, 8, 9]; */

function flattenArray(inputArr){

// map 

//

//filter


//reduce

 return inputArr.reduce((acc, CurrentValue)=> {
 
 if(Array.isArray(CurrentValue)){
  return acc.concat(flattenArray(CurrentValue))
 
 } else {
  return acc.concat(CurrentValue);
 }
 },[]);
}
console.log(flattenArray(inputArray));


