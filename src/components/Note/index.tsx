import { FC, useRef } from "react";

import styles from "./styles.module.css";
import { NoteProps } from "./interfaces";
import { useNotePosition } from "./hooks/useNotePosition";

export const Note: FC<NoteProps> = (props) => {
  const { zoneRef } = props;

  const noteRef = useRef<HTMLDivElement>(null);

  useNotePosition(noteRef, zoneRef);

  return (
    <div ref={noteRef} className={styles.noteContainer}>
      <textarea />
    </div>
  );
};
