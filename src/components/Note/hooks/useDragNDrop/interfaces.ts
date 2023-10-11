export interface NoteRefs {
  noteRef: React.RefObject<HTMLDivElement>;
  parentRef: React.RefObject<HTMLDivElement>;
  innerRef: React.RefObject<HTMLDivElement>;
  trashZoneRef: React.RefObject<HTMLDivElement>;
}

export interface UseDragNDropParams {
  id: string;
  refs: NoteRefs;
  deleteNote: (id: string) => void;
}
