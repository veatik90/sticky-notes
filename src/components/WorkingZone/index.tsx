import { FC, useRef } from "react";

import styles from "./styles.module.css";
import { Note } from "../Note";
import { WorkingZoneProps } from "./interfaces";
import { TrashZone } from "../TrashZone";

export const WorkingZone: FC<WorkingZoneProps> = (props) => {
  const { noteIds, activeNoteId, setActiveNote, deleteNote } = props;

  const zoneRef = useRef<HTMLDivElement>(null);
  const trashZoneRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={zoneRef} className={styles.zoneContainer}>
      {noteIds.map((noteId, index) => (
        <Note
          key={noteId}
          id={noteId}
          order={index}
          zoneRef={zoneRef}
          trashZoneRef={trashZoneRef}
          isActive={activeNoteId === noteId}
          setActiveNote={setActiveNote}
          deleteNote={deleteNote}
        />
      ))}
      <TrashZone trashZoneRef={trashZoneRef} />
    </div>
  );
};
