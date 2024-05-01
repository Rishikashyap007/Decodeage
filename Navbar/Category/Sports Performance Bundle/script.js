document.addEventListener('DOMContentLoaded', function() {
        const quantityInput = document.querySelector('.quantity-input');
        const minusButton = document.querySelector('.minus');
        const plusButton = document.querySelector('.plus');
        const addToCartButton = document.getElementById('addToCart');
        const buyNowButton = document.getElementById('buyNow');

        minusButton.addEventListener('click', function() {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });

        plusButton.addEventListener('click', function() {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });

        addToCartButton.addEventListener('click', function() {
            // Add logic for adding to cart
            console.log('Added to cart');
        });

        buyNowButton.addEventListener('click', function() {
            // Add logic for buying now
            console.log('Buy it Now');
        });
    });


    document.querySelector('.toggle-heading').addEventListener('click', function() {
        const content = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');
        if (content.style.display === "none") {
            content.style.display = "block";
            arrow.style.transform = "rotate(180deg)";
        } else {
            content.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
        }
    });
    