import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const formFields = [
    {
      id: 1,
      type: "email",
      name: "Email",
    },
    {
      id: 2,
      type: "password",
      name: "Password",
    }
  ];
  return (
    <div className="signup-container">
      <div className="form-container p-2">
        <div className="text-white">
          <span className="fs-3" style={{color:"yellow"}}>Login</span>
          <p style={{ fontSize: "15px" }}>
            Welcome back to Tourno Soccer ! Sign in to your account and dive into excited tournaments.
          </p>
        </div>

        <div className="row text-white w-100 mx-auto">
          <div className="col-md-5 d-flex align-items-center">
             <img src="https://img.freepik.com/free-photo/athlete-playing-sport-with-hand-drawn-doodles_23-2150036337.jpg?size=626&ext=jpg&ga=GA1.1.1502020834.1705726197&semt=ais" alt="" className="img-fluid rounded" />
          </div>
          <div className="col-md-7 mt-2 mt-md-0">
            <form action="" className="my-2">
              {formFields.map((data) => (
                <div className="form-group" key={data.id}>
                  <label htmlFor={data.name}>{data.name}</label> <br />
                  <input type={data.type} 
                  id={data.name}
                  name={data.name}
                  placeholder={data.name} 
                  required
                  />
                </div>
              ))}

            <a href="" className="text-decoration-none mt-3">Forgot password ? </a>

              <button type="submit" className="submit-btn">Login</button>
            </form>

            <p>Don't have an account yet? <Link to="/signup" >Signup </Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
