function orderFood(){
const restaurantName = "Delicious Restaurant";
let orderStatus = true;
let price = 200;
let quantity = 1;
let total = price * quantity;
if(orderStatus){
    console.log("Order received");
    console.log("Total price: "+ total);
return "Your order from " + restaurantName +" has been received!";
}else{
    return"Sorry,your order cannot be completed.";
}
}
console.log(orderFood()); 