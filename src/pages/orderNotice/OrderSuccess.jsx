import React from 'react'
import styles from './Order.module.scss'
import PageLayout from '../../components/layouts/PageLayout'
import PrimaryBtn from '../../components/buttons/PrimaryBtn'
import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <PageLayout>
    <div className={`${styles.error_page_container} container`}>
      <p><span className='text-secondary'>Home / </span><span>Order Success</span></p>
      <div className={`${styles.main_content}`}>
      <h1>Order Placed Successfully</h1>
      <p>Thank you for placed order, happy learning</p>
      <div className={`${styles.btn_div}`}>
      <NavLink to='/'><PrimaryBtn type="submit">Back To Home Page</PrimaryBtn></NavLink>
      </div>
      </div>
    </div>
    </PageLayout>
  )
}

export default NotFoundPage;