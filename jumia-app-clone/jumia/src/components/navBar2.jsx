import "../styles/navBar2.scss";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import StarsIcon from "@mui/icons-material/Stars";
import search from "../assets/image/search_FILL0_wght400_GRAD0_opsz48.png";
import { Button, Dropdown } from "react-bootstrap";
import { Menu } from "@mui/icons-material";

function NavBar2() {
  return (
    <>
      <div className="container-fluid bigg d-none d-lg-flex">
        <nav className="d-flex  navBar2_navigator ">
          <div className="d-flex align-items-center">
            <div>
              <Link to="/" className="fs-3 fw-bolder text-decoration-none">
                JUMIA{" "}
              </Link>
            </div>
            <div>
              <StarsIcon sx={{ width: "30px", pb: "2px" }} />
            </div>
          </div>

          <div className="navBar2_contents">
            <div style={{ position: "relative",  }}>
              <input
                type="text"
                placeholder="Search products, brands and category"
              />
              <i className="position-absolute top-0 start-0 p-2 mx-1" ><img src={search} width='25px' alt="search icon" /></i>
            </div>
            <div className="search">
              <button>SEARCH</button>
            </div>
            <div className="d-flex justify-contents-evenly">
              <div>
                <Dropdown variant="inherit">
                  <Dropdown.Toggle variant="inherit" id="dropdown-basic">
                    <PersonIcon /> Account
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="form">
                      <Button size="lg" variant="warning"  > 
                        
                        Sign in
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item href="form">My Account</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Orders</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Saved Items</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div>
                <Dropdown variant="inherit">
                  <Dropdown.Toggle variant="inherit" id="dropdown-basic">
                    <HelpIcon /> Help
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="help">Help Center</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      Place an order
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Payment option
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      Track an order
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      Cancel an order
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Returns & refunds
                    </Dropdown.Item>
                    <Dropdown.Item href="form">
                      <Button size="lg" variant="warning">
                      Sign in
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <span>
              <ShoppingCartIcon />
              Cart
            </span>
          </div>
        </nav>
      </div>

      {/* Navivigation bar for smaller displays */}

      <div className="m_navBar2_container ">
        <nav className="m_navBar2_navigator">
          <div className="d-flex flex-row" >
            <div className="mx-3"> 
              <Menu/>
            </div>
            <div>
              <Link to="/" className="fs-3 fw-bolder text-decoration-none">
                JUMIA{" "}
              </Link>
            </div>
            <div>
              <StarsIcon sx={{ width: "30px", pb: "2px" }} />
            </div>
          </div>

          <div>
            <span> <PersonIcon /></span>
            <span><ShoppingCartIcon /></span>
          </div>
        </nav>

        <div className="m_navBar2_input">
          <input
            type="text"
            placeholder="Search products, brands and category"
          />
        </div>
      </div>
    </>
  );
}

export default NavBar2;
