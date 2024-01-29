class Person {
    constructor(name, age, gender) {
      (this._name = name), (this._age = age), (this._gender = gender);
    }
  
    get name() {
      return this._name;
    }
    get age() {
      return this._age;
    }
    get gender() {
      return this._gender;
    }
  
    set name(newName) {
      console.log("updating name!");
      this._name = newName;
    }
    set age(newAge) {
      this._age = newAge;
    }
    set gender(newGender) {
      this._gender = newGender;
    }
  
    welcome() {
      console.log(`Welcome ${this.name}`);
    }
  }
  
  let person1 = new Person("Gocool", 22, "M");
  person1.welcome();
  
  person1.name = "Krrish";
  person1.welcome();
  
  console.log(person1.name);