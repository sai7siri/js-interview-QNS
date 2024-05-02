

const employee = [
   {id:1, name: "sai" , department: "dsa", salary: 2000},
   {id:2, name: "rajesh" , department: "java", salary: 7000},
   {id:3, name: "sandeep" , department: "puthon", salary: 10000}

]

function show(department){
   return employee.find(employee=> employee.department===department);
}

// console.log(show("puthon"));

const totalS = employee.reduce((total,employee)=> total+employee.salary,0);

// console.log(totalS);

const avg = totalS/employee.length

// console.log(avg);


function totalDate(data){
   const day = data.getDate().toString().padStart(2,"0");
   const month = (data.getMonth() +1).toString().padStart(2,"0");
   const year = data.getFullYear()

   return `${day}/${year}/${month}`
}

// console.log(totalDate(new Date()));

// console.log(Date.now());


function calculator(operator,num1,num2){
   switch(operator){
      case "+" :
      return num1 + num2;
break;
      case "-" :
      return num1 - num2;
break;
      case "*" :
      return num1 * num2;
break;
      case "/" :
      return num1 / num2;
break;
      default : " operator undefined"
      
   }
}

// console.log(calculator("/",3,4));


function chechPrime(num){
   for(let i=2; i<=200; i++){
      if(num%2 ===0 || num%3===0 || num%7===0){
         return false;
      
      }else{
         return true;
      }
   } 
}

// console.log(chechPrime(71))

function factorialnum(num){
   if(num < 1){
      return 1
   }
   return num * factorialnum(num-1);
};

// console.log(factorial(3))

// console.log(factorialnum(10))


const words = `st peters engneering college`

const total = words.split(" ").map(word=>word.toUpperCase().charAt() +word.slice(1)).join(" ")

// console.log(total);

function printDiamond(height){
   for(let i=1; i<=height; i++){
      let row = "";
      for(let k=1; k<=height-i; k++){
         row = row + " ";
      }
      for(let j=1; j<=2*i-1; j++){
         row = row + "*"
      }
      // console.log(row);
   }
   for(let i=height-1; i>=1; i--){
      let row = "";
      for(let k=1; k<=height-i; k++){
         row = row + " ";
      }
      for(let j=1; j<=2*i-1; j++){
         row = row + "*"
      }
      // console.log(row);
   }
}

printDiamond(6)


console.log(NaN === NaN)