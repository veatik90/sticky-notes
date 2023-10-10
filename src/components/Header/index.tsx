import { FC } from "react";
import styles from "./styles.module.css";
import { Button } from "../ui/Button";
import { HeaderProps } from "./interfaces";

export const Header: FC<HeaderProps> = ({ addNote }) => {
  return (
    <div className={styles.headerContainer}>
      <h3>Sticky Notes</h3>
      <Button onClick={addNote}>Add Note +</Button>
    </div>
  );
};
