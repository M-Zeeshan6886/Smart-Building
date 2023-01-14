import React from 'react';
import './Login.scss';
import rssAT from "../../assets/SignUpImages/rssAT.svg";
import Google from "../../assets/SignUpImages/google.svg";
import Tweeter from "../../assets/SignUpImages/tweeter.svg";
import FormInput from '../FormInput/FormInput';
import { Link } from 'react-router-dom';
   // For Form validation
   import { Formik, Form } from "formik";
   import * as Yup from "yup";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  return (
    <>
    <div className="signin">
        <div className="signin-container">
          <div className="signin-container-left">
            <div className="signin-container-left-content">
              <h1 className="signin-container-left-content-heading">
                Wellcome Back!
              </h1>
              <center><p className='login-txt'>
              Log-in to your account to access the Mental Health Forums.
              </p></center>
            </div>
          </div>
          <div className="signin-container-right">
          <div className="signin-container-right-content-topbar">
                <div className="signin-container-right-content-topbar-content">
                  <img src={rssAT} alt="rssat" />
                  <div className="signin-container-right-content-topbar-content-Signbtns">
                    <button>Sign Up</button>
                    <button>Sign In</button>
                  </div>
                </div>
              </div>

              <div className="signin-container-right-content-heading">
                <h1>Sign up to get started.</h1>
              </div>

              <div className="signin-container-right-content-socialIcons">
                <img src={Google} alt="google-icon" />
                <img src={Tweeter} alt="tweeter-icon" />
              </div>

              <div className="signin-container-right-content-hr">
                <div className="hr1">
                  <hr />
                </div>
                <span>Or</span>
                <div className="hr1">
                  <hr />
                </div>
              </div>

            <div className="signin-container-right-form">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <div>
                    <Form className="signin-container-right-form-signin">
                      <FormInput
                        label="Enter your Email"
                        name="email"
                        type="email"
                        place="Enter your email"
                      />
                      <FormInput
                        place="Enter your password"
                        label="Password"
                        name="password"
                        type="password"
                      />
                      <div className="signin-container-right-form-signin-checkbox">
                        <input type="checkbox" />
                        <p className='chckbx-text'>Remember me</p>
                      </div>
                        <Link className='frgt-pswrd'>Forget Your Password!?</Link>
                      
                      <div className="signin-container-right-form-signin-btn">
                        <center>
      <Link to="" className="login-btn2">Sign in</Link>
                        </center>
                      </div>
                      
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    
    
    
    </>
  )
}

export default Login;