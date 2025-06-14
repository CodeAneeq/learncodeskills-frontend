import React from "react";
import styles from "./CourseCard.module.scss";
import thumbnail from '../../../assets/imgs/imgP.png'

const CourseCard = (props) => {
  return (
    <div className={`${styles.card_container}`}>
      <div className="card" style={{width: '18rem', minHeight: '380px'}}>
        <img src={props.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className={`${styles.h5} card-title`}>{props.title}</h5>
          <p className="card-text mb-1">
            {props.subTitle}
          </p>
          <p className="card-text mb-1">
            {props.instructor}
          </p>
          <h5 className="card-text">
           Rs {props.price}
          </h5>
         
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
