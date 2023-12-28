import "../styles/form.scss";
import StarsIcon from "@mui/icons-material/Stars";
import { Email, Facebook } from "@mui/icons-material";

export const Form = () => {
  return (
    <div className="form-container">
      <div className="form-main">
        <span>
          {" "}
          <StarsIcon
            sx={{ width: "10vw", height: "10vh", pb: "2px", color: "orange" }}
          />
        </span>
        <h4>Welcome to Jumia</h4>
        <p>
          Type your e-mail or phone number to log in or create a Jumia account.
        </p>
        <form className="input-group" action="">

          <input
            type="search"
            placeholder="Email or Mobile Number*"
            className="form-control"
            aria-label="Username"
          />
          <i> {<Email/>}</i>
        </form>
        <div className="m-3">
          {/* <p>Enter the email or the phone number entered is not valid</p> */}
        </div>

        <button>Continue</button>
      </div>
      <div className="form-second">
        <button>Login in With Passkeys</button>
        <button className="d-flex justify-content-around align-items-center"> {<Facebook/>}Login in with Facebook</button>
        <p>
          For further support, you may visit the Help Center or contact our
          customer service team.
        </p>
        <div className="fs-4 fw-bold">
          JUMIA
          <StarsIcon
            sx={{ width: "5vw", height: "4vh", pb: "2px", color: "orange" }}
          />
        </div>
      </div>
    </div>
  );
};
