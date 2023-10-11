// export const notesCustomComparator = (
//   prevProps: NoteProps,
//   nextProps: NoteProps
// ) => {
//   return (
//     JSON.stringify(prevProps.note) === JSON.stringify(nextProps.note) &&
//     prevProps.changeNotesAppearance === nextProps.changeNotesAppearance &&
//     prevProps.deleteNote === nextProps.deleteNote
//   );
// };

import { LocalStorageService } from "../../services/localStorage";
import { DEFAULT_NOTE_SIZE } from "../../shared/constants";

export const getDefaultNote = (id: string, order: number) => {
  return {
    id,
    text: "",
    width: DEFAULT_NOTE_SIZE,
    height: DEFAULT_NOTE_SIZE,
    zIndex: order + 2,
  };
};

export const initNote = (id: string, order: number) => {
  const lsNote = LocalStorageService.getNoteById(id);

  return lsNote || getDefaultNote(id, order);
};

export const checkNoteExist = (id: string) => {
  const lsNote = LocalStorageService.getNoteById(id);
  return Boolean(lsNote);
};
