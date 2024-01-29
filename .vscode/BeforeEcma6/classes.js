class Person {
    constructor(name, age, gender) {
      (this.name = name), (this.age = age), (this.gender = gender);
    }
    welcome() {
      console.log("Welcome " + this.name);
    }
  }
  class Student extends Person {
    constructor(name, age, gender, grade) {
      super(name, age, gender);
      this.grade = grade;
    }
    displayGrade() {
      console.log("Grade is " + this.grade);
    }
  }
  let person1 = new Person("Gocool", 22, "M");
  person1.welcome();
  
  let person2 = new Student("Krish", 22, "M", "S");
  person2.displayGrade();