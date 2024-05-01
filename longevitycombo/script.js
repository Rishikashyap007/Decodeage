 type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
"itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://decodeage.com"
  },{
        "@type": "ListItem",
        "position": 2,
        "name": "LongeVit \u0026 ResVit Bundle",
        "item": "https://decodeage.com/products/longevitycombo"
      }]
}


 
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

      recentlyViewedProducts.delete(8099812147388); // Delete first to re-move the product
      recentlyViewedProducts.add(8099812147388);

      localStorage.setItem('theme:recently-viewed-products', JSON.stringify(Array.from(recentlyViewedProducts.values()).reverse()));
    } catch (e) {
      // Safari in private mode does not allow setting item, we silently fail
    }
  //  type="module"
  //   src="//decodeage.com/cdn/shop/t/21/assets/vendor.min.js?v=110209841862038618801699087058">
  // type="module" src="//decodeage.com/cdn/shop/t/21/assets/theme.js?v=70903301041650709011701690434">
  //  type="module"
  //   src="//decodeage.com/cdn/shop/t/21/assets/sections.js?v=70266274029645306391710344255">

  indow.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.start');

   id="apple-pay-shop-capabilities"
  type="application/json">{"shopId":60534456508,"countryCode":"IN","currencyCode":"INR","merchantCapabilities":["supports3DS"],"merchantId":"gid:\/\/shopify\/Shop\/60534456508","merchantName":"Decode Age","requiredBillingContactFields":["postalAddress","email","phone"],"requiredShippingContactFields":["postalAddress","email","phone"],"shippingType":"shipping","supportedNetworks":["visa","masterCard","amex"],"total":{"type":"pending","label":"Decode Age","amount":"1.00"},"shopifyPaymentsEnabled":false,"supportsSubscriptions":false}
 id="shopify-features"
  type="application/json">{"accessToken":"6122a740a6895012ebcbf6dd98b838ab","betas":["rich-media-storefront-analytics"],"domain":"decodeage.com","predictiveSearch":true,"shopId":60534456508,"smart_payment_buttons_url":"https:\/\/decodeage.com\/cdn\/shopifycloud\/payment-sheet\/assets\/latest\/spb.en.js","dynamic_checkout_cart_url":"https:\/\/decodeage.com\/cdn\/shopifycloud\/payment-sheet\/assets\/latest\/dynamic-checkout-cart.en.js","locale":"en","flg4ff40b22":false}
var Shopify = Shopify || {};
  Shopify.shop = "lifeelements-store.myshopify.com";
  Shopify.locale = "en";
  Shopify.currency = { "active": "INR", "rate": "1.0" };
  Shopify.country = "IN";
  Shopify.theme = { "name": "Decode Age 04-11-2023", "id": 132955668668, "theme_store_id": 1190, "role": "main" };
  Shopify.theme.handle = "null";
  Shopify.theme.style = { "id": null, "handle": null };
  Shopify.cdnHost = "decodeage.com/cdn";
  Shopify.routes = Shopify.routes || {};
  Shopify.routes.root = "/";
 type="module">!function (o) { (o.Shopify = o.Shopify || {}).modules = !0 }(window);
!function (o) { function n() { var o = []; function n() { o.push(Array.prototype.slice.apply(arguments)) } return n.q = o, n } var t = o.Shopify = o.Shopify || {}; t.loadFeatures = n(), t.autoloadFeatures = n() }(window);
(function () {
    function asyncLoad() {
      var urls = ["https:\/\/loox.io\/widget\/4yZQ_cqgrT\/loox.1685113206557.js?shop=lifeelements-store.myshopify.com", "https:\/\/iis.intercom.io\/widget.js?shop=lifeelements-store.myshopify.com", "https:\/\/app.simple-affiliate.com\/assets\/notification.js?shop=lifeelements-store.myshopify.com", "https:\/\/admin.revenuehunt.com\/embed.js?shop=lifeelements-store.myshopify.com"];
      for (var i = 0; i < urls.length; i++) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = urls[i];
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
    };
    if (window.attachEvent) {
      window.attachEvent('onload', asyncLoad);
    } else {
      window.addEventListener('load', asyncLoad, false);
    }
  })();

  // id="__st"> var __st = { "a": 60534456508, "offset": 19800, "reqid": "631f9ae7-c190-497c-9e84-3d8b5ac2b4ed-1712067838", "pageurl": "decodeage.com\/products\/longevitycombo", "u": "5e1d987478a6", "p": "product", "rtyp": "product", "rid": 8099812147388 };
window.ShopifyPaypalV4VisibilityTracking = true;
!function (o) { o.addEventListener("DOMContentLoaded", function () { window.Shopify = window.Shopify || {}, window.Shopify.recaptchaV3 = window.Shopify.recaptchaV3 || { siteKey: "6LeHG2ApAAAAAO4rPaDW-qVpPKPOBfjbCpzJB9ey" }; var t = ['form[action*="/contact"] input[name="form_type"][value="contact"]', 'form[action*="/comments"] input[name="form_type"][value="new_comment"]', 'form[action*="/account"] input[name="form_type"][value="customer_login"]', 'form[action*="/account"] input[name="form_type"][value="recover_customer_password"]', 'form[action*="/account"] input[name="form_type"][value="create_customer"]', 'form[action*="/contact"] input[name="form_type"][value="customer"]'].join(","); function n(e) { e = e.target; null == e || null != (e = function e(t, n) { if (null == t.parentElement) return null; if ("FORM" != t.parentElement.tagName) return e(t.parentElement, n); for (var o = t.parentElement.action, r = 0; r < n.length; r++)if (-1 !== o.indexOf(n[r])) return t.parentElement; return null }(e, ["/contact", "/comments", "/account"])) && null != e.querySelector(t) && ((e = o.createElement("script")).setAttribute("src", "https://cdn.shopify.com/shopifycloud/storefront-recaptcha-v3/v0.6/index.js"), o.body.appendChild(e), o.removeEventListener("focus", n, !0), o.removeEventListener("change", n, !0), o.removeEventListener("click", n, !0)) } o.addEventListener("click", n, !0), o.addEventListener("change", n, !0), o.addEventListener("focus", n, !0) }) }(document);




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

  recentlyViewedProducts.delete(8099812147388); // Delete first to re-move the product
  recentlyViewedProducts.add(8099812147388);

  localStorage.setItem('theme:recently-viewed-products', JSON.stringify(Array.from(recentlyViewedProducts.values()).reverse()));
} catch (e) {
  // Safari in private mode does not allow setting item, we silently fail
}


