import { FC } from "react";
import styles from "./styles.module.css";
import { Button } from "../ui/Button";
import { HeaderProps } from "./interfaces";

export const Header: FC<HeaderProps> = (props) => {
  const { addNote, error } = props;
  return (
    <div className={styles.headerContainer}>
      <h3>Sticky Notes</h3>
      {Boolean(error) && <h5 className={styles.error}>{error?.message}</h5>}
      <Button onClick={addNote}>Add Note +</Button>
    </div>
  );
};
