function let_var() {
  //     for(var i=0; i<3; i++){
  //         console.log(i);
  //     }
  //     console.log(i);

  //     for(let j=0; j<3; j++){
  //         console.log(j);
  //     }
  //    // console.log(j);

  //     var name = "shyam"
  //     name = "sam"
  //     console.log(name)

  //     let names = "Hoisted"
  //     names = "Hoisting"
  //     console.log(names)

  // console.log(33);
  // console.log(3+3);
  // console.log("3" + "3");
  // console.log("3" +3);
  // console.log(3 +"3");

  // let array1 =[2,4,6,8,9]
  // let array2 = [...array1]

  // console.log(array2);

  // square(array2);

  // function square([...array]){

  //     for(let i=0; i<array.length; i++){
  //         array[i] =array[i]*array[i];
  //     }
  //     console.log(array);

  // }
  // console.log(array2);

  // arrow fuction

  let numbers = [1, 2, 4, 5, 6, 7];
  numbers.forEach(function (n, i) {
    console.log(n + " " + i);
  });

  numbers.forEach((n, i) => console.log(n + " " + i));

  //filter function -----> returns array(predicate(boolean)==if true returns array)

  let nums = [1, 2, 3, 4, 56, 6, 7, 8, 9];
  const evenumbers = nums.filter((n) => n % 2 == 0);
  const oddnumbers = nums.filter((n) => n % 2 !== 0);
  console.log(evenumbers);
  console.log(oddnumbers);

  let names = ["james", "smith", "john", "adam", "clara"];
  const filtername = names.filter((name) => name.startsWith("j"));
  console.log(filtername);

  //Map function  mostly used instead of for Loop

  let squareNums = nums.map((n) => n * n);
  console.log(squareNums);

  let Capitalise = names.map((name) => name.toUpperCase());
  console.log(Capitalise);

  //find --->returns single value
  let findA = names.find((name) => name.includes("a"));
  console.log(findA);

  //reduce -----> reducing a array to single number
  //nums = [1,2,3,4,56,6,7,8,9]

  const sumAll = nums.reduce((sum, num) => sum + num, 0);
  console.log(sumAll);

  const productAll = nums.reduce((product, num) => product * num, 1);
  console.log(productAll);

  //reduceRight reduce from right to left
  const diffAll = nums.reduce((diff, num) => diff - num);
  console.log(diffAll);

  //shift and unshift
  console.log(nums);
  nums.unshift(200); //adds elements to the front of the array

  console.log(nums);
  nums.shift(); //removing  front  element of the array
  console.log(nums);

  //splice (startIndex, deleteCount, ....items)
  let values = [10, 20, 30, 40, 50];
  console.log(values);

  values.splice(2, 1, 80, 90, 100); //select from index (2), deletecount(1), then adds 80,90,100
  console.log(values);

  //slice returns subbarray within particular index (2,5)

  //Objects
  let products = [
    {
      title: "New Product",
      price: 10,
      description: "A description",
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"],
    },
    {
      title: "New Product",
      price: 20,
      description: "A description",
      categoryId: 2,
      images: ["https://placeimg.com/640/480/any"],
    },
    {
      title: "New Product",
      price: 30,
      description: "A description",
      categoryId: 3,
      images: ["https://placeimg.com/640/480/any"],
    },
    {
      title: "New Product",
      price: 40,
      description: "A description",
      categoryId: 4,
      images: ["https://placeimg.com/640/480/any"],
    },
  ];
  products.map((p) =>
    console.log(`${p.title}  ${p.categoryId}  ${p.description}  ${p.price}`)
  );

  let products1 = [
    { id: 1, title: "soap", price: 100, quantity: 20 },
    { id: 2, title: "brush", price: 30, quantity: 25 },
    { id: 3, title: "paste", price: 50, quantity: 15 },
    { id: 4, title: "scruber", price: 80, quantity: 10 },
  ];

  function priceAndQuantityCalculator() {
    return products1.reduce((total, p) => total + p.quantity * p.price, 0);
  }
  console.log(priceAndQuantityCalculator());

  function displayProducts() {
    let totalPrice = 0;
    products1.forEach((p) => {
      console.log(
        `${p.id} ${p.title} ${p.price} ${p.quantity} total = ${
          p.price * p.quantity
        }`
      );
      totalPrice = totalPrice + p.price * p.quantity;
    });
    console.log(`Total Price is ${totalPrice}`);
  }
  displayProducts();

  //Search titles using filter
  //Type 1

  function searchByTitles(searchStr) {
    return products.filter((p) => p.title.includes(searchStr));
  }
  // console.log(searchByTitles("p"));

  //Type 2

  const title = products.filter((p) => p.title.includes("e"));
  // console.log(title);

  //type 3

  const searchByTitle = (searchStr) => {
    return products.filter((p) => p.title.includes(searchStr));
  };
  // console.table(searchByTitle("p"))

  //return single product by using id

  function findProduct(id) {
    return products.find((n) => n.id === id);
  }

  console.log(findProduct(2));

  const searchById = (id) => {
    return products.find((p) => p.id === id);
  };
  console.log(searchById(3));

  let products2 = [
    {
      id: 1,
      title: "pencil",
      price: 25,
      quantity: 20,
    },
    {
      id: 2,
      title: "pen",
      price: 50,
      quantity: 10,
    },
    {
      id: 3,
      title: "scale",
      price: 15,
      quantity: 8,
    },
    {
      id: 4,
      title: "Eraser",
      price: 10,
      quantity: 10,
    },
    {
      id: 5,
      title: "sharpner",
      price: 10,
      quantity: 10,
    },
  ];

  console.log("Sorting Based on Title");
  function sortingBasedOnTitle(p) {
    return p.sort((p1, p2) => p1.title.localeCompare(p2.title));
  }

  console.log(sortingBasedOnTitle(products2));

  console.log("Sorting Based on Quantity");
  const sortingBasedOnQuantity = (p) => {
    return p.sort((p1, p2) => p1.quantity - p2.quantity);
  };

  console.log(sortingBasedOnQuantity(products2));

  console.log("Sorting Based on Price");
  const sortingBasedOnPrice = products2.sort((p1, p2) => p1.price - p2.price);
  console.log(sortingBasedOnPrice);

  // to create table for a Entity and its Objects dynamically

  const print = (obj) => console.log(obj);

  let product3 = { title: "laptop", price: 40000 };
  let user = { name: "shyam", email: "shyam@gmail.com", password: "123" };
  let employee = { name: "john", salary: 10000, department: "IT" };
  let address={ 'city':'chennai', 'state':'TamilNadu'}

  print(product3);
  print(user);
  print(employee);

  console.log(Object.keys(user));

  console.log(Object.values(user));

  console.log(Object.entries(user));

  console.log("__________________________");
  Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}    ${value}`);
  });

  console.log("__________________________");

  //OBJECT Destructing   retriving only necessary data

  const { name, email } = user; // user has name,email,password
  console.log(name, email);

  //assign by shallow operator
  let user_deatils = { ...user, ...address };

  console.log(user_deatils);

  const combinedObj = Object.assign({}, employee, address);
  console.log(combinedObj);

  //Object Frezee - Immutable property
  Object.freeze(employee)
  console.log(employee);
  delete employee.salary  
  console.log(employee);

  Object.seal() // can update the objects , but cannot add// remove objects

  user.gender = 'male';
  console.log(user)


}
let_var();
