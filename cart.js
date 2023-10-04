$(document).ready(function () {
    let localStorageData = localStorage.getItem('productCart');
    let myArr = []
    if (localStorageData) {
        myArr = JSON.parse(localStorageData)
        $('#cart_count').text(myArr.length);
        for (let i = 0; i < myArr.length; i++) {
            let product = `
            <div class="cart-sec1-box">
            <div class="cart-sec1-box-child">
                <img src="http://159.65.21.42:9000${myArr[i].image}" alt="">
            </div>
            <div class="cart-sec1-box-child1">
                <head>Dainty Jewell's</head>
                <p style="color: #dfafa7; font-size: 16px;">BLUEBELL BOULEVARD DRESS FOR <br> GIRLS</p>
                <p style="font-size: 12px;">SIZE:</p>
                <p>small</p>
                <p style="color: #dfafa7;">Change</p>
                <P style="font-size: 13px;">GIFT WRAPPING:</P>
                <p style="color: #dfafa7;">Add</p>
            </div>
        </div>
        <div class="cart-sec1-box-txt">
            <h5>$${myArr[i].price}</h5>
            <button class="ginika">
                <h3 class="decreaseCartBtn"id=${myArr[i]._id}>-</h3>
                <p class="cartQty">${myArr[i].qty}</p>
                <h3 class="increaseCartBtn"id=${myArr[i]._id}>+</h3>
            </button>
            <h4>$${myArr[i].totalPrice}</h4>
        </div>
           
          `
            $('.cart-sec1').append(product)
            let cart = `
            <div class="cart-sec2">
    <hr>
    <div class="cart-sec2-box">
      <p>Subtotal</p>
      <p>$${myArr[i].totalPrice}</p>  
    </div>
    <hr>
    <div class="cart-sec2-box">
        <p>shiping</p>
       <u>Add info</u>
    </div>
    <hr>
    <div class="cart-sec2-box">
       <p>Coupon code</p> 
       <u>Add coupon</u>
    </div>
    <hr>
    <div class="cart-sec2-box">
        <p>Get certificate</p>
        <u>Get certificate</u>
    </div>
    <hr>
    <div class="cart-sec2-box">
        <p>Grand total</p>
        <p>$${myArr[i].totalPrice}</p>
    </div>
   
    <button>CHECKOUT</button>
</div>

            `
            $('.cart-sec2').append(cart)
        }

    }

    $('.increaseCartBtn').click(function () {
        let productId = $(this).attr('id');
        let cartQtyElement = $(this).siblings('.cartQty');
        let totalPriceElement = $(this).parent().siblings('h4');

        for (let i = 0; i < myArr.length; i++) {
            if (productId == myArr[i]._id) {
                myArr[i].qty += 1;
                myArr[i].totalPrice = myArr[i].price * myArr[i].qty;
                cartQtyElement.text(myArr[i].qty);
                totalPriceElement.html(`$${myArr[i].totalPrice}`);
            }
        }
    });

    $('.decreaseCartBtn').click(function () {
        let productId = $(this).attr('id');
        let cartQtyElement = $(this).siblings('.cartQty');
        let totalPriceElement = $(this).parent().siblings('h4');

        for (let i = 0; i < myArr.length; i++) {
            if (productId == myArr[i]._id) {
                if (myArr[i].qty > 1) {
                    myArr[i].qty -= 1;
                    myArr[i].totalPrice = myArr[i].price * myArr[i].qty;
                    cartQtyElement.text(myArr[i].qty);
                    totalPriceElement.html(`$${myArr[i].totalPrice}`);
                }
            }
        }
    });


});

// Another way of writing the increase and the decrease function 
    // let decreaseBtns = document.querySelectorAll('.decreaseCartBtn');
    // let increaseCartBtn = document.querySelectorAll('.increaseCartBtn');

    // for (let i = 0; i < increaseCartBtn.length; i++) {
    //     increaseCartBtn[i].onclick = function () {
    //         for (let a = 0; a < myArr.length; a++) {
    //             if (increaseCartBtn[i].id == myArr[a]._id) {
    //                 myArr[a].qty = myArr[a].qty += 1;
    //                 myArr[a].totalPrice = myArr[a].price * myArr[a].qty;
    //                 increaseCartBtn[i].previousElementSibling.innerText = myArr[a].qty;
    //                 increaseCartBtn[i].parentElement.nextElementSibling.querySelector('h4').innerHTML = `$${myArr[a].totalPrice}`;
    //                 // increaseCartBtn[i].parentElement.querySelector('h4').innerText = myArr[a].totalPrice
    //             }
    //         }
    //     }
    // }

    // for (let i = 0; i < decreaseBtns.length; i++) {
    //     decreaseBtns[i].onclick = function () {
    //         if (decreaseBtns[i].nextElementSibling.innerHTML > 1) {
    //             for (let a = 0; a < myArr.length; a++) {
    //                 if (decreaseBtns[i].id == myArr[a]._id) {
    //                     myArr[a].qty = myArr[a].qty -= 1;
    //                     myArr[a].totalPrice = myArr[a].price * myArr[a].qty;
    //                     decreaseBtns[i].nextElementSibling.innerText = myArr[a].qty;
    //                     decreaseBtns[i].parentElement.nextElementSibling.querySelector('h4').innerHTML = `$${myArr[a].totalPrice}`;
    //                     // decreaseBtns[i].parentElement.querySelector('h5').innerText = `$${myArr[a].totalPrice}`
    //                 }
    //             }
    //         }
    //     }
    // }