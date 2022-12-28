import React from "react";
import "./signUp.scss";
import { Link } from "react-router-dom";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

function SignUp() {
  return (
    <div className="signup">
      <div className="signup-card">
        <div className="signup-card-left">
          <h1>Sign Up</h1>
          <form>
            <input type="text" placeholder="Username" autoFocus required />
            <input type="text" placeholder="Email" autoFocus required />
            <input type="password" placeholder="Password" autoFocus required />
            <input type="text" placeholder="Name" autoFocus required />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="signup-card-right">
          <h1>
            Infinity{" "}
            <AllInclusiveIcon style={{ height: "30px", width: "30px" }} />
          </h1>
          <p>Connect With The World</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
