import { FC, useCallback, useId, useState } from "react";
import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { WorkingZone } from "../../components/WorkingZone";

export const Dashboard: FC = () => {
  const pageId = useId();
  const [noteIds, setNoteIds] = useState<string[]>([]);
  const [activeNoteId, setActiveNoteId] = useState<string | undefined>();

  const addNewNoteHandler = () => {
    setNoteIds((prevIds) => {
      return [...prevIds, `${pageId}-${prevIds.length}`];
    });
  };

  const setActiveNoteHandler = useCallback((id: string) => {
    setActiveNoteId(id);
  }, []);

  const deleteNoteHandler = useCallback((id: string) => {
    setNoteIds((prevIds) => {
      return prevIds.filter((noteId) => noteId !== id);
    });
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <Header addNote={addNewNoteHandler} />
      <WorkingZone
        noteIds={noteIds}
        activeNoteId={activeNoteId}
        setActiveNote={setActiveNoteHandler}
        deleteNote={deleteNoteHandler}
      />
    </div>
  );
};
