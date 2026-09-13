function orderFood(itemName,itemPrice){
const restaurantName = "House of Flavors;
let orderStatus = true;
let quantity = 1;
let total =itemPrice * quantity;
if(orderStatus){
    console.log("Order received: " + itemName);
    console.log("Total price: " + total + "EGP");
    alert(`Your order from ${restaurantName} :
-Item: ${itemName}
-Total Price: ${total} EGP
Your order has been received!`);
    }else{
    alert("Sorry,your order cannot be completed.");
    }
    }