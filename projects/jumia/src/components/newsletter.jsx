import "../styles/newsletter.scss";
import StarsIcon from "@mui/icons-material/Stars";
import img1 from "../assets/image/JMIA-356fb835.png";
import img2 from "../assets/image/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import img3 from "../assets/image/google-play-badge-logo-svgrepo-com.svg";
import { Mail } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <div className="nl-container">
      <div className="nl-main">
        <div className="div1">
          <div>JUMIA</div>
          <div>
            <StarsIcon
              sx={{ width: "50px", height: "40px", pb: "2px", color: "orange" }}
            />
          </div>
        </div>
        <div className="div2">
          <div>
            <h5>NEW TO JUMIA?</h5>
            <p>
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
          </div>
          <div className="news">
            <input type="text" placeholder="Enter E-mail Address" />
            <i>{<Mail sx={{color:"gray"}}/>}</i>
            <button>MALE</button>
            <button>FEMALE</button>
          </div>
        </div>
        <div className="div3">
          <div className="download-logo">
            <div className="logo-image">
              <img width="40px" src={img1} alt="" />
            </div>
            <div >
              <p>DOWNLOAD JUMIA FREE APP</p>
              <p>Get access to exclusive offers!</p>
            </div>
          </div>
          <div>
            <img width="100px" src={img2} alt="" />
            <img width="100px" src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
