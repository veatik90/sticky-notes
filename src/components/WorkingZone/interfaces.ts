export interface WorkingZoneProps {
  noteIds: string[];
  activeNoteId?: string;
  setActiveNote: (id: string) => void;
  deleteNote: (id: string) => void;
}
