
document.addEventListener('DOMContentLoaded', function() {
  const quantityInput = document.querySelector('.quantity-input');
  const minusButton = document.querySelector('.minus');
  const plusButton = document.querySelector('.plus');

  minusButton.addEventListener('click', function() {
    if (parseInt(quantityInput.value) > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.getElementById('addToCart');
    const buyNowButton = document.getElementById('buyNow');

    addToCartButton.addEventListener('click', function() {
      // Add your logic for adding to cart here
      console.log('Added to cart');
    });

    buyNowButton.addEventListener('click', function() {
      // Add your logic for buying now here
      console.log('Buy it Now');
    });
  });
  var text = document.querySelector(".section__description");
  var image = document.getElementById("toggleImage");
  
  image.addEventListener("click", function() {
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });

  plusButton.addEventListener('click', function() {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });
});document.addEventListener('DOMContentLoaded', function() {
  const faqCards = document.querySelectorAll('.faq__card');

  faqCards.forEach(card => {
    const header = card.querySelector('.faq__header');
    const content = card.querySelector('.faq__content');

    header.addEventListener('click', function() {
      card.classList.toggle('active');
    });
  });
});
