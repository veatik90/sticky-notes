import { Position, Size } from "../../../../shared/interfaces";

export interface NoteRefs {
  noteRef: React.RefObject<HTMLDivElement>;
  parentRef: React.RefObject<HTMLDivElement>;
}

export interface UseNoteInitParams {
  refs: NoteRefs;
  position?: Position;
  sizes: Size;
  savePosition: (posX: number, posY: number) => void;
}
