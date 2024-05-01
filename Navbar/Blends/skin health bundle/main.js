
document.documentElement.classList.replace('no-js', 'js');

// This allows to expose several variables to the global scope, to be used in scripts
window.themeVariables = {
    settings: {
        showPageTransition: true,
        headingApparition: "none",
        pageType: "product",
        moneyFormat: "₹{{amount}}",
        moneyWithCurrencyFormat: "\u003cspan class=money\u003e₹{{amount}} INR\u003c\/span\u003e",
        currencyCodeEnabled: true,
        cartType: "popover",
        showDiscount: true,
        discountMode: "percentage"
    },

    strings: {
        accessibilityClose: "Close",
        accessibilityNext: "Next",
        accessibilityPrevious: "Previous",
        addToCartButton: "Add to cart",
        soldOutButton: "Sold out",
        preOrderButton: "Pre-order",
        unavailableButton: "Unavailable",
        closeGallery: "Close gallery",
        zoomGallery: "Zoom",
        errorGallery: "Image cannot be loaded",
        soldOutBadge: "Sold out",
        discountBadge: "Save @@",
        sku: "SKU:",
        searchNoResults: "No results could be found.",
        addOrderNote: "Add order note",
        editOrderNote: "Edit order note",
        shippingEstimatorNoResults: "Sorry, we do not ship to your address.",
        shippingEstimatorOneResult: "There is one shipping rate for your address:",
        shippingEstimatorMultipleResults: "There are several shipping rates for your address:",
        shippingEstimatorError: "One or more error occurred while retrieving shipping rates:"
    },

    breakpoints: {
        'sm': 'screen and (min-width: 700px)',
        'md': 'screen and (min-width: 1000px)',
        'lg': 'screen and (min-width: 1150px)',
        'xl': 'screen and (min-width: 1400px)',

        'sm-max': 'screen and (max-width: 699px)',
        'md-max': 'screen and (max-width: 999px)',
        'lg-max': 'screen and (max-width: 1149px)',
        'xl-max': 'screen and (max-width: 1399px)'
    }
}; window.addEventListener('DOMContentLoaded', () => {
    const isReloaded = (window.performance.navigation && window.performance.navigation.type === 1) || window.performance.getEntriesByType('navigation').map((nav) => nav.type).includes('reload');

    if ('animate' in document.documentElement && window.matchMedia('(prefers-reduced-motion: no-preference)').matches && document.referrer.includes(location.host) && !isReloaded) {
        document.body.animate({ opacity: [0, 1] }, { duration: 115, fill: 'forwards' });
    }
});

window.addEventListener('pageshow', (event) => {
    document.body.classList.remove('page-transition');

    if (event.persisted) {
        document.body.animate({ opacity: [0, 1] }, { duration: 0, fill: 'forwards' });
    }
});// For detecting native share
document.documentElement.classList.add(`native-share--${navigator.share ? 'enabled' : 'disabled'}`);// We save the product ID in local storage to be eventually used for recently viewed section
try {
    const recentlyViewedProducts = new Set(JSON.parse(localStorage.getItem('theme:recently-viewed-products') || '[]'));

    recentlyViewedProducts.delete(8043385225404); // Delete first to re-move the product
    recentlyViewedProducts.add(8043385225404);

    localStorage.setItem('theme:recently-viewed-products', JSON.stringify(Array.from(recentlyViewedProducts.values()).reverse()));
} catch (e) {
    // Safari in private mode does not allow setting item, we silently fail
}
window._cowlendarConfig = {
    "shop_id": "60534456508",
    "shop_url": "lifeelements-store.myshopify.com",
    "shop_locale": "en"
};
var COW_SHOP_URL = "lifeelements-store.myshopify.com";






$(".rating-component .star").on("mouseover", function () {
    var onStar = parseInt($(this).data("value"), 10); //
    $(this).parent().children("i.star").each(function (e) {
      if (e < onStar) {
        $(this).addClass("hover");
      } else {
        $(this).removeClass("hover");
      }
    });
  }).on("mouseout", function () {
    $(this).parent().children("i.star").each(function (e) {
      $(this).removeClass("hover");
    });
  });
  
  $(".rating-component .stars-box .star").on("click", function () {
    var onStar = parseInt($(this).data("value"), 10);
    var stars = $(this).parent().children("i.star");
    var ratingMessage = $(this).data("message");
  
    var msg = "";
    if (onStar > 1) {
      msg = onStar;
    } else {
      msg = onStar;
    }
    $('.rating-component .starrate .ratevalue').val(msg);
    
  
   
    $(".fa-smile-wink").show();
    
    $(".button-box .done").show();
  
    if (onStar === 5) {
      $(".button-box .done").removeAttr("disabled");
    } else {
      $(".button-box .done").attr("disabled", "true");
    }
  
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }
  
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }
  
    $(".status-msg .rating_msg").val(ratingMessage);
    $(".status-msg").html(ratingMessage);
    $("[data-tag-set]").hide();
    $("[data-tag-set=" + onStar + "]").show();
  });
  
  $(".feedback-tags  ").on("click", function () {
    var choosedTagsLength = $(this).parent("div.tags-box").find("input").length;
    choosedTagsLength = choosedTagsLength + 1;
  
    if ($(this).hasClass("choosed")) {
      $(this).removeClass("choosed");
      choosedTagsLength = choosedTagsLength - 2;
    } else {
      $(this).addClass("choosed");
      $(".button-box .done").removeAttr("disabled");
    }
  
    console.log(choosedTagsLength);
  
    if (choosedTagsLength <= 0) {
      $(".button-box .done").attr("enabled", "false");
    }
  });
  
  
  
  $(".compliment-container .fa-smile-wink").on("click", function () {
    $(this).fadeOut("slow", function () {
      $(".list-of-compliment").fadeIn();
    });
  });
  
  
  
  $(".done").on("click", function () {
    $(".rating-component").hide();
    $(".feedback-tags").hide();
    $(".button-box").hide();
    $(".submited-box").show();
    $(".submited-box .loader").show();
  
    setTimeout(function () {
      $(".submited-box .loader").hide();
      $(".submited-box .success-message").show();
    }, 1500);
  });
  

  function starsReducer(state, action) {
    switch (action.type) {
      case 'HOVER_STAR': {
        return {
          starsHover: action.value,
          starsSet: state.starsSet
        }
      }
      case 'CLICK_STAR': {
        return {
          starsHover: state.starsHover,
          starsSet: action.value
        }
      }
        break;
      default:
        return state
    }
  }

  var StarContainer = document.getElementById('rating');
  var StarComponents = StarContainer.children;

  var state = {
    starsHover: 0,
    starsSet: 4
  }

  function render(value) {
    for(var i = 0; i < StarComponents.length; i++) {
      StarComponents[i].style.fill = i < value ? '#f39c12' : '#808080'
    }
  }

  for (var i=0; i < StarComponents.length; i++) {
    StarComponents[i].addEventListener('mouseenter', function() {
      state = starsReducer(state, {
        type: 'HOVER_STAR',
        value: this.id
      })
      render(state.starsHover);
    })

    StarComponents[i].addEventListener('click', function() {
      state = starsReducer(state, {
        type: 'CLICK_STAR',
        value: this.id
      })
      render(state.starsHover);
    })
  }

  StarContainer.addEventListener('mouseleave', function() {
    render(state.starsSet);
  })

  var review = document.getElementById('review');
  var remaining = document.getElementById('remaining');
  review.addEventListener('input', function(e) {
    review.value = (e.target.value.slice(0,999));
    remaining.innerHTML = (999-e.target.value.length);
  })

  var form = document.getElementById("review-form")

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let post = {
      stars: state.starsSet,
      review: form['review'].value,
      name: form['name'].value,
      city: form['city'].value,
      email: form['email'].value
    }

    console.log(post)
  })

  document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('submitForm').click();
  })

  var reviews = {
    reviews: [
      {
        stars: 3,
        name: 'bob',
        city: 'Noosk',
        review: '1 Thompson Greenspon is so grateful to have worked with CPASiteSolutions on our'
      },{
        stars: 4,
        name: 'bobbo',
        city: 'WinNoosk',
        review: '2 Thompson Greenspon is so grateful to have worked with CPASiteSolutions on our'
      },{
        stars: 2,
        name: 'bobster',
        city: 'NooSKI',
        review: '3 Thompson Greenspon is so grateful to have worked with CPASiteSolutions on our'
      },
    ]
  }

  function ReviewStarContainer(stars) {
    var div = document.createElement('div');
    div.className = "stars-container";
    for (var i = 0; i < 5; i++) {
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute('viewBox',"0 12.705 512 486.59");
      svg.setAttribute('x',"0px");
      svg.setAttribute('y',"0px");
      svg.setAttribute('xml:space',"preserve");
      svg.setAttribute('class',"star");
      var svgNS = svg.namespaceURI;
      var star = document.createElementNS(svgNS,'polygon');
      star.setAttribute('points', '256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566');
      star.setAttribute('fill', i < stars ? '#f39c12' : '#808080');
      svg.appendChild(star);
      div.appendChild(svg);
    }
    return div;
  }

  function ReviewContentContainer(name, city, review) {

    var reviewee = document.createElement('div');
    reviewee.className = "reviewee footer";
    reviewee.innerHTML  = '- ' + name + ', ' + city

    var comment = document.createElement('p');
    comment.innerHTML = review;

    var div = document.createElement('div');
    div.className = "review-content";
    div.appendChild(comment);
    div.appendChild(reviewee);

    return div;
  }

  function ReviewsContainer(review) {
    var div = document.createElement('blockquote');
    div.className = "review";
    div.appendChild(ReviewStarContainer(review.stars));
    div.appendChild(ReviewContentContainer(review.name,review.city,review.review));
    return div;
  }

  for(var i = 0; i < reviews.reviews.length; i++) {
    document.getElementById('review-container').appendChild(ReviewsContainer(reviews.reviews[i]))
  }