import { useEffect, useState, useCallback, ChangeEvent } from "react";
import { Note } from "../../../../shared/interfaces";
import { checkNoteExist, getDefaultNote, initNote } from "../../utils";
import { UseNoteStateParams } from "./interfaces";
import { LocalStorageService } from "../../../../services/localStorage";

export function useNoteState(params: UseNoteStateParams) {
  const { id, order, isActive } = params;
  const [note, setNote] = useState<Note>(initNote(id, order));

  useEffect(() => {
    if (!checkNoteExist(id)) {
      LocalStorageService.addNote(getDefaultNote(id, order));
    }
  }, [id, order]);

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => {
        LocalStorageService.updateNote(note);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isActive, note]);

  const savePosition = useCallback((posX: number, posY: number) => {
    setNote((prevNote) => ({ ...prevNote, posX, posY }));
  }, []);

  const saveSizes = useCallback((width: number, height: number) => {
    setNote((prevNote) => ({ ...prevNote, width, height }));
  }, []);

  const changeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote((prevNote) => ({ ...prevNote, text: e.target.value }));
  };

  return { note, savePosition, saveSizes, changeInput: changeInputHandler };
}
