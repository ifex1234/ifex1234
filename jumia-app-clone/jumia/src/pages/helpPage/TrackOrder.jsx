import img1 from "../../assets/image/help/login.png";
import img2 from "../../assets/image/help/unnamed.png";
import img3 from "../../assets/image/help/unnamed2.png";
import img4 from "../../assets/image/help/unnamed4.png";
import '../../styles/help.scss'
const TrackOrder = () => {
  return (
    <div>
      <h3>How to track your order</h3>
      Tracking your order on Jumia is easy and simple. Here's how to do it:
      <b>Step 1:</b> Log in to your account <br /> <br />
      <img src={img1} alt="login image" /> <br /> <br />
      <b>Step 2:</b> Click on the <b style={{ color: "orange" }}>"ORDERS"</b>{" "}
      tab in your account dashboard. <br />
      <br />
      <img src={img2} alt="" /> <br />
      <br />
      <b>Step 3:</b> Find the order you want to track and click on "See
      Details". <br />
      <br />
      <img src={img3} alt="" /> <br />
      <br />
      Step 4: On the order details page, click on track my item to view the
      current status and a complete tracking history. <br />
      <br />
      <img src={img4} alt="" /> <br />
      <br />
      Alternatively, once your order is shipped, you can also track your order
      by using your <b>"package number" </b> provided in your shipping email. Simply
      enter the package number into Jumia's <b style={{color:"orange"}}>PACKAGE TRACKING PAGE</b> to view the
      latest updates on your package. <br /><br />
       Stay updated on the status of your Jumia
      order and enjoy a seamless shopping experience by following these simple
      steps. <br /><br />
      <b>Delivery timelines</b> Business days are <b>Monday - Friday </b>(In addition
      to <b>Saturday</b> for Jumia Express and standard shipping orders delivered to
      Lagos, Ibadan & Abeokuta)  <br /><br />
      The below delivery timelines are for orders
      placed <b>before 2pm.</b> Note that orders placed after 2pm are <b>+1 day added to
      the delivery timelines.</b> <br /><br />

      <div className="grid-container">
        <div>1-2 </div>
        <div>3-4</div>
        <div>1</div>
        <div>2</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>6</div>
        <div>7</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>

    </div>
  );
};

export default TrackOrder;
