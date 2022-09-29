import React, {FC} from "react";
import classNames from "classnames";
import styles from "./Input.module.css";

export enum InputTypes {
  PASSWORD = 'password',
  EMAIL = 'email',
}

interface IInput {
  num?: boolean;
  hidden?: string;
  style?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  type: InputTypes;
  text: string;
  name: string;
  autocomplete?: string;
  value: string;
  setValue: (arg1: string) => void;
}

const Input: FC<IInput> = ({
  num,
  hidden,
  style,
  placeholder,
  maxLength,
  minLength,
  type,
  name,
  text,
  autocomplete,
  value,
  setValue,
}) => {
  return (
    <label className={classNames(style, styles.input)}>
      <span className={classNames(styles.input__heading, hidden)}>{text}</span>
      {num ? (
        <input
          placeholder={placeholder}
          min={minLength}
          max={maxLength}
          onChange={(event) => setValue(event.target.value)}
          value={value}
          name={name}
          type={type}
          autoComplete={autocomplete}
          required
        />
      ) : (
        <input
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          onChange={(event) => setValue(event.target.value)}
          value={value}
          name={name}
          type={type}
          autoComplete={autocomplete}
          required
        />
      )}
    </label>
  );
};

export default Input;