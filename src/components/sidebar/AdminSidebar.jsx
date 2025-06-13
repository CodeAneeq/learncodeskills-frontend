import React, { useContext } from 'react';
import styles from './AdminSidebar.module.scss';
// import { sidebarContext } from '../../contexts/sidebar.context';
// import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
// import GlobalSearch from '../searchBar/search-bar';
// import ShoppingCart from '../cart/shopping-cart';
import { MdAdd, MdDashboard, MdHome } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
// import { useDispatch, useSelector } from 'react-redux';
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineRateReview } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa";


export const AdminSidebar = () => {

  return (
    <aside className={styles.sidebar_container}>
      <div className={styles.sidebar_content_container}>
      <div className={styles.nav_link_container}>
      <ul>
            <li>
            <NavLink to='/instructor/dashboard' className={`nav-link active ${styles.nav_link_item}`}><span><MdDashboard /></span>Dashboard</NavLink>
            </li>
            <li>
            <NavLink to='/instructor/add-course' className={`nav-link active ${styles.nav_link_item}`}><span><MdAdd /></span>Add Course</NavLink>
            </li>
            <li>
            <NavLink to='/instructor/published-courses' className={`nav-link active ${styles.nav_link_item}`}><span><FaGraduationCap/></span>My Courses</NavLink>
            </li>
            <li>
            <NavLink to='/instructor/students-enrolled' className={`nav-link active ${styles.nav_link_item}`}><span><PiStudentBold /></span>Students Enrolled</NavLink>
            </li>
            <li>
            <NavLink to='/profile/instructor' className={`nav-link active ${styles.nav_link_item}`}><span><ImProfile /></span>View Profile</NavLink>
            </li>
          </ul>
      </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;