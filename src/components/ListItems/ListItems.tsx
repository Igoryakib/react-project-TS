import React, {FC} from "react";
import { useDispatch } from "react-redux";
import styles from "./ListItem.module.css";

import { removeBooking } from "../../redux/bookings/bookings-operations";
import { ITripItem } from "../TripItem/TripItem";
import { IBookingItem } from "../BookingItem/BookingItem";

type ArrayItem = ITripItem | IBookingItem;

interface IListItems<T> {
  booking?: boolean;
  style: string;
  ArrayItem: (item: T) => React.ReactNode;
  arrayItems: T[];
}

const ListItems: FC<IListItems> = ({
  booking = false,
  arrayItems,
  style,
  ArrayItem,
}) => {
  const dispatch = useDispatch();
  const onHandleDelete = (bookingId: string) => {
    // dispatch(removeBooking(bookingId));
  };
  return (
    <>
      {booking ? (
        <ul className={style}>
          {arrayItems.map((item) => {
            return (
              <ArrayItem
                key={item.id}
                guests={item.guests}
                date={item.date}
                totalPrice={item.totalPrice}
                trip={item.trip}
                onClickDelete={() => onHandleDelete(item.id)}
              />
            );
          })}
        </ul>
      ) : (
        <ul className={style}>
          {arrayItems.map((item) => {
            return (
              <ArrayItem
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.image}
                duration={item.duration}
                price={item.price}
                level={item.level}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

// ListItems.propTypes = {
//   arrayItems: PropTypes.array.isRequired,
//   style: PropTypes.string.isRequired,
//   ArrayItem: PropTypes.func.isRequired,
//   booking: PropTypes.bool,
//   onDeleteItem: PropTypes.func,
// };

// ListItems.defaultProps = {
//   booking: false,
//   onDeleteItem: null,
// };

export default ListItems;
