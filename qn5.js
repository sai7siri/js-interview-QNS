// could you explain how the formatdate function works,especially regarding the methods like getDate(), getMonth(), getfullYear()
// toString() padStart(2,"0");

// function daily (date){
//    const day = date.getDate()
//    const month = (date.getMonth() +1).toString().padStart(2,"0");
//    const year = date.getFullYear();
//    return `${year}/${month}/${day}`
// }

// console.log(daily(new Date()))

// could you explain functionality of calculator function including with AudioDestinationNode, subtraction,multiplication ,division using switch case

// function calculator(operator, num1, num2) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//       break;
//     case "-":
//       return num1 - num2;
//       break;
//     case "**":
//       return num1 * num2;
//       break;
//     case "/":
//       return num1 / num2;
//       break;
//       deafult: return "invalid operator";
//   }
// }

// console.log(calculator("**", 3, 5));

// for (let i=0; i<=20; i++){
//   if ( i% 2 ===0){
//    console.log(i);
//   }

// }

// console.log(num(6));

 function isPrime(num){
   for(let i= 2; i<= num/2; i++){
      if(num %2 ===0){
         return false
      }
      
   }
   return true
 }

 console.log(isPrime(49));