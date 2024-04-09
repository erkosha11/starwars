import React from "react";
import s from "./Input.module.scss";

interface InputProps {
  name?: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  maxLength?: number;
}


export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type = "text",
  onChange,
  value,
  maxLength
}) => {
  return <input className={s.input} type={type} placeholder={placeholder} name={name} onChange={onChange} value={value} maxLength={maxLength} />;
};
