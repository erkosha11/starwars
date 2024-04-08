import React from "react";
import styles from "./WarningUi.module.scss";

interface WarningUiProps {
  type: "error" | "warning" | "info";
  text: string;
  subtitle?: string;
}

const WarningUi: React.FC<WarningUiProps> = ({ type, text, subtitle }) => {
  return (
    <div className={`${styles.warningUi} ${styles[type]}`}>
      <strong className={styles.message}>{text}</strong>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default WarningUi;
