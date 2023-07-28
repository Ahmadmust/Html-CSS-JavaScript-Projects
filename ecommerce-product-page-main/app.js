
var product_image1 = document.getElementById("p1");
var product_image2 = document.getElementById("p2");
var product_image3 = document.getElementById("p3");
var product_image4 = document.getElementById("p4");

var thumbnail1 = document.getElementById("t1");
var thumbnail2 = document.getElementById("t2");
var thumbnail3 = document.getElementById("t3");
var thumbnail4 = document.getElementById("t4");
var lightbox = document.getElementById("lightbox");
var close_lightbox = document.getElementById("close-lightbox");

close_lightbox.addEventListener("click",()=>{
    lightbox.classList.add("active");
})


product_image1.addEventListener("click",()=>{
 lightbox.classList.remove("active");
});
product_image2.addEventListener("click",()=>{
 lightbox.classList.remove("active");
});
product_image3.addEventListener("click",()=>{
 lightbox.classList.remove("active");
});
product_image4.addEventListener("click",()=>{
 lightbox.classList.remove("active");
});

//lightbox
var lproduct_image1 = document.getElementById("lp1");
var lproduct_image2 = document.getElementById("lp2");
var lproduct_image3 = document.getElementById("lp3");
var lproduct_image4 = document.getElementById("lp4");

var lthumbnail1 = document.getElementById("lt1");
var lthumbnail2 = document.getElementById("lt2");
var lthumbnail3 = document.getElementById("lt3");
var lthumbnail4 = document.getElementById("lt4");

thumbnail1.addEventListener("click",()=>{
    product_image1.classList.remove("active");
    product_image2.classList.add("active");
    product_image3.classList.add("active");
    product_image4.classList.add("active");
    console.log("clicked")
});
thumbnail2.addEventListener("click",()=>{
    product_image2.classList.remove("active");
    product_image1.classList.add("active");
    product_image3.classList.add("active");
    product_image4.classList.add("active");
});
thumbnail3.addEventListener("click",()=>{
    product_image3.classList.remove("active");
    product_image2.classList.add("active");
    product_image1.classList.add("active");
    product_image4.classList.add("active");
});
 thumbnail4.addEventListener("click",()=>{
    product_image4.classList.remove("active");
    product_image1.classList.add("active");
    product_image2.classList.add("active");
    product_image3.classList.add("active");
});

lthumbnail1.addEventListener("click",()=>{
    lproduct_image1.classList.remove("active");
    lproduct_image2.classList.add("active");
    lproduct_image3.classList.add("active");
    lproduct_image4.classList.add("active");
    
});
lthumbnail2.addEventListener("click",()=>{
    lproduct_image2.classList.remove("active");
    lproduct_image1.classList.add("active");
    lproduct_image3.classList.add("active");
    lproduct_image4.classList.add("active");
});
lthumbnail3.addEventListener("click",()=>{
    lproduct_image3.classList.remove("active");
    lproduct_image2.classList.add("active");
    lproduct_image1.classList.add("active");
    lproduct_image4.classList.add("active");
});
lthumbnail4.addEventListener("click",()=>{
    lproduct_image4.classList.remove("active");
    lproduct_image1.classList.add("active");
    lproduct_image2.classList.add("active");
    lproduct_image3.classList.add("active");
});

var currentImg = 1;
function nextImage() {
    if (currentImg == 4) {
      currentImg = 1;
    } else {
      currentImg++;
    }
    lp1.src = `./images/image-product-${currentImg}.jpg`;
  }
  function prevImage() {
    if (currentImg == 1) {
      currentImg = 4;
    } else {
      currentImg--;
    }
    lp1.src = `./images/image-product-${currentImg}.jpg`;
  }

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var order_quantity = document.getElementById("order-q");
var items=0;

plus.addEventListener("click",()=>{
    items++;
    order_quantity.innerHTML=items;
});
minus.addEventListener("click",()=>{
    items--;
    if(items<0){
        items=0;
    }
    order_quantity.innerHTML=items;
});
//cart open
var cart = document.getElementById("cart");
var cart_info = document.getElementById("cart-info");
var indicator = document.getElementById("indicator");

cart.addEventListener("click",()=>{
cart_info.classList.toggle("active");
});
//cart container
var addtocard = document.getElementById("addtocart");
var indicator = document.getElementById("indicator");
const wrp = document.querySelector(".cart-content");

addtocard.addEventListener("click",()=>{
indicator.classList.remove("active");
indicator.innerHTML=items;
if (items > 0) {
    const total = 125.00 * items;
wrp.classList.remove("empty");
wrp.innerHTML = `
<div class="cart-inside">
<div class="p-info">
<img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
<span class="price"> 
<p class="p-name">Fall Limited Edition Sneakers</p>
<p><span>$125.00</span> × <span class="number">${items}</span> <b class="total">$${total}</b></p>
 </span>
 <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
</div>

<button class="checkout-btn">Checkout</button>

</div>`
}
});

function deleteItem(){
    wrp.classList.add("empty");
    wrp.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
    items=0;
    order_quantity.innerHTML=items;
}


var mobile_nav = document.getElementById("mobile-nav-con");

function openMenu(){
    mobile_nav.classList.remove("active");
}
function closeMenu(){
    mobile_nav.classList.add("active");
}

var mp_image = document.getElementById("mp-image");

var mcurrentImg = 1;
function mnextImage() {
    if (mcurrentImg == 4) {
      mcurrentImg = 1;
    } else {
      mcurrentImg++;
    }
    mp_image.src = `./images/image-product-${mcurrentImg}.jpg`;
  }
  function mprevImage() {
    if (currentImg == 1) {
      mcurrentImg = 4;
    } else {
      mcurrentImg--;
    }
    mp_image.src = `./images/image-product-${mcurrentImg}.jpg`;
  }

  var mcart = document.getElementById("mcart");
 var m_cartinfo = document.getElementById("mcart-info");

  mcart.addEventListener("click",()=>{
    m_cartinfo.classList.toggle("active");
  });

  var mindicator = document.getElementById("mindicator");
 var maddtocard = document.getElementById("maddtocart");
 const mwrp = document.querySelector(".mcart-content");

  maddtocard.addEventListener("click",()=>{
    mindicator.classList.remove("active");
    mindicator.innerHTML=items;
    if (items > 0) {
        const total = 125.00 * items;
    mwrp.classList.remove("empty");
    mwrp.innerHTML = `
    <div class="cart-inside">
    <div class="p-info">
    <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
    <span class="price"> 
    <p class="p-name">Fall Limited Edition Sneakers</p>
    <p><span>$125.00</span> × <span class="number">${items}</span> <b class="total">$${total}</b></p>
     </span>
     <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
    </div>
    
    <button class="checkout-btn">Checkout</button>
    
    </div>`
    }
    });