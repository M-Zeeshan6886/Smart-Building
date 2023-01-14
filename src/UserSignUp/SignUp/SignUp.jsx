import React from "react";
import "./SignUp.scss";
import rssAT from "../../assets/SignUpImages/rssAT.svg";
import Google from "../../assets/SignUpImages/google.svg";
import Tweeter from "../../assets/SignUpImages/tweeter.svg";
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
    username: Yup.string().required("Username is required"),
    company: Yup.string().required("Company is required"),
    position: Yup.string().required("Position is required"),
    buildingref: Yup.string().required("Building ref is required"),
    checkbox: Yup.string().required("checkbox is required"),
  });

  return (
    <>
      <div className="SignUp">
        <div className="SignUp-container">
          <div className="SignUp-container-left">
            <div className="SignUp-container-left-content">
              <h1 className="SignUp-container-left-content-heading">
                Wellcome to Smart Building!
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

              <div className="signin-container-right-content-socialIcons">
                <div className='signin-container-right-content-socialIcons-icons'>
                <img src={Google} alt="google-icon" />
                <p>google</p>
                </div>
                <div className='signin-container-right-content-socialIcons-icons'>
                <img src={Tweeter} alt="tweeter-icon" />
                <p>twiter</p>
                </div>
                
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

              <div className="SignUp-container-right-content-form">
                <Formik
                  initialValues={{
                    fullName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                  }}
                  validationSchema={validate}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {(formik) => (
                    <>
                      {/* <div>
                        <center>Hello World</center>
                      </div> */}

                      <Form>


                      <div className="SignUp-container-right-content-form-content">
                  <div className="SignUp-container-right-content-form-content-left">

                  <FormInput
                          label="Name"
                          name="fullName"
                          type="text"
                          place="Enter your Full Name"
                        />
                  <FormInput
                          label="Company"
                          name="company"
                          type="text"
                          place="Enter your company name"
                        />

<FormInput
                          label="Position"
                          name="position"
                          type="text"
                          place="Enter your position"
                        />

                  </div>
                  <div className="SignUp-container-right-content-form-content-right">

                  <FormInput
                          label="Username"
                          name="username"
                          type="text"
                          place="Enter your Username"
                        />

<FormInput
                          label="Telephone"
                          name="fullname"
                          type="tel"
                          place="Enter your phone no."
                        />

<FormInput
                          label="Buildng reference"
                          name="buildingref"
                          type="text"
                          place="Enter your company name"
                        />

                        

                  </div>
                </div>
                <div className="SignUp-container-right-content-form-content-row2">
                <FormInput
                          label="Email"
                          name="email"
                          type="text"
                          place="Enter your email"
                        />

<FormInput
                          label="Password"
                          name="password"
                          type="text"
                          place="Enter your password"
                        />
                </div>

                <div className="SignUp-container-right-content-form-content-row3">

                <input
                          name="checkbox"
                          type="checkbox"
                        />
                <p>Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.</p>
                </div>

                <div className="SignUp-container-right-content-form-content-row4">
                  <Link className="create-btn">Create Account</Link>
                </div>


                        
                      </Form>
                    </>
                  )}
                  
                </Formik>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
