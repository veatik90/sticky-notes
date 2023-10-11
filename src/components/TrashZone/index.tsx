import { FC } from "react";

import styles from "./styles.module.css";
import { TrashZoneProps } from "./interfaces";

export const TrashZone: FC<TrashZoneProps> = ({ trashZoneRef }) => {
  return (
    <div className={styles.zoneContainer}>
      <div ref={trashZoneRef} className={styles.deleteBlock}>
        <h3>To delete a note, place it here!</h3>
      </div>
    </div>
  );
};
