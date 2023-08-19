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
  let {product_name, product_image, product_desc, product_price, product_id} = product
  display_product += `
    <div class="my-items">
    <div class="product-name">${product_name}</div>
    <div class="product-image">
      <img src=${product_image} alt="" />
    </div>
    <div class="product-desc">${product_desc}</div>
    <div class="product-price">${product_price}</div>
    <div class="aside">
      <div class="para">Quantity: <span class="quantity">0</span></div>
    </div>
    <div>
      <button class="increase" onclick="increase(${product_id})">
        <img src="images/add_FILL0_wght400_GRAD0_opsz48.png" alt="" />
      </button>
      <button class="decrease btn-decrease" onclick="decrease(${product_id})">
        <img src="images/delete_FILL0_wght400_GRAD0_opsz48.png" alt="" />
      </button>
      <button class="add-to-cart " onclick= "cart_btn(${product_id})" >add to cart</button>
    </div>
  </div>
  </div>
    `;
});

document.querySelector(".container-js").innerHTML = display_product;
const showQuantity = document.querySelector('quantity');
let amount = 0;
function increase(product_id){
  console.log(product_id);
  
}
function decrease(product_id){
  console.log(product_id);
  
}

let cart_btn = (product_id)=>{
  let select = product_id;
  let search = cart.find((x)=> x.product_id === select.product_id);
  if (search === undefined){
    cart.push({
      id: product_id,
      item:1
    });
  }
  else{
    search.item +=1;
    
  }
  console.log(cart);
  console.log(select);
  console.log(search)
}
