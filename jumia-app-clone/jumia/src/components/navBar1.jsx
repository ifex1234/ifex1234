import "../styles/navBar1.scss";
import StarsIcon from "@mui/icons-material/Stars";
import { NavLink } from "react-router-dom";

function NavBar1() {
  return ( 
    <>
      <div className=" Bar1_navigator-container bg-secondary-subtle ">
        <div className=" d-flex flex-direction-row col-5 Bar1_navigator1 justify-content-start align-items-center ">
          <div>
            <StarsIcon sx={{ width: "16px", pb: "2px", color: "orange" }} />
          </div>
          <div className="">
            <NavLink to="/" className="m-2 text-decoration-none"> 
              Sell on Jumia
            </NavLink> 
          </div>
        </div> 

        <div className="hstack flex-grow-1 d-flex flex-direction-row justify-content-start col-7 navBar1_navigator gap-3">
          <div className="nav">
            <div className="d-flex flex-direction-row ">
              <NavLink to="/" className="mx-1 text-decoration-none">
                JUMIA
              </NavLink>
            </div>
            <div>
              <StarsIcon sx={{ width: "16px", color: "orange", pb: "5px" }} />
            </div>
          </div> 

          <div className="nav">
            <div>
              <NavLink to="/" className="mx-1 text-decoration-none">
                FOOD
              </NavLink>
            </div>
            <div>
              <StarsIcon sx={{ width: "16px", color: "orange", pb: "5px" }} />
            </div>
          </div>

          <div className="nav">
            <div>
              <NavLink to="/" className="mx-1 text-decoration-none">
                PAY
              </NavLink>
            </div>
            <div>
              <StarsIcon sx={{ width: "16px", color: "orange", pb: "5px" }} />
            </div>
          </div>

          <div className="nav">
            <div>
              <NavLink
                to="/"
                className="mx-1 text-decoration-none link-opacity-75 fw-bolder link-info-hover link-dark "
              >
                LOGISTICS
              </NavLink>
            </div>
            <div>
              <StarsIcon sx={{ width: "16px", color: "orange", pb: "5px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar1;
