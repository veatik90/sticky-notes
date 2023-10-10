import { FC, useRef, useCallback } from "react";

import styles from "./styles.module.css";
import { NoteProps } from "./interfaces";
import { useNotePosition } from "./hooks/useNotePosition";

export const Note: FC<NoteProps> = (props) => {
  const { zoneRef, note, changeNotesAppearance } = props;

  const noteRef = useRef<HTMLDivElement>(null);

  useNotePosition(noteRef, zoneRef);

  const clickNoteHandler = useCallback(() => {
    changeNotesAppearance(note.id);
  }, [changeNotesAppearance, note.id]);

  return (
    <div
      ref={noteRef}
      className={styles.noteContainer}
      style={{ zIndex: note.appearance === "front" ? 2 : 1 }}
      onClick={clickNoteHandler}
    >
      <textarea />
    </div>
  );
};
