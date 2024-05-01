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
document.addEventListener('DOMContentLoaded', function() {
        const faqHeaders = document.querySelectorAll('.faq__header');

        faqHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            });
        });
    });
    function changeImage() {
        document.getElementById('originalImage').style.display = 'none';
        document.getElementById('hoverImage').style.display = 'block';
    }
    
    function restoreImage() {
        document.getElementById('originalImage').style.display = 'block';
        document.getElementById('hoverImage').style.display = 'none';
    }
    