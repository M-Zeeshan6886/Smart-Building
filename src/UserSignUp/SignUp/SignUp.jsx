import React from "react";
import "./SignUp.scss";
import rssAT from '../../assets/SignUpImages/rssAT.svg'
import Google from '../../assets/SignUpImages/google.svg'
import Tweeter from '../../assets/SignUpImages/tweeter.svg'
import FormInput from "../FormInput/FormInput";
import { Link } from "react-router-dom";
// For Form validation
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirmPassword: Yup.string().when("password", (password, field) =>
      password ? field.required().oneOf([Yup.ref("password")]) : field
    ),
    fullName: Yup.string().required("fullName is required"),
  });

  return (
    <>
      <div className="SignUp">
        <div className="SignUp-container">
          <div className="SignUp-container-left">
            <div className="SignUp-container-left-content">
              <h1 className="SignUp-container-left-content-heading">
                Wellcome to 
                Smart Building!
              </h1>
              <center>
                <p className="login-txt">
                  Log-in to your account to access the Mental Health Forums.
                </p>
              </center>
            </div>
          </div>
          <div className="SignUp-container-right">
            <div className="SignUp-container-right-content">
            <div className="SignUp-container-right-content-topbar">
              <div className="SignUp-container-right-content-topbar-content">
                <img src={rssAT} alt="rssat" />
              <div className="SignUp-container-right-content-topbar-content-Signbtns">
                <button>Sign Up</button>
                <button>Sign In</button>
              </div>
              </div>
            </div>

           <div className="SignUp-container-right-content-heading">
            <h1>Sign up to get started.</h1>
           </div>
     
           <div className="SignUp-container-right-content-socialIcons">
            <img src={Google} alt="google-icon" />
            <img src={Tweeter} alt="tweeter-icon" />
           </div>

          <div className="SignUp-container-right-content-hr">
            <div className="hr1">
            <hr />
            </div>
            <span>Or</span>
            <div className="hr1">
            <hr />
            </div>
          </div>

            </div>
               </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
