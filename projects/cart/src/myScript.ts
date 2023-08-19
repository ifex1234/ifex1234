let products = [
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

]
let display_product = ''
products.forEach((product) =>{
    display_product += `
    <div class="my-items">
    <div class="product-name">${product.product_name}</div>
    <div class="product-image">
      <img src=${product.product_image} alt="" />
    </div>
    <div class="product-desc">${product.product_desc}</div>
    <div class="product-price">${product.product_price}</div>
    <div class="aside">
      <div class="para">Quantity: <span class="quantity">0</span></div>
    </div>
    <div>
      <button class="increase js-btn">
        <img src="images/add_FILL0_wght400_GRAD0_opsz48.png" alt="" />
      </button>
      <button class="decrease js-btn">
        <img src="images/delete_FILL0_wght400_GRAD0_opsz48.png" alt="" />
      </button>
      <button class="add-to-cart js-btn">add to cart</button>
    </div>
  </div>
  </div>
    `
})
 const main = document.querySelector('.container-js');
 main.innerHTML = display_product;