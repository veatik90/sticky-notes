import { Position } from "../../../../shared/interfaces";

export interface NoteRefs {
  noteRef: React.RefObject<HTMLDivElement>;
  parentRef: React.RefObject<HTMLDivElement>;
  innerRef: React.RefObject<HTMLDivElement>;
  trashZoneRef: React.RefObject<HTMLDivElement>;
}

export interface UseDragNDropParams {
  id: string;
  refs: NoteRefs;
  isActive: boolean;
  position?: Position;
  deleteNote: (id: string) => void;
  savePosition: (posX: number, posY: number) => void;
}
