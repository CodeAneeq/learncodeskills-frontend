import React, { useContext, useState } from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
// import Sidebar from "../sidebar/sidebar";
// import GlobalSearch from "../searchBar/search-bar";
import { useDispatch, useSelector } from "react-redux";
import profileImg from '../../assets/imgs/profileImg.jpeg'
import logo from '../../assets/imgs/logo.png'
import PrimaryBtn from "../buttons/PrimaryBtn";
import { removeUser } from "../../redux/features/UserSlice";

export const Navbar = () => {
  const isLogin = useSelector(state => state.user.isLogin);
  const isInstructor = useSelector(state => state.user.data.role);
  const dispatch = useDispatch()
  // console.log(isLogin)
  const signOut = () => {
    dispatch(removeUser());
  }
  return (
    <>
     {/* <Sidebar></Sidebar> */}
    <nav className={`navbar navbar-expand-lg  ${styles.app_navbar_container}`}>
      <div className="container">
        <a className="navbar-brand p-0" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          style={{color: 'white'}}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${styles.color}`}></span>
          {/* <span className="navbar-toggler-icon" onClick={()=>sidebarOpen()}></span> */}
        </button>
        <div className="collapse navbar-collapse d-none" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {
              isLogin && isInstructor == 'instructor' ? (<>
            </>) : (<> <li className="nav-item mx-3">
            <NavLink to='/' className={`nav-link active ${styles.nav_link_item}`}>Home</NavLink>
            </li>
            <li className="nav-item mx-3">
            <NavLink to='/contact' className={`nav-link active ${styles.nav_link_item}`}>Courses</NavLink>
            </li>
            <li className="nav-item mx-3">
            <NavLink to='/about' className={`nav-link active ${styles.nav_link_item}`}>View Profile</NavLink>
            </li>
            <li className="nav-item mx-3">
            <NavLink to='/about' className={`nav-link active ${styles.nav_link_item}`}>My Learning</NavLink>
            </li></>)
            }
          </ul>
           <div className={`${styles.profile_img_div}`}>
            <img src={profileImg} className={`${styles.img}`}></img>
          </div>
          <form className="d-flex align-items-center gap-4" role="search"> 
           <NavLink to={isLogin ? '' : '/auth/signup'}>
              <PrimaryBtn onClick={isLogin ? signOut : undefined}>
                {isLogin ? "Sign Out" : "Sign Up"}
              </PrimaryBtn>
           </NavLink>
          </form>
        </div>
      </div>
    </nav>
          </>
  );
};

export default Navbar;
 {/* // { */}
            //   isLogin ? isInstructor == 'instructor' ? 
            // <li className="nav-item mx-3">
            // <NavLink to='/admin/dashboard' className={`nav-link active ${styles.nav_link_item}`}>Dashboard</NavLink>
            // </li> : 
            // <li className="nav-item mx-3">
            // <NavLink to='/my-orders' className={`nav-link active ${styles.nav_link_item}`}>My Orders</NavLink>
            // </li> :
            // }