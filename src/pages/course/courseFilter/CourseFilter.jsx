import React, { useEffect, useState } from 'react'
import PageLayout from '../../../components/layouts/PageLayout'
import CourseCard from '../../../components/cards/courseCard/CourseCard'
import FilterSidebar from '../../../components/filter/FilterSidebar'
import styles from './CourseFilter.module.scss'
import PrimaryBtn from '../../../components/buttons/PrimaryBtn'
import axios from 'axios'
import baseURL from '../../../services/Constant'

const CourseFilter = () => {
  const [filter, setFilter] = useState({
    category: "",
    level: "",
    language: ""
  })
const [courses, setCourses] = useState([]);
const [allCourses, setAllCourses] = useState([]);
const [hasSearched, setHasSearched] = useState(false);
const [users, setUsers] = useState([]);

  const filterCourses = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/course/api/filter-course`,
        filter)
      setCourses(response?.data?.data);
      setHasSearched(true)
    } catch (error) {
        console.log(error);
        setCourses([])
    }
  }

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

  const resetFilter = async () => {
   setFilter({
    category: "",
    level: "",
    language: "",
   })
   setCourses([])
  }

  useEffect(() => {
    getUsers();
    getAllCourses()
  }, [])

  return (
    <PageLayout>
        <div className={`${styles.course_filter_container}`}>
          <div>
            <FilterSidebar filter={filter} setFilter={setFilter}/>
          </div>
          <div className={`${styles.main_content}`}>
            <div className={`${styles.btns}`}>
              <div>
          <PrimaryBtn onClick={filterCourses}>Apply Filters</PrimaryBtn>
              </div>
              <div>
          <PrimaryBtn onClick={resetFilter}>Reset Filters</PrimaryBtn>
              </div>
            </div>
            <div className={`${styles.courses_div}`}>
            {
              hasSearched ?  ( courses.length != 0 ?  (
              courses.map((item) => {
                const user = users.find((it) => it._id === item.instructorId)
                return <CourseCard key={item._id} thumbnail={item.thumbnail} title={item.title} subTitle={item.subTitle} instructor={user?.name} price={item.price}/>
              })
            ) : <p>No Course Found</p>) 
            : (allCourses.map((item) => {
              const user = users.find((it) => it._id === item.instructorId)
                return <CourseCard key={item._id} thumbnail={item.thumbnail} title={item.title} subTitle={item.subTitle} instructor={user?.name} price={item.price}/>
            }))
            }
           
            </div>
          </div>
        </div>
    </PageLayout>
  )
}

export default CourseFilter