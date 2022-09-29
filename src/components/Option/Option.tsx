import React, {FC} from "react";

interface IOption {
    value: string;
    text: string;
}

const Option: FC<IOption> = ({ value, text }) => {
  return <option value={value}>{text}</option>;
};

export default Option;