function isPrime(){
   for(let i = 2; i<= num/2; i++){
      // console.log(i);
   }
}
function date(num){
   if(num<= 1){
      return false
   }
for(let i=2; i<= num/2; i++){
   
   }
   if(num%2===0){
      return false
   }
   return true
}


// console.log(date(45))

function factorial(n){
   if(n<= 1){
      return 1
   }
   return n* factorial(n-1);
}

console.log(factorial(4))