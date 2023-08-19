var products = [
    {
        product_name: 'Apple Iphone 14 plus',
        product_image: "images/apple-iphone-14-plus.jpg",
        product_desc: 'Sed fugiat amet asperiores sunt voluptate est. Doloremque, veniam, consectetur sapiente inventore similique asperiores, commodi aspernatur aliquam nisi autem atque provident ducimus quasi eveniet facere itaque repellat non exercitationem ratione consequatur? Veritatis quo nam quae asperiores quam et natus provident magnam illum.',
        product_price: 800
    },
    {
        product_name: 'Apple Iphone 14 pro',
        product_image: "images/apple-iphone-14-pro-max.jpg",
        product_desc: 'Sed fugiat amet asperiores sunt voluptate est. Doloremque, veniam, consectetur sapiente inventore similique asperiores, commodi aspernatur aliquam nisi autem atque provident ducimus quasi eveniet facere itaque repellat non exercitationem ratione consequatur? Veritatis quo nam quae asperiores quam et natus provident magnam illum.',
        product_price: 1200
    },
    {
        product_name: 'Apple Iphone 14',
        product_image: "images/apple-iphone-14-pro-max.jpg",
        product_desc: 'Sed fugiat amet asperiores sunt voluptate est. Doloremque, veniam, consectetur sapiente inventore similique asperiores, commodi aspernatur aliquam nisi autem atque provident ducimus quasi eveniet facere itaque repellat non exercitationem ratione consequatur? Veritatis quo nam quae asperiores quam et natus provident magnam illum.',
        product_price: 600
    }
];
var display_product = '';
products.forEach(function (product) {
    display_product += "\n    <div class=\"my-items\">\n    <div class=\"product-name\">".concat(product.product_name, "</div>\n    <div class=\"product-image\">\n      <img src=").concat(product.product_image, " alt=\"\" />\n    </div>\n    <div class=\"product-desc\">").concat(product.product_desc, "</div>\n    <div class=\"product-price\">").concat(product.product_price, "</div>\n    <div class=\"aside\">\n      <div class=\"para\">Quantity: <span class=\"quantity\">0</span></div>\n    </div>\n    <div>\n      <button class=\"increase js-btn\">\n        <img src=\"images/add_FILL0_wght400_GRAD0_opsz48.png\" alt=\"\" />\n      </button>\n      <button class=\"decrease js-btn\">\n        <img src=\"images/delete_FILL0_wght400_GRAD0_opsz48.png\" alt=\"\" />\n      </button>\n      <button class=\"add-to-cart js-btn\">add to cart</button>\n    </div>\n  </div>\n  </div>\n    ");
});
