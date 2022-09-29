import React, {FC} from "react";
import styles from "./BookingItem.module.css";

interface ITrip {
  title: string;
} 

export interface IBookingItem {
  guests: number;
  trip: ITrip;
  date: string;
  totalPrice: number;
  onClickDelete: () => void;
}

const BookingItem: FC<IBookingItem> = ({
  onClickDelete,
  guests,
  date,
  totalPrice,
  trip,
}) => {
  const tripMonth =
    new Date(date).getMonth() + 1 >= 10
      ? new Date(date).getMonth() + 1
      : `0${new Date(date).getMonth() + 1}`;
  const tripDate =
    new Date(date).getDate() >= 10
      ? new Date(date).getDate()
      : `0${new Date(date).getDate()}`;
  const tripYear = new Date(date).getFullYear();
  return (
    <li className={styles["booking"]}>
      <h3 className={styles["booking__title"]}>{trip.title}</h3>
      <span className={styles["booking__guests"]}>{guests} guests</span>
      <span
        className={styles["booking__date"]}
      >{`${tripDate}.${tripMonth}.${tripYear}`}</span>
      <span className={styles["booking__total"]}>{totalPrice} $</span>
      <button
        onClick={onClickDelete}
        className={styles["booking__cancel"]}
        title="Cancel booking"
      >
        <span className="visually-hidden">Cancel booking</span>×
      </button>
    </li>
  );
};

export default BookingItem;
