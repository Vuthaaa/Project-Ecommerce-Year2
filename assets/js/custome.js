
let cartCount = 0;
let cartAmount = 900;
let total =0 ;
function cartcount() {
    cartCount += 1;
   // cartAmount * cartCount;

    document.getElementById("count_itms").innerHTML = cartCount;
    document.getElementById("Cart_Amout").innerHTML = "$" + total + 900


}



function btnAssu1click(myprice,btnId)
 {
   // let productionname = String(document.getElementById(productid).innerHTML);
    //let productdetails = String(document.getElementById(btnId).innerHTML);
    let button = document.getElementById(btnId)
    let myvalue = String(document.getElementById(btnId).innerHTML);
    console.log(myvalue)
    console.log(myprice)
    if (myvalue =="Order Now") {
        cartCount += 1;
        total = total + myprice;
        document.getElementById("count_itms").innerHTML = cartCount;
        document.getElementById("Cart_Amout").innerHTML = "$" + total
        document.getElementById(btnId).innerHTML ="Cart"
        button.style.backgroundColor="Green"
        
        console.log("Total: "+total)
        console.log("Myprice : "+myprice)
    } else if (myvalue =="Cart") {
        cartCount -= 1;
        total = total - myprice
        document.getElementById("count_itms").innerHTML = cartCount;
        document.getElementById("Cart_Amout").innerHTML = "$" +total
        document.getElementById(btnId).innerHTML = "Order Now"
        button.style.backgroundColor= "rgb(15, 171, 223)"
        
    }


}