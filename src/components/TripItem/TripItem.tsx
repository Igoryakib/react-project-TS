import React, {FC} from "react";
import {Link} from 'react-router-dom';
import styles from "./TripItem.module.css";
import buttonStyles from '../../components/Button/Button.module.css';

interface ITripItem {
  id: string;
  title: string;
  img: string;
  duration: string;
  price: number;
  level: string;
}

const TripItem: FC<ITripItem> = ({
  id,
  title,
  img,
  duration,
  price,
  level,
}) => {
  return (
    <li className={styles["trip-card"]}>
      <img className={styles["trip-img"]} src={img} alt="trip image" />
      <div className={styles["trip-card__content"]}>
        <div className={styles["trip-info"]}>
          <h3 className={styles["trip-info__title"]}>{title}</h3>
          <div className={styles["trip-info__content"]}>
            <span className={styles["trip-info__duration"]}>
              <strong>{duration}</strong> days
            </span>
            <span className={styles["trip-info__level"]}>{level}</span>
          </div>
        </div>
        <div className={styles["trip-price"]}>
          <span>Price</span>
          <strong className={styles["trip-price__value"]}>{price} $</strong>
        </div>
      </div>
      <Link to={`/trip/${id}`} className={buttonStyles["button"]}>
        Discover a trip
      </Link>
    </li>
  );
};

export default TripItem;
