import React from 'react'
import PageLayout from './PageLayout.jsx';
import styles from './Layouts.module.scss'
import authBanner from '../../assets/imgs/authbanner.jpg'

const AuthLayout = ({children}) => {
  return (
      <PageLayout>
      <div className="container-fluid mx-0 px-0">
        <div className="row m-0 p-0">
          <div className="col-6 px-0 d-lg-block d-none">
            <figure >
              <img src={authBanner} alt="" className={styles.auth_banner_img} />
            </figure>
          </div>
          <div className="col-lg-6 col-sm-8 col-11 mx-auto ">
            <div className={styles.form_wrapper}>
            {children}
            </div>
          </div>
        </div>
      </div>
      </PageLayout>
  )
}

export default AuthLayout;
