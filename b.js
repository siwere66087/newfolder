let openCartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
// open cart :mine

openCartIcon.addEventListener('click', ()=>{
cart.classList.add('active');
openCartIcon.classList.toggle('open');

})
// close cart
closeCart.addEventListener('click', ()=>{
 cart.classList.remove('active');
 closeCart.classList.toggle('close');
 
 });




// working js cart

if(document.readyState == "loading"){

document.addEventListener("DOMContentLoaded", ready);

}else{
 ready();
}


// // making js function 
function ready() {
 
 var deleteCartBtns = document.getElementsByClassName("delete-cart");
//  console.log(deleteCartBtns)

 for ( let i= 0; i < deleteCartBtns.length ; i++){
 var button = deleteCartBtns[i];
  button.addEventListener("click", deleteCartItem);
 }
// // quantity changes
var quantityInputs = document.getElementsByClassName("cart-quantity");
for (let i = 0; i < quantityInputs.length; i++){
var input = quantityInputs[i];
input.addEventListener("change", quantityChanged);

}
// // ADD TO CART
let addCart = document.getElementsByClassName("add-cart");
for (let i = 0; i < addCart.length; i++){
 var button = addCart[i];
 button.addEventListener("click", cartBtnClicked);    

}
// // buy button

document.getElementsByClassName("buy-btn")[0]
.addEventListener("click",buyBtnClicked);

}

// delete items from cart 
function deleteCartItem(event){
      let buttonClicked = event.target;
      buttonClicked.parentElement.remove();
      updateTotal();
      }


//  //quantity changes
function quantityChanged(event){
      var input = event.target;
      
     if (isNaN(input.value) || input.value <= 0){
     input.value =1;
     }
     updateTotal();
     }

// // add to cart 

function cartBtnClicked(event){
      var button = event.target;
      var shopProducts = button.parentElement;
      var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
      var price = shopProducts.getElementsByClassName("price")[0].innerText;
      var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
      
      // console.log( productImg,title,price);
      addProdToCart(title,price,productImg);
      updateTotal();
      }
      
      function addProdToCart(title,price,productImg){

            var cartShopBox = document.createElement("div");
            cartShopBox.classList.add("cart-box");
            var cartItems = document.getElementsByClassName("cart-content")[0];
           var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
            for (let i = 0; i < cartItemsNames.length; i++){
                 if (cartItemsNames[i].innerText == title) {
                       alert("product already exist in your cart");
           
                       return;   
                 }
           }
                     
           
                var cartContentBox =`
           
                       <img src="${productImg}" alt="" class="cart-img">
                       
                       <div class="detail-box">
                       
                       <div class="cart-product-title"> ${title}</div>
                       <div class="cart-price">${price}</div>
                       <input type="number" value="1" class="cart-quantity">
           
                       </div>
                       
                       <i class="fas fa-trash delete-cart" ></i>`;
           
                    cartShopBox.innerHTML = cartContentBox;
                       cartItems.append(cartShopBox);
                       cartShopBox.getElementsByClassName("delete-cart")[0]
                       .addEventListener("click", deleteCartItem);
           
                       cartShopBox.getElementsByClassName("cart-quantity")[0]
                       .addEventListener("change",quantityChanged);
                       
                      
           }

// buy btn function
function buyBtnClicked(){
      alert("your order is placed");
      var cartContent = document.getElementsByClassName("cart-content")[0];
      while(cartContent.hasChildNodes()){
            cartContent.removeChild(cartContent.firstChild);
      
      }
      updateTotal();
      }

      




// updte total

function updateTotal() { 
      
      var total = 0;
 var cartContent = document.getElementsByClassName("cart-content")[0];
var cartBoxes = cartContent.getElementsByClassName("cart-box");
for (let i = 0; i < cartBoxes.length; i++){
      
var cartBox = cartBoxes[i];
var priceElement = cartBox.getElementsByClassName("cart-price")[0];
var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];

var price = parseFloat(priceElement.innerText.replace("R" , " "));
var quantity = quantityElement.value;
 total= total + (price * quantity);
}
 // if price contains cents
 total = Math.round(total *100)/100;
 document.getElementsByClassName("total-price")[0].innerText= "R" + total;

}






// take here




  













// test 1: navbar works


// let hamMenuIcon = document.getElementById("ham-menu");
// let navBar = document.getElementById("nav-bar");
// let navLinks = navBar.querySelectorAll("li");


// hamMenuIcon.addEventListener("click", () => {
//   navBar.classList.toggle("active");
//   hamMenuIcon.classList.toggle("open");
// });
// navLinks.forEach((navLinks) => {
//   navLinks.addEventListener("click", () => {
//     navBar.classList.remove("active");
//     hamMenuIcon.classList.toggle("close");
//   });
// });
