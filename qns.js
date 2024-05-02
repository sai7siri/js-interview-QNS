const employee = [
   { id: 1, name: "sai", department: "HR", salary: 6000 },

   { id: 2, name: "rajesh", department: "dsa", salary: 8000 },

   { id: 3, name: "gunda", department: "devops", salary: 10000 }
]

function call (id){
   return employee.filter(employee => employee.id === id);
};

// console.log(call(1));

function code(salary){
   return employee.reduce((total,employee)=> total+employee.salary,0)
}

// console.log(code());

const money = employee.reduce((total,employee)=>total+employee.salary,0);

console.log(money);

const avg = money /employee.length;

console.log(avg);