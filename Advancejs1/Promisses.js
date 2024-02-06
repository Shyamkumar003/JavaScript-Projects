let is_product_available = true;

function placeOrder() {
  return new Promise((resolve, reject) => {
    if (is_product_available) {
      resolve("Your order is placed");
    } else {
      reject("Order not available");
    }
  });
}

placeOrder().then((data) => console.log(data));

placeOrder().catch((error) => error);

//eg2

let luckyNumber;

function generateLuckyNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 1000);
      if (num % 2 == 0) {
        reject("Lucky number Cnnot be even");
      } else {
        resolve(num);
      }
    }, 1000);
  });
}
generateLuckyNum()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//PROMISSES ARE ASYNC BY DEFAULT

// TO RETURN PROMISES AS SYNC FUNCT WE USE ASYNC AND AWAIT

let today_friday = true;

function day() {
  return new Promise((resolve, reject) => {
    if (today_friday) {
      resolve("yeah it is");
    } else {
      reject("NAhh");
    }
  });
}

async function date() {
  console.log("Monday");
  console.log("Tuesday");
  try {
    let data = await day();
    console.log(data);
    console.log("payment");
  } catch {
    console.log(error);
  }
  console.log("wednesday");
  console.log("Thursday");
}

date();


//example4

//Fetch always returns promise objs

                         //eg 4.1 one type

// let response = fetch("https://fakestoreapi.com/products")

// response.then((res)=>{console.log(res.json)})
//         .catch(()=> console.log(error))
//         .finally(()=>console.log("finally"))
//         console.log("END");

                         //eg4.2 one type

  // async function fetchProducts(){
  //   let products;
  //   try{
  //   let response = await fetch("https://fakestoreapi.com/products");
  //   products = response.json();
  //   console.log(products);
  //   }catch{
  // console.log(error)
  //   }
  // }
  //     console.log(fetchProducts());