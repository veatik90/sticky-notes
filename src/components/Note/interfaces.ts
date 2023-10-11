export interface NoteProps {
  id: string;
  order: number;
  zoneRef: React.RefObject<HTMLDivElement>;
  trashZoneRef: React.RefObject<HTMLDivElement>;
  isActive: boolean;
  setActiveNote: (id: string) => void;
  deleteNote: (id: string) => void;
}
