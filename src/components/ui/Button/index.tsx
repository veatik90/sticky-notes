import { FC, PropsWithChildren } from "react";

import styles from "./styles.module.css";

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
