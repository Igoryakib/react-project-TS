import React, { FC } from "react";
import styles from "./Select.module.css";

import Option from "../Option/Option";
import shortid from "shortid";

interface IAddProp {
  value: string;
  textOption: string;
}

interface ISelect {
  valueChange: string;
  text: string;
  additionalProps: IAddProp[];
  setChange: (arg1: string) => void;
}

const Select: FC<ISelect> = ({
  valueChange,
  setChange,
  text,
  additionalProps,
}) => {
  return (
    <label className={styles["select"]}>
      <span className="visually-hidden">{text}</span>
      <select
        value={valueChange}
        onChange={(event) => setChange(event.target.value)}
        name="duration"
      >
        {additionalProps.map((item) => {
          return (
            <Option
              key={shortid.generate()}
              value={item.value}
              text={item.textOption}
            />
          );
        })}
      </select>
    </label>
  );
};

export default Select;
