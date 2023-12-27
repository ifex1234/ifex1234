import "../../styles/help.scss";
import image1 from "../../assets/image/help/cancel-order-1-dk.png";
import image2 from "../../assets/image/help/cancel-order-2-dk.png";
import image3 from "../../assets/image/help/cancel-order-3-dk.png";
import image4 from "../../assets/image/help/cancel-order-4-dk.png";
import image5 from "../../assets/image/help/cancel-order-5-dk.png";
import image6 from "../../assets/image/help/cancel-order-6-dk.png";
import image7 from "../../assets/image/help/cancel-order-8-dk.png";
const CancelOrder = () => {
  return (
    <div className="cancel-order">
      <h5>How to cancel an item or an order</h5>
      <p>
        You can cancel your order online before it is shipped. Once your order
        has been shipped, it cannot be canceled by you or our customer service
        agents. However, you can still refuse the delivery of the order when the
        delivery agent contact you.
      </p>
      <h5>To cancel an item</h5>
      <b> Step 1:</b> Log in to your Jumia account.
      <img width="100%" src={image1} alt="" /> <br /> <br />
      <b>Step 2:</b> Go to your <b style={{ color: "orange" }}>ORDERS</b> page{" "}
      <br />
      <br />
      <img width="100%" src={image2} alt="" /> <br /> <br />
      <b>Step 3:</b> Find the order that includes the item you want to cancel.{" "}
      <br />
      <br />
      <img width="100%" src={image3} alt="" /> <br /> <br />
      <b>Step 4:</b> Click on "See Details" for that order. <br />
      <br />
      <img width="100%" src={image4} alt="" /> <br /> <br />
      <b>Step 5:</b> Click the "Cancel Item" button and follow the prompts to
      complete the cancellation process. <br />
      <br />
      <img width="100%" src={image5} alt="" /> <br /> <br />
      <b>Step 6:</b> Select the quantity of the item and cancellation reason of
      your choice. <br />
      <br />
      <img width="100%" src={image6} alt="" /> <br /> <br />
      <img width="100%" src={image7} alt="" /> <br /> <br />
      <b>To cancel an order </b>
      <b>Step 1:</b> Log in to your Jumia account. <br /><br />
      <b>Step 2:</b> Go to your ORDERS page. <br /><br />
      <b>Step 3: </b>Find the order you want to cancel. <br /><br />
      <b>Step 4:</b> Click on "See Details" for that order. <br /><br />
      <b>Step 5: </b>Click the "Cancel Order" button and follow the steps to
      confirm the cancellation. <br /><br />
      <b>Step 6:</b> Select the quantity of the item and cancellation reason of
      your choice. <br /><br />
      <b>
        To cancel an order with multiple items, you can cancel them one by one.
      </b>
      If your order was prepaid, please note that the refund processing time may
      vary depending on the payment method:
      <li>
        If payment was made by card or bank transfer, your refund will be
        processed within 24 hours, and it may take 3–7 business days for the
        refund to reflect in your bank account.
      </li>
      <li>
        If payment was made using Jumia store credit, the refund will be
        credited to your Jumia account as store credit within 24 hours.{" "}
      </li>
      <li>
        If payment was made with a voucher, your voucher will be reactivated
        within 24 hours for use.
      </li>
      <br />
      Thank you for shopping with us.
    </div>
  );
};

export default CancelOrder;
