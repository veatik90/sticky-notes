import { FC, useRef } from "react";

import styles from "./styles.module.css";
import { Note } from "../Note";
import { WorkingZoneProps } from "./interfaces";

export const WorkingZone: FC<WorkingZoneProps> = (props) => {
  const { notes, changeNotesAppearance } = props;

  const zoneRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={zoneRef} className={styles.zoneContainer}>
      {notes.map((note) => (
        <Note
          key={note.id}
          zoneRef={zoneRef}
          note={note}
          changeNotesAppearance={changeNotesAppearance}
        />
      ))}
    </div>
  );
};
