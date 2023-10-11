import { FC, useCallback, useEffect, useId, useState } from "react";
import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { WorkingZone } from "../../components/WorkingZone";
import { LocalStorageService } from "../../services/localStorage";
import { useGetNotes } from "../../services/rest/hooks/useGetNotes";

export const Dashboard: FC = () => {
  const pageId = useId();
  const [noteIds, setNoteIds] = useState<string[]>([]);
  const [activeNoteId, setActiveNoteId] = useState<string | undefined>();

  const { isLoading, error, noteIds: ids } = useGetNotes();

  useEffect(() => {
    if (!isLoading && ids) {
      setNoteIds(ids);
    }
  }, [ids, isLoading]);

  const addNewNoteHandler = () => {
    setNoteIds((prevIds) => {
      return [...prevIds, `${pageId}-${prevIds.length}-${Math.random()}`];
    });
  };

  const setActiveNoteHandler = useCallback((id: string) => {
    setActiveNoteId(id);
  }, []);

  const deleteNoteHandler = useCallback((id: string) => {
    setNoteIds((prevIds) => {
      return prevIds.filter((noteId) => noteId !== id);
    });
    LocalStorageService.deleteNote(id);
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <Header addNote={addNewNoteHandler} error={error} />
      <WorkingZone
        noteIds={noteIds}
        activeNoteId={activeNoteId}
        isLoading={isLoading}
        setActiveNote={setActiveNoteHandler}
        deleteNote={deleteNoteHandler}
      />
    </div>
  );
};
