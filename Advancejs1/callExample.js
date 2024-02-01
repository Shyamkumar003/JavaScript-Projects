let person1 ={
    name:"shyam",
    age:23,
    sayHello: function(){
        console.log(`${this.name} - ${this.age}`)
    }
}
let person2={
    name : "sunil",
    age: 34
}

person1.sayHello();

person1.sayHello.call(person2)


//global function 
// function sayhello(){
//     console.log(`${this.name} - ${this.age}`);
// }
// sayhello.call(person2);


//Example 2  //CALL FUNCTION 

 function calculateSalary(deduction,bonus){
    this.salary = (this.salary - deduction) + bonus;
}

function displaySalary(){
    console.log(`${this.name} - ${this.salary}`)
}

let emp1={
    name :"sam",
    age : 22,
    salary: 10000
}
let emp2={
    name :"Darrel",
    age : 22,
    salary: 20000
}
 
displaySalary.call(emp1); //------> displaysalary is global function 
calculateSalary.call(emp1, 100,200);
displaySalary.call(emp1);

calculateSalary.call(emp2, 100,200);
displaySalary.call(emp2);

//APPLY()

displaySalary.apply(emp1); //------> displaysalary is global function 
calculateSalary.apply(emp1, [100,200]);
displaySalary.apply(emp1);

//Bind 
let bindDisplay = displaySalary.bind(emp1);
bindDisplay(); //---> works as displaySalary() to print Emp details  

let bindcalculate = calculateSalary.bind(emp1);
bindcalculate(300, 500);
bindDisplay();