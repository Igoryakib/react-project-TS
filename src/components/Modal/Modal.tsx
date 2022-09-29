import React, { useState, FC } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Modal.module.css";

import { getUserId } from "../../redux/auth/auth-selectors";
import { addBooking } from "../../redux/bookings/bookings-operations";
import { getModal } from "../../redux/selectors";
import { typeModal } from "../../redux/actions";

import Button, { TypesButtons } from "../Button/Button";
import Input, { InputTypes } from "../Input/Input";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const modalRef = document.querySelector("#root-modal");

interface IModal {
  level: string;
  title: string;
  duration: number;
  price: number;
  tripId: string;
  onClickFn: () => void;
}

const Modal: FC<IModal> = ({ level, title, duration, onClickFn, price, tripId }) => {
  const dispatch = useDispatch();
  const isOpenModal = useTypedSelector(getModal);
  const userId = useTypedSelector(getUserId);
  const [guests, setGuests] = useState<number>(1);
  const [date, setDate] = useState("2022-07-20");
  const onSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const booking = {
      tripId,
      userId,
      guests,
      date,
    };
    // dispatch(addBooking(booking));
    // dispatch(typeModal(!isOpenModal));
  };
  return createPortal(
    <div className={styles["modal"]}>
      <div className={styles["trip-popup"]}>
        <button onClick={onClickFn} className={styles["trip-popup__close"]}>
          ×
        </button>
        <form
          onSubmit={onSubmitForm}
          className={styles["trip-popup__form"]}
          autoComplete="off"
        >
          <div className={styles["trip-info"]}>
            <h3 className={styles["trip-info__title"]}>{title}</h3>
            <div className={styles["trip-info__content"]}>
              <span className={styles["trip-info__duration"]}>
                <strong>{duration}</strong> days
              </span>
              <span className={styles["trip-info__level"]}>{level}</span>
            </div>
          </div>
          <Input
            num
            minLength="2022-07-20"
            setValue={setDate}
            value={date}
            text="Date"
            style={styles["trip-popup__input"]}
            type={InputTypes.DATE}
            name="date"
          />
          <Input
            num
            text="Number of guests"
            style={styles["trip-popup__input"]}
            setValue={setGuests}
            value={guests}
            name="guests"
            type={InputTypes.NUMBER}
            minLength={1}
            maxLength={10}
          />
          <span className="trip-popup__total">
            Total:{" "}
            <output className="trip-popup__total-value">
              {price * guests}$
            </output>
          </span>
          <Button type={TypesButtons.SUBMIT} text="Book a trip" />
        </form>
      </div>
    </div>,
    modalRef
  );
};

Modal.propTypes = {
  level: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClickFn: PropTypes.func.isRequired,
};

export default Modal;
