let array1 = [1,2,3,4,5];

let array2 = [1,2,6,7,8];

// const array = [array1.concat(array2)];

const array =[...array1,...array2];

const duplicate = Array.from (new Set(array));

console.log(duplicate);