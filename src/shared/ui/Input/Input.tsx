import React from "react";
import s from "./Input.module.scss";

interface InputProps {
  placeholder: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, type = "text" }) => {
  return <input className={s.input} type={type} placeholder={placeholder} />;
};
