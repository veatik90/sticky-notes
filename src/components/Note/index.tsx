import { FC, useRef, useCallback, memo } from "react";

import styles from "./styles.module.css";
import { NoteProps } from "./interfaces";
import { useNoteInit } from "./hooks/useNoteInit";
import { useDragNDrop } from "./hooks/useDragNDrop";
import { NoteRefs } from "./hooks/useDragNDrop/interfaces";
import { Position, Size } from "../../shared/interfaces";
import { MAX_ZINDEX } from "../../shared/constants";
import { useNoteResize } from "./hooks/useNoteResize";
import { useNoteState } from "./hooks/useNoteState";

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

  const { note, savePosition, saveSizes, changeInput } = useNoteState({
    id,
    order,
    isActive,
  });

  const noteRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const position: Position = { x: note.posX, y: note.posY };
  const sizes: Size = { width: note.width, height: note.height };

  useNoteInit({
    refs: { noteRef, parentRef: zoneRef },
    position,
    sizes,
    savePosition,
  });

  useNoteResize(noteRef, saveSizes);

  const refs: NoteRefs = {
    noteRef,
    trashZoneRef,
    parentRef: zoneRef,
    innerRef,
  };

  useDragNDrop({
    id: note.id,
    refs,
    deleteNote,
    savePosition,
    isActive,
    position,
  });

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
        <textarea value={note.text} onChange={changeInput} />
      </div>
    </div>
  );
};

export const Note = memo(NoteBase);
