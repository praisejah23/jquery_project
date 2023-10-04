$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://159.65.21.42:9000/products',
        success: function (products) {
            for (let i = 0; i < products.length; i++) {
                if (products[i].category == "Ladies Wear") {
                    let card = `
                <div class="sum-sec1-box">
                <a href="product.html?id=${products[i]._id}"> <img src="http://159.65.21.42:9000${products[i].image}" alt="product"></a>  
                    <h2>${products[i].name}</h2>
                    <h5>${products[i].category}</h5>
                    <h4>$${products[i].price}</h4>
                    <p>${products[i].description}</p>
                   </div>
                `
                    $('.sum-sub-sec1').append(card);
                }

            }
        },
        error: function (err) {
            console.log(err);
        }
    });
});
