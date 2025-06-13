import React, { useState } from "react";
import { TextInput } from "../../components/inputs/TextInput";
import AuthLayout from "../../components/layouts/AuthLayout";
import styles from "./Auth.module.scss";
import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { Helpers } from "../../services/Helper";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/UserSlice";
import baseURL from "../../services/Constant";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", name: "" });
  const [authError, setAuthError] = useState("");
  const [loader, setLoader] = useState(false);
    const [role, setRole] = useState("student");
  const [profileImage, setProfileImage] = useState(null); // ✅ new state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitSignUp = async (e) => {
    e.preventDefault();
    let emailError = "", passwordError = "", nameError = "";
    if (!Helpers.validateEmail(email)) {
      emailError = 'Invalid Email';
    }
    if (!Helpers.validatePassword(password)) {
      passwordError = 'Password must be at least 8 characters';
    }
    if (!Helpers.validateName(name)) {
      nameError = 'Name must be at least 3 characters';
    }
    if (emailError || passwordError || nameError) {
      setErrors({ email: emailError, password: passwordError, name: nameError });
    } else {
      setLoader(true);
     try {
         const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    if (profileImage) formData.append("profileImg", profileImage);
 const response = await axios.post(`${baseURL}/user/api/sign-up`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      localStorage.setItem("token", response?.data?.data?.token);   
      dispatch(addUser(response?.data?.data));
      setErrors({ email: "", password: "", name: "" });
      setLoader(false);
      navigate('/')
      } catch (error) {
        setAuthError(error?.response?.data?.message)
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  return (
    <AuthLayout>
      <div className={`${styles.sign_up}`}>
        <h1 className="auth_heading">Create an Account</h1>
        <p className="auth_title mt-3">Enter your details below</p>
        <form className="mt-4" onSubmit={onSubmitSignUp}>
          <TextInput
            placeholder="Name"
            type="text"
            styles={{ marginBottom: "0" }}
            value={name}
            onChange={setName}
            required
            err_msg={errors.name}
          />
          <TextInput
            placeholder="Email or Phone Number"
            type="text"
            styles={{  marginBottom: "5px", marginTop: "25px" }}
            value={email}
            onChange={setEmail}
            required
            err_msg={errors.email}
          />
          <TextInput
            placeholder="Password"
            type="password"  // Corrected type to 'password' for security
            styles={{  marginBottom: "5px", marginTop: "25px" }}
            value={password}
            onChange={setPassword}
            required
            err_msg={errors.password}
          />
          {/* Role Radio Buttons */}
          <div className={`${styles.role_btns} mt-4 mb-2`}>
            <label className={`${styles.label_one} mr-3`}>
              <input
                type="radio"
                name="role"
                value="student"
                className="me-2"
                checked={role === "student"}
                onChange={(e) => setRole(e.target.value)}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="instructor"
                className={`me-2 ${styles.label_two}`}
                checked={role === "instructor"}
                onChange={(e) => setRole(e.target.value)}
              />
              Instructor
            </label>
          </div>

          {/* ✅ Profile Image Upload */}
          <div className="mt-4">
            <label className="block mb-1 font-medium">Upload Profile Image</label>
            <input
            name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full ms-2"
            />
          </div>
          <div className={styles.button_wrapper}>
            <PrimaryBtn
              loading={loader ? true : false}
              disabled={loader ? true : false}
              type="submit"
            >
              Create Account
            </PrimaryBtn>
            {authError && <div className="text-danger"><small>{authError}</small></div>}
          </div>
        </form>
        <span>
          Already have an account?{" "}
          <Link to="/auth/login" className={styles.login_link}>
            Login
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
