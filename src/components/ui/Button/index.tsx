import { FC, PropsWithChildren } from "react";

import styles from "./styles.module.css";
import { ButtonProps } from "./interfaces";

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { children, onClick } = props;
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
