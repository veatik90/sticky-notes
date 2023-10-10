import { FC } from "react";

import styles from "./styles.module.css";
import { Note } from "../Note";

export const WorkingZone: FC = () => {
  return (
    <div className={styles.zoneContainer}>
      <Note />
    </div>
  );
};
