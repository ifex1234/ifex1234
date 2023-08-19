let products = [
  {
    product_name: "Iphone 14 plus",
    product_image: "images/apple-iphone-14-plus.jpg",
    product_desc:
      "Sed fugiat amet asperiores sunt voluptate est. Doloremque, veniam, consectetur sapiente inventore similique asperiores, commodi aspernatur aliquam nisi autem atque provident ducimus quasi eveniet facere itaque repellat non exercitationem ratione consequatur? Veritatis quo nam quae asperiores quam et natus provident magnam illum.",
    product_price: 800,
    product_id:111
  },
  {
    product_name: "Apple Iphone 14 pro",
    product_image: "images/apple-iphone-14-pro-max-.jpg",
    product_desc:
      "Sed fugiat amet asperiores sunt voluptate est. Doloremque, veniam, consectetur sapiente inventore similique asperiores, commodi aspernatur aliquam nisi autem atque provident ducimus quasi eveniet facere itaque repellat non exercitationem ratione consequatur? Veritatis quo nam quae asperiores quam et natus provident magnam illum.",
    product_price: 1200,
    product_id:222
  },
  {
    product_name: "Apple Iphone 14",
    product_image: "images/apple-iphone-14-pro-max-.jpg",
    product_desc:
      "Sed fugiat amet asperiores sunt voluptate est. Doloremque, veniam, consectetur sapiente inventore similique asperiores, commodi aspernatur aliquam nisi autem atque provident ducimus quasi eveniet facere itaque repellat non exercitationem ratione consequatur? Veritatis quo nam quae asperiores quam et natus provident magnam illum.",
    product_price: 600,
    product_id:333
  },
];

let display_product = "";
products.map((product) => {
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
      <button class="add-to-cart js-cart-btn" data-product-id = ${product.product_id}>add to cart</button>
    </div>
  </div>
  </div>
    `;
});

document.querySelector(".container-js").innerHTML = display_product;

// const btns = document.querySelectorAll('.js-btn');
// const display = document.querySelector('.quantity');
//  let value = 0;

// btns.forEach((btn) =>{

//     btn.addEventListener('click', ((e) =>{
//         console.log('hello')

//         let styles = e.currentTarget.classList;
//         if(styles.contains('increase')){
//             console.log(display)
//             value ++;
//             display.innerHTML=value;

//         }
//         else if(styles.contains('decrease')){
//             console.log('hello2')
//         }
//         else {
//             console.log('hello3')
//         }
//     }))
// })

const cart_btn = document.querySelectorAll(".js-cart-btn");
cart_btn.forEach((button) => {
  button.addEventListener("click", () => {
    const my_product_id = button.dataset.productId;
    let matching_items;

    cart.forEach((items) => {
      if (my_product_id === items.productId) {
        matching_items = items;
      }
    });
    if (matching_items) {
      matching_items.quantity += 1;
    } else {
      cart.push({
        productId: products.product_id,
        quantity: 1
      });
    }

    console.log(cart);
  });
});
