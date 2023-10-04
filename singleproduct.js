$(document).ready(function () {
    let urlParam = window.location.search;
    let id = new URLSearchParams(urlParam).get('id')
    console.log(id)

    $.ajax({
        method: 'GET',
        url: `http://159.65.21.42:9000/product/${id}`,
        success: function (data) {
            console.log(data)
            let product = `
            <div class="pro-sec-1-box">
            <img style="border: 1px solid black;" src="http://159.65.21.42:9000${data.image}" alt="">
            <img src="http://159.65.21.42:9000${data.image}" alt="">
            <img src="http://159.65.21.42:9000${data.image}" alt="">
            <img src="http://159.65.21.42:9000${data.image}" alt="">
        </div>
        <div class="pro-sec-1-box2">
            <img src="http://159.65.21.42:9000${data.image}" alt="">
        </div>
        <div class="pro-sec-1-txt">
            <span>${data.name}</span>
            <p>${data.price}</p>
            <p id="small">or make 4 interest-free payments starting at $17.49 with <br> Afterpay <a href="#">more
                    info</a></p>
            <div class="pro-review">
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <p>(No reviews yet) |</p>
                <a href="#">Add Your review</a>
            </div>
            <div class="pro-size">
                <p>SIZE:</p>
                <select name="size" id="">Size
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X Large">X Large</option>
                    <option value="2X Large">2X Large</option>
                </select><br>
                <label for="">Q T Y:</label>
                <br>
                <input type="number" value="1">
                <br>
                <a href="cart.html"id="add_cart_btn"><button>ADD TO BAG</button></a>
                <hr>
            </div>
            <header>FIND YOUR SIZE</header>
            <p id="smal">If your measurements are between those listed in the size chart, pick the next larger size.</p>
            <u>Size Chart</u>
            <hr>
            <div class="favourite">
                <i style="padding-left: 10px;" class="fa fa-heart-o" aria-hidden="true"></i>
                <p>Add to Favourites</p>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <i class="fa fa-pinterest-p" aria-hidden="true"></i>
            </div>
            <hr>
            <div class="details">
                <p>DETAILS</p>
                <i class="fa fa-plus" aria-hidden="true"></i>
            </div>
            <hr>
        </div>

            `
            $('.pro-sec-1').append(product)

            let localStorageData = localStorage.getItem('productCart');
            let myArr = []
            if (localStorageData) {
                myArr = JSON.parse(localStorageData)
                $('#cart_count').text(myArr.length);
            }

            let cartBtn = $('#add_cart_btn')
            cartBtn.click(function () {
                let localStorageData = localStorage.getItem('productCart');
                if (localStorageData) {
                    let MyLocalData = JSON.parse(localStorageData);
                    myArr = MyLocalData;
                    for (let i = 0; i < MyLocalData.length; i++) {
                        if (MyLocalData[i]._id == data._id) {
                            alert('Item Already in cart')
                            return;
                        }
                    }
                    data.qty = 1;
                    data.totalPrice = data.price;
                    myArr.push(data)
                    localStorage.setItem('productCart', JSON.stringify(myArr));
                    alert('Product Added to cart')
                    $('#cart_count').text(myArr.length);
                } else {
                    data.qty = 1;
                    data.totalPrice = data.price;
                    myArr.push(data)
                    localStorage.setItem('productCart', JSON.stringify(myArr))
                    alert('Product Added to cart')
                    $('#cart_count').text(myArr.length);
                }
            })
        },
        error: function (err) {
            console.log(err)
        }
    })

});


