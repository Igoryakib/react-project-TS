import React, {FC} from "react";
import classNames from "classnames";
import styles from "./Input.module.css";

export enum InputTypes {
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  DATE = 'date',
}

interface IInput {
  num?: boolean;
  hidden?: string;
  style?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number | string;
  type: InputTypes;
  text: string;
  name: string;
  autocomplete?: string;
  value: any;
  setValue: (arg1: any) => void;
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
          minLength={minLength as number}
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