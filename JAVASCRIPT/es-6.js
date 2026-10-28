let emps= [
  { id: 1, name: "Rahul", age: 25, salary: 30000 },
  { id: 2, name: "Priya", age: 28, salary: 45000 },
  { id: 3, name: "Arjun", age: 24, salary: 28000 },
  { id: 4, name: "Sneha", age: 30, salary: 50000 },
  { id: 5, name: "Kiran", age: 27, salary: 40000 }
];
// 1. create new arr with only emps names
// 2. give 5000 incre to all emps 
// 3. find id no. 4 age 
// 4. find sum of all emps sal
// 5. find age dif b.n id no 3 and 5
// 6. filter emps whose sal>=40000

// 3. find id no. 4 age
let newArr=emps.find((item)=>{
    if(item.id==4){
        return true;
    }
})
console.log(newArr.age);
