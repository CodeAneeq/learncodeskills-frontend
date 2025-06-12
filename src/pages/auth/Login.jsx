import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import styles from "./Auth.module.scss";
import { TextInput } from "../../components/inputs/TextInput";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { Link, useNavigate } from "react-router-dom";
import { Helpers } from "../../services/Helper";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/UserSlice";
import baseURL from "../../services/Constant";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()


  console.log(email, password);

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    let emailError = "", passwordError = "";

    if (!Helpers.validateEmail(email)) {
      emailError = 'Invalid Email';
    }
    if (!Helpers.validatePassword(password)) {
      passwordError = 'Password must be at least 8 characters';
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setLoader(true)
      try {
        const payload = { email, password };
        const response = await axios.post(`${baseURL}/user/api/login`, payload);
        localStorage.setItem("token", response?.data?.data?.token);
        console.log(response?.data?.data, "Login Response");
        dispatch(addUser(response?.data?.data))
        setErrors({ email: "", password: "" });
        navigate('/')
        setLoader(false)
      } catch (error) {
        console.log(error);
        setAuthError(error?.response?.data?.message)
        setLoader(false)
      }
    }
  };

  return (
    <AuthLayout>
      <div className={`${styles.sign_up}`}>
        <h1 className="auth_heading">Log in to Exclusive</h1>
        <p className="auth_title mt-3">Enter your details below</p>
        <form className="mt-4" onSubmit={onSubmitLogin}>
          <TextInput
            styles={{ marginBottom: "0" }}
            value={email}
            onChange={setEmail}
            placeholder="Email or Phone Number"
            type="text"
            required
            err_msg={errors.email}
          />
          <TextInput
            styles={{ marginBottom: "5px", marginTop: "25px" }}
            value={password}
            onChange={setPassword}
            placeholder="Password"
            type="password"
            required
            err_msg={errors.password}
          />
          
          <small>
            <Link to="/auth/forgot-password" className={styles.forget_password_link}>
              Forgot Password?
            </Link>
          </small>
          <div className={styles.button_wrapper}>
            <PrimaryBtn loading={loader ? true : false} disabled={loader ? true : false} type="submit">
              Login
            </PrimaryBtn>
            {authError && <div className="text-danger"><small>{authError}</small></div>}
          </div>
          <span>
            Create a New Account?
            <Link to="/auth/sign-up" className={styles.login_link}>
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
