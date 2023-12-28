import "../../styles/help.scss";
import img1 from "../../assets/image/help/place-order-1-dk.png";
import img2 from "../../assets/image/help/place-order-2-dk.png";
import img3 from "../../assets/image/help/place-order-2-5-dk.png";
import img4 from "../../assets/image/help/place-order-3-dk.png";
import img5 from "../../assets/image/help/place-order-4-dk.png";
import img6 from "../../assets/image/help/place-order-5-dk.png";
import img7 from "../../assets/image/help/place-order-5-5-dk.png";

const PlaceOrder = () => {
  return (
    <div >
      <h4>How to place an order</h4>
      <div className="place-order">
        Place an order in a few simple steps: <br />
        <br />
        <b>Step 1: Browse and choose your product</b>
        <li>
          Browse the JUMIA WEBSITE or use the search bar to find the product you
          want to order.
        </li>
        <li>Click on the product to view more information and details.</li>
        <img src={img1} alt="place order 1" />
      </div>
      <div className="place-order">
        <b>Step 2: Add your product to your cart.</b>
        <li>
          Review the product content and Click on the “Add to Cart” button{" "}
        </li>
        <li>
          Select the desired quantity of the product in your cart and proceed to
          checkout.
        </li>
        <img width="100%" src={img2} alt="place order 2" />
        <img width="100%" src={img3} alt="lace order 3" />
      </div>
      <div className="place-order">
        <b>Step 3: Complete the checkout</b>
        <li>
          Fill in your delivery address and choose your preferred delivery
          method.
        </li>
        <li>
          Review your order information and click on the “Confirm Delivery
          Details” button.
        </li>
        <img width="100%" src={img4} alt="lace order 4" />
      </div>
      <div>
        <b> Step 4: Select your payment method and pay for your order</b>
        <li>Select your preferred payment method</li>
        <li>
          Click on &quot" Confirm Payment Method"  and complete the payment process.
        </li>
        <img width="100%" src={img5} alt="lace order 5" />
      </div>
      <div>
        <b>Step 5: Review your order summary </b>
        <li>
          Check all order details,quantity, amount and click on " Confirm
          Order".
        </li>
        <img width="100%" src={img6} alt="lace order 6" />
      </div>
      <div>
        <b>Note</b>
        <li>
          Once your order is placed, a unique order number is generated, which
          can be used to track your order.
        </li>
        <img width="100%" src={img7} alt="lace order 6" />
      </div>
      <span>
        <b>Note:</b>To ensure a smooth order process please make sure to provide
        accurate and complete delivery information and choose a payment method
        that is available in your location. We hope this guide has been helpful. <br /><br />
        Happy shopping
      </span>
    </div>
  );
};

export default PlaceOrder;
