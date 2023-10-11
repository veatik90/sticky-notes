import { Note } from "../../../../shared/interfaces";

export interface NoteRefs {
  noteRef: React.RefObject<HTMLDivElement>;
  parentRef: React.RefObject<HTMLDivElement>;
}

export interface UseNoteInitParams {
  refs: NoteRefs;
  note: Note;
  savePosition: (posX: number, posY: number) => void;
}
