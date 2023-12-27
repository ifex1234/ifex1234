import "../styles/newsletter.scss";
import StarsIcon from "@mui/icons-material/Stars";

const Newsletter = () => {
  return (
    <div className="nl-container">
      <div className="nl-main">
        <div className="d-flex flex-row gap-1 fs-1">
          <div>JUMIA</div>
          <div><StarsIcon sx={{ width: "40px", height: "30px", pb: "2px", color: "orange" }} /></div>
        </div>
        <div>
          <div>
            <h5>NEW TO JUMIA?</h5>
            <p>
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
          </div>
          <div>
            <input type="text" placeholder="Enter E-mail Address"/>
            <button>MALE</button><button>FEMALE</button>
          </div>
        </div>
        <div>
          <div>
            <div></div> 
            <div>
              <h6>DOWNLOAD JUMIA FREE APP</h6>{" "}
              <p>Get access to exclusive offers!</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
