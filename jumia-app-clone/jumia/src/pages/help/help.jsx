import "../../styles/help.scss";
import { ArrowForwardIos } from "@mui/icons-material";
import img1 from "../../assets/image/help/how-to-cancel-order-d.png";
import img2 from "../../assets/image/help/how-to-pay-for-order-d.png";
import img3 from "../../assets/image/help/how-to-place-order-d.png";
import img4 from "../../assets/image/help/how-to-request-return-d.png";
import img5 from "../../assets/image/help/how-to-track-order-d.png";
import { Outlet, NavLink } from "react-router-dom";
import { BsSearch, BsPerson } from "react-icons/bs";
import { BiSolidPlaneAlt, BiWallet } from "react-icons/bi";
import { FaTruck, FaUndo } from "react-icons/fa";
import Footer from "../../components/footer";

export const PayOrder = () => {
  return (
    <>
      <div className="help-container">
        <div className="header">
          <div>
            <p>Help Center</p>
            <h3>Hi, how can we help you?</h3>
          </div>
        </div>
        <div className="nav-items">
          <div>
            <span>
              <NavLink to="placeOrder">Place an Order </NavLink>
            </span>
            <span>
              <img src={img3} alt="Place an Order" />
            </span>
          </div>
          <div>
            <span>
              <NavLink to="payOrder">Pay for Your Order </NavLink>
            </span>
            <span>
              <img src={img2} alt="Pay for Your Order" />
            </span>
          </div>
          <div>
            <span>
              <NavLink to="trackOrder">Track your Order </NavLink>
            </span>
            <span>
              <img src={img5} alt=" Track your Order" />
            </span>
          </div>
          <div>
            <span>
              <NavLink to="cancelOrder">Cancel an Order </NavLink>
            </span>
            <span>
              <img src={img1} alt="Cancel an Order" />
            </span>
          </div>
          <div className="d-flex border-0">
            <span>
              <NavLink to="createReturn">Create a Return </NavLink>
            </span>
            <span>
              <img src={img4} alt="Create a Return" />
            </span>
          </div>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Type keywords like 'return'" />
          <i>
            <BsSearch />
          </i>
        </div>
        <div className="help-main-content">

          <div className="main-content-1">
            <nav>
              <div className="link">
                <span>
                  <BiWallet />
                </span>
                <span>
                  <NavLink to="payments">Payments</NavLink>
                </span>
              </div>

              <span>
                {<ArrowForwardIos sx={{ width: "12px", color: "orange" }} />}
              </span>
            </nav>
            <nav>
              <span>
                <NavLink to="vouchers">Vouchers</NavLink>
              </span>
              <span>
                {<ArrowForwardIos sx={{ width: "12px", color: "orange" }} />}
              </span>
            </nav>
            <nav>
              <div className="link">
                <span>
                  <FaTruck />
                </span>
                <span>
                  <NavLink to="delivery">Delivery</NavLink>
                </span>
              </div>

              <span>
                {<ArrowForwardIos sx={{ width: "12px", color: "orange" }} />}
              </span>
            </nav>
            <nav>
              <div className="link">
                <span>
                  <FaUndo />
                </span>
                <span>
                  <NavLink to="returns">Returns & Refunds</NavLink>
                </span>
              </div>

              <span>
                {<ArrowForwardIos sx={{ width: "12px", color: "orange" }} />}
              </span>
            </nav>
            <nav>
              <span>
                <NavLink to="products">Products</NavLink>
              </span>
              <span>
                {<ArrowForwardIos sx={{ width: "12px", color: "orange" }} />}
              </span>
            </nav>
            <nav>
              <div className="link">
                <span>
                  <BsPerson fontSize="1.5rem" />
                </span>{" "}
                <span>
                  <NavLink to="Account">Account</NavLink>
                </span>
              </div>
              <span>
                {<ArrowForwardIos sx={{ width: "12px", color: "orange" }} />}
              </span>
            </nav>
            <nav>
              <span>
                <NavLink to="express">Jumia Express</NavLink>
              </span>
              <span>
                {<ArrowForwardIos sx={{ width: "12px", color: "orange" }} />}
              </span>
            </nav>
            <nav>
              <span>
                <NavLink to="sellJumia">Sell on Jumia</NavLink>
              </span>
              <span>
                {<ArrowForwardIos sx={{ width: "12px", color: "orange" }} />}
              </span>
            </nav>
            <nav>
              <div className="link">
                <span>
                  <BiSolidPlaneAlt />
                </span>
                <span>
                  <NavLink to="jumiaGlobal">Jumia Global</NavLink>
                </span>
              </div>

              <span>
                {<ArrowForwardIos sx={{ width: "12px", color: "orange" }} />}
              </span>
            </nav>
            <nav>
              <span>
                <NavLink to="station">Pick up Station</NavLink>
              </span>
              <span>
                {<ArrowForwardIos sx={{ width: "12px", color: "orange" }} />}
              </span>
            </nav>
          </div>

          <div className="main-content-2">
            <aside>
              <Outlet />
            </aside>
          </div>
        </div>
       
        <div className="main-content-3">
           <div> <h5>Talk to an agent</h5></div>
          <div className="main-content-3-content">
           
            <div>
              <div>icon</div>
              <div>
                <span>Live Chat</span>
                <span>
                  We are available Monday to Sunday, between 8am and 8pm
                </span>
              </div>
            </div>
            <div>
              <div>icon</div>
              <div>
                <span>Call</span>
                <span>
                  We are available Monday to Sunday, between 8am and 8pm
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};
