import { FC, useId, useState } from "react";
import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { WorkingZone } from "../../components/WorkingZone";
import { Note } from "../../shared/interfaces";
import { DEFAULT_NOTE_SIZE } from "../../shared/constants";

export const Dashboard: FC = () => {
  const pageId = useId();
  const [notes, setNotes] = useState<Note[]>([]);

  const addNewNoteHandler = () => {
    setNotes((prevNotes) => {
      const newNote: Note = {
        id: `${pageId}-${prevNotes.length}`,
        text: "",
        width: DEFAULT_NOTE_SIZE,
        height: DEFAULT_NOTE_SIZE,
        appearance: "back",
      };
      return [...prevNotes, newNote];
    });
  };

  const changeNoteAppearanceHandler = (id: string) => {
    setNotes((prevNotes) => {
      const updatedNotes: Note[] = prevNotes.map((note) => ({
        ...note,
        appearance: id === note.id ? "front" : "back",
      }));

      return updatedNotes;
    });
  };

  return (
    <div className={styles.dashboardContainer}>
      <Header addNote={addNewNoteHandler} />
      <WorkingZone
        notes={notes}
        changeNotesAppearance={changeNoteAppearanceHandler}
      />
    </div>
  );
};
