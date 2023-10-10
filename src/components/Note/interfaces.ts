import { Note } from "../../shared/interfaces";

export interface NoteProps {
  note: Note;
  zoneRef: React.RefObject<HTMLDivElement>;
  changeNotesAppearance: (id: string) => void;
}
