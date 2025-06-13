import React from 'react'
import PageLayout from '../../../components/layouts/PageLayout'
// import AdminSidebar from '../../../components/sidebar/AdminSidebar'
import styles from './Dashboard.module.scss'
import AdminSidebar from '../../../components/sidebar/AdminSidebar'

const Dashboard = () => {
  return (
    <PageLayout>
      <div className={`${styles.dashboard_container}`}>
        <div className={`${styles.sidebar}`}>
          <AdminSidebar/>
        </div>
        <div className={` ${styles.content} container`}>
          <h1>dashboard</h1>
        </div>
      </div>
    </PageLayout>
  )
}

export default Dashboard