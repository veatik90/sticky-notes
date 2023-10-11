import { useEffect, useState } from "react";
import { RestService } from "..";
import { LocalStorageService } from "../../localStorage";

export function useGetNotes() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [noteIds, setNoteIds] = useState<string[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const localNotes = LocalStorageService.getNotes();
    RestService.getNotes()
      .then((notes) => {
        LocalStorageService.deleteNotes();
        LocalStorageService.setNotes(notes);
        const ids = notes.map((nt) => nt.id);
        setNoteIds(ids);
      })
      .catch((e) => {
        setError(e);
        const ids = localNotes.map((nt) => nt.id);

        setNoteIds(ids);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, error, noteIds };
}
