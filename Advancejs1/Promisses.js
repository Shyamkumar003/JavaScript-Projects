let is_product_available = true;

function placeOrder(){
    return new Promise((resolve,reject)=>{
        if(is_product_available){
            resolve("Your order is placed");
        }
        else{
            reject("Order not available");
        }
    })
}

placeOrder().then((data)=>console.log(data));

placeOrder().catch((error)=>(error));

//eg2

let luckyNumber ;

function generateLuckyNum(){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
          let num =   (Math.floor(Math.random()*1000))
          if(num%2 == 0){
            reject ("Lucky number Cnnot be even");
          }
          else{
            resolve(num)
          }
        },1000)
        
    })
}
generateLuckyNum().then((data)=>{console.log(data);}).catch((error)=>{console.log(error);
})