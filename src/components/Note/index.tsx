import { FC, useRef, useCallback, useState, memo } from "react";

import styles from "./styles.module.css";
import { NoteProps } from "./interfaces";
import { useNotePosition } from "./hooks/useNotePosition";
import { useDragNDrop } from "./hooks/useDragNDrop";
import { NoteRefs } from "./hooks/useDragNDrop/interfaces";
import { Note as NoteType } from "../../shared/interfaces";
import { DEFAULT_NOTE_SIZE, MAX_ZINDEX } from "../../shared/constants";

export const NoteBase: FC<NoteProps> = (props) => {
  const {
    zoneRef,
    trashZoneRef,
    id,
    order,
    isActive,
    setActiveNote,
    deleteNote,
  } = props;

  console.log("render");

  const [note, setNote] = useState<NoteType>({
    id,
    text: "",
    width: DEFAULT_NOTE_SIZE,
    height: DEFAULT_NOTE_SIZE,
    zIndex: order + 2,
  });

  const noteRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useNotePosition(noteRef, zoneRef);

  const refs: NoteRefs = {
    noteRef,
    trashZoneRef,
    parentRef: zoneRef,
    innerRef,
  };
  useDragNDrop({ id: note.id, refs, deleteNote });

  const clickNoteHandler = useCallback(() => {
    setActiveNote(note.id);
  }, [note.id, setActiveNote]);

  return (
    <div
      ref={noteRef}
      className={styles.noteContainer}
      style={{ zIndex: isActive ? MAX_ZINDEX : note.zIndex }}
      onClick={clickNoteHandler}
    >
      <div ref={innerRef} className={styles.innerContainer}>
        <textarea />
      </div>
    </div>
  );
};

export const Note = memo(NoteBase);
