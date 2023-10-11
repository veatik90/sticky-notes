export interface WorkingZoneProps {
  noteIds: string[];
  activeNoteId?: string;
  isLoading?: boolean;
  setActiveNote: (id: string) => void;
  deleteNote: (id: string) => void;
}
