import React, { useEffect, useState } from 'react'
import PageLayout from '../../../components/layouts/PageLayout'
import styles from './AllCourses.module.scss'
import CourseCard from '../../../components/cards/courseCard/CourseCard'
import axios from 'axios'
import baseURL from '../../../services/Constant'

const AllCourses = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/user/api/get-users`)
      setUsers(response?.data?.data)
    } catch (error) {
        console.log(error);
    }
  }

  const getAllCourses = async () => {
    try {
      const response = await axios.get(`${baseURL}/course/api/get-courses`);
      setAllCourses(response?.data?.data)
    } catch (error) {
      console.log(error);
    }
  }

    useEffect(() => {
      getUsers();
      getAllCourses()
    }, [])
  return (
    <PageLayout>
        <div className={`${styles.courses_container} container`}>
        <h2>Courses List</h2>
        <p><span className='text-secondary'>Home / </span><span>Courses List</span></p>
        <div className={`${styles.courses_div}`}>
            {
            allCourses.map((item) => {
                const user = users.find((it) => it._id === item.instructorId)
                return <CourseCard key={item._id} thumbnail={item.thumbnail} title={item.title} subTitle={item.subTitle} instructor={user?.name} price={item.price}/>
              })
            }
        </div>
        </div>
    </PageLayout>
  )
}

export default AllCourses