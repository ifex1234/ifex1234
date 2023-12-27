import "../styles/footer.scss";
import Newsletter from "./newsletter";
import { Facebook, Twitter, YouTube, Instagram, } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Newsletter />
      <div className="footer-container">
        <div className="footer-main">
          <div className="f-col">
            <div>
              <h5>NEED HELP?</h5>
              <p>
                <a href="">Chat with us</a> <br />
                <a href="">Help Center</a> <br />
                <a href="">Contact Us</a> <br />
              </p>
              <h5>USEFUL LINKS</h5>
              <p>
                <a href="">Service Center</a> <br />
                <a href="">How to shop on Jumia?</a> <br />
                <a href="">Delivery options and timelines</a> <br />
                <a href="">How to return a product on Jumia?</a> <br />
                <a href="">Corporate and bulk purchases</a> <br />
                <a href="">Report a Product</a> <br />
                <a href="">Ship your package anywhere in Nigeria</a> <br />
                <a href="">Dispute Resolution Policy</a> <br />
                <a href="">Returns & Refund Timeline</a> <br />
                <a href="">Return Policy</a> <br />
              </p>
            </div>
            <div>
              <h5>ABOUT JUMIA</h5>
              <p>
                <a href="">About us</a> <br />
                <a href="">Jumia careers</a> <br />
                <a href="">Jumia Express</a> <br />
                <a href="">Terms and Conditions</a> <br />
                <a href="">Privacy Notice</a> <br />
                <a href="">Jumia Store Credit Terms & Conditions</a> <br />
                <a href="">Jumia Payment Information Guidelines</a> <br />
                <a href="">Cookie Notice</a> <br />
                <a href="">Jumia Global</a> <br />
                <a href="">Official Stores</a> <br />
                <a href="">Flash Sales</a> <br />
                <a href="">Black Friday 2023</a>
              </p>{" "}
              <br />
            </div>
            <div>
              <h5>MAKE MONEY WITH JUMIA</h5>
              <p>
                <a href="">Sell on Jumia</a> <br />
                <a href="">Vendor hub</a> <br />
                <a href="">Become a Sales Consultant</a> <br />
                <a href="">Become a Logistics Service Partner</a> <br />
                <a href="">Join the Jumia DA Academy</a> <br />
                <a href="">Join the Jumia KOL Program</a> <br />
              </p>
            </div>
            <div className="d-flex flex-column">
              <div>
                <h5>JUMIA INTERNATIONAL</h5>
              </div>
              <div className="d-inline-flex flex-row">
                <div>
                  <p>
                    <a href="">Algeria</a> <br />
                    <a href="">Egypt</a> <br />
                    <a href="">Ghana</a> <br />
                    <a href="">Ivory Coast</a> <br />
                    <a href="">Kenya</a> <br />
                  </p>
                </div>
                <div>
                  <p>
                    <a href="">Morocco</a> <br />
                    <a href="">Senegal</a> <br />
                    <a href="">Tunisia</a> <br />
                    <a href="">Uganda</a> <br />
                    <a href="">Zando</a> <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div className="my-3 ">
              <h5>JOIN US ON</h5>
              <div className="my-3">
                <Facebook sx={{ mr: "10px" }} />
                <Twitter sx={{ mr: "10px" }} /> <YouTube sx={{ mr: "10px" }} />{" "}
                <Instagram sx={{ mr: "10px" }} />
              </div>
            </div>
            <div className="my-3 ">
              <h5>PAYMENT METHODS & DELIVERY PARTNERS</h5>
            </div>
            <div></div>
          </div>
          <div className=" border-top pt-2 d-flex flex-row justify-content-center">
            <div className="mx-4">PAY</div>
            <div>LOGISTICS</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
