import { Note } from "../../shared/interfaces";

export interface WorkingZoneProps {
  notes: Note[];
  changeNotesAppearance: (id: string) => void;
}
