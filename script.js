// JavaScript code for dropdown functionality
document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        var dropbtn = dropdown.querySelector('.dropbtn');
        var dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function () {
            closeAllDropdowns();
            dropdownContent.classList.toggle('show');
        });

        window.addEventListener('click', function (event) {
            if (!dropdown.contains(event.target) && !event.target.matches('.dropbtn')) {
                dropdownContent.classList.remove('show');
            }
        });
    });

    function closeAllDropdowns() {
        dropdowns.forEach(function (dropdown) {
            var dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.classList.remove('show');
        });
    }
});

window.addEventListener('scroll', function () {
    var navBottom = document.querySelector('.nav-bottom');
    var banner = document.querySelector('.banner');
    var navWrap = document.querySelector('.nav-wrap');

    var bannerOffsetTop = banner.offsetTop;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= bannerOffsetTop) {
        navBottom.classList.add('fixed');
        navWrap.classList.add('show-hidden-items');
    } else {
        navBottom.classList.remove('fixed');
        navWrap.classList.remove('show-hidden-items');
    }
});




$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://159.65.21.42:9000/products',
        success: function (products) {
            for (let i = 0; i < products.length; i++) {
                if (products[i].category == "Mens Wear") {
                    let card = `
                <div class="sum-sec1-box">
                    <img src="http://159.65.21.42:9000${products[i].image}" alt="">
                    <p>${products[i].name}</p>
                    <h5>${products[i].category}</h5>
                    <p>${products[i].quantity}</p>
                    <p>${products[i].description}</p>
                    <div class="icons">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                     </div>
                    <p>$${products[i].price}</p>
                </div>
              `
                    $('.sum-sec1-box').append(card);
                }

            }
        },
        error: function (err) {
            console.log(err);
        }
    });
});