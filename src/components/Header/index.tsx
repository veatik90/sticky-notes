import { FC } from "react";
import styles from "./styles.module.css";
import { Button } from "../ui/Button";

export const Header: FC = () => {
  return (
    <div className={styles.headerContainer}>
      <h3>Sticky Notes</h3>
      <Button>Add Note +</Button>
    </div>
  );
};
