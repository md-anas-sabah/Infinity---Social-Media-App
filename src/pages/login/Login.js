import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>
            Infinity{" "}
            <AllInclusiveIcon style={{ height: "30px", width: "30px" }} />
          </h1>
          <p>Connect With The World</p>
          <span>Don't you have an account?</span>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" autoFocus required />
            <input type="password" placeholder="Password" autoFocus required />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
