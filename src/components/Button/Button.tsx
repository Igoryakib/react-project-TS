import React, {FC} from "react";
import classNames from 'classnames';

import styles from './Button.module.css';

export enum TypesButtons {
    SUBMIT = 'submit',
    BUTTON = 'button',
}

interface IButton {
  text: string;
  type: TypesButtons;
  style?: string;
  onClickFn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButton> = ({ style = '', text, type = TypesButtons.BUTTON, onClickFn }) => {
  return (
    <button
      onClick={onClickFn}
      className={classNames(styles.button, style)}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;