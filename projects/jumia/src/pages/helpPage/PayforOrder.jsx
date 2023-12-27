import "../../styles/help.scss";
import img1 from "../../assets/image/help/Pay_one.png";
import img2 from "../../assets/image/help/Pay_two.png";
import img3 from "../../assets/image/help/Pay_three.png";
import img4 from "../../assets/image/help/Pay_four.png";

const PayforOrder = () => {
  return (
    <div>
      <h4>How to pay for your order</h4>
      <br />
      <div className="place-order">
        Jumia offers multiple payment options. Pay for the item on delivery by
        using your card, bank transfer, or USSD via our JumiaPay secure
        platform. You can also pay for your order using a voucher. <br /> <br />
        <li>
          <b>Option 1: Pay On Delivery </b> You can pay for your orders upon
          delivery in a variety of ways to accommodate your needs. Choose to pay
          in cash, or opt for a credit/debit card, bank transfer, or Mastercard
          payment.
        </li>{" "}
        <br />
        <li>
          <b>Option 2: JumiaPay</b> You can securely pay for your order on Jumia
          using Mastercard, Visa, or Verve cards, as well as bank transfer, or
          card payment.
        </li>{" "}
        <br />
        <li>
          <b>Option 3: Vouchers</b> You can pay for your orders using a voucher
          code.{" "}
        </li>{" "}
        <br />
        Choose the payment option that works best for you for a hassle-free
        shopping experience. <br /> <br />
        <h5>
          <b>Paying for Your Jumia Order - A Step by Step</b>
        </h5>
        <p>
          <b>Guide Step 1: Place your order </b>
        </p>
        <li>
          Browse the JUMIA WEBSITE and select the items you'd like to purchase.
        </li>
        <li>Add the items to your cart and proceed to checkout.</li>
        <li>Review your order details and make any necessary changes.</li>
        <img src={img1} alt="" /> <br /> <br />
        <b>Step 2: Choose your payment method </b> <br />
        <li>
          Select your preferred payment method from the options available:{" "}
        </li>
        <p>
          <b>-Online Payment:</b> Pay using your credit/debit card, or online
          banking and proceed to click on "Confirm Payment Method".
        </p>
        <p>
          <b>- Pay on Delivery: </b>Choose to pay in cash or with a credit/debit
          card, bank transfer, or Mastercard when your order is delivered to
          you.
        </p>
        <b>- Voucher Code:</b> Apply a voucher code for payment. <br />
        <img src={img2} alt="" /> <br />
        <br />
        <h5>
          <b>Step 3: Complete your payment </b>
        </h5>
        Follow the instructions provided for your chosen payment method to
        complete the payment process
        <li>
          If you've chosen online payment, you'll be redirected to a secure
          payment page where you can select your payment method and proceed to
          click on "Pay Now".
        </li>
        <br /> - Proceed to pay using the generated account details and confirm
        your payment. <br /> <br />
        <img src={img3} alt="" /> <img src={img4} alt="" /> <br />
        <li>For payment
        upon delivery, including cash on delivery, credit/debit card payment,
        and bank transfer, simply wait for your order to be delivered and choose
        your preferred payment method.</li>  <br /> 
        <li>To pay with a voucher code for your
        order, follow the steps below:</li>
        <p>- Add items to your cart and proceed to
        the "Checkout Page."</p>
        <p>- Enter your voucher code in the " Voucher" field
        under the "Payment Method" section.</p>
        <p> - Apply the voucher by clicking "Add
        Voucher."</p>
           
        <h5><b>Step 4: Confirm your payment</b></h5> 
        <p>Once your payment is complete,
        you will receive an order confirmation email. </p><br /> • If you've chosen online
        payment, the payment confirmation page will also display your payment
        details. If you experience any issues with payment, please don't
        hesitate to reach out to our customer support team. We are here to help
        you and make sure that your Jumia shopping experience is as smooth as
        possible. <br /><br />
        <p>We hope this guide has been helpful. Happy shopping!</p> 
      </div>
    </div>
  );
};

export default PayforOrder;
