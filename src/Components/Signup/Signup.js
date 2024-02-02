import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
  });
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validForm = async () => {
    let errorObject = {};
    if (formData.name === "") {
      errorObject.name = "Username is required";
    }

    if (formData.email === "") {
      errorObject.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errorObject.email = "Invalid email address";
    }

    if (formData.password === "") {
      errorObject.password = "Password is required";
    } else if (formData.password.length < 8) {
      errorObject.password = "Password must be atleast 8 character";
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(formData.password)) {
      errorObject.password = "Must contain alphabets and number";
    }

    if (formData.city === "") {
      errorObject.city = "City is required";
    }

    setFormError(errorObject);

    return Object.keys(errorObject).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await validForm();
      if (res) {
        console.log("no error");
      } 
    } catch (err) {
      console.log(err.message);
      console.log("something wrong");
    }
  };

  const formFields = [
    {
      id: 1,
      type: "text",
      name: "name",
    },
    {
      id: 2,
      type: "text",
      name: "email",
    },
    {
      id: 3,
      type: "password",
      name: "password",
    },
    {
      id: 4,
      type: "text",
      name: "city",
    },
  ];
  return (
    <div className="signup-container">
      <div className="form-box">
        <div className="row text-white w-100 mx-auto">
          <div className="col-md-5">
            <div className="text-white">
              <span className="fs-3" style={{ color: "yellow" }}>
                Sign Up
              </span>
              <p style={{ fontSize: "15px" }} className="m-0">
                Welcome to Tourno Soccer !
              </p>
              <p style={{ fontSize: "15px" }} className="m-0">
                let's start your journey by signup your account !
              </p>
            </div>
            <div className="img-container">
              <img
                src="https://img.freepik.com/free-photo/female-soccer-football-player-posing-confident-with-ball-isolated-white_155003-42941.jpg?size=626&ext=jpg&ga=GA1.1.1599986355.1706854500&semt=ais"
                alt=""
                className="w-100 rounded"
              />
              <p className="my-2">
                Already have an account? <Link to="/login">Login </Link>
              </p>
            </div>
          </div>
          <div className="col-md-7 mt-5 ">
            <div className="w-100">
              <form action="" className="my-auto" onSubmit={handleSubmit}>
                {formFields.map((data) => (
                  <div className="form-group" key={data.id}>
                    <label
                      htmlFor={data.name}
                      className="text-transform-capitalize"
                    >
                      {data.name}
                    </label>{" "}
                    <br />
                    <input
                      type={data.type}
                      id={data.name}
                      name={data.name}
                      placeholder={data.name}
                      onChange={handleChange}
                    />
                    {formError[data.name] && (
                      <p className="err-message">{formError[data.name]}</p>
                    )}
                  </div>
                ))}

                <button type="submit" className="submit-btn">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
