import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // Добавляем опциональный атрибут onClick
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button className={s.button} onClick={onClick}>{children}</button>; // Добавляем обработчик события onClick
};
