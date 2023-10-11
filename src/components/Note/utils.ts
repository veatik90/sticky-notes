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
import { COLORS, DEFAULT_NOTE_SIZE } from "../../shared/constants";
import { getRandomInInterval } from "../../shared/utils/getRandomInInterval";

export const getDefaultNote = (id: string, order: number) => {
  const num = getRandomInInterval(0, COLORS.length - 1);
  return {
    id,
    text: "",
    width: DEFAULT_NOTE_SIZE,
    height: DEFAULT_NOTE_SIZE,
    zIndex: order + 2,
    color: COLORS[num],
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
