import { useEffect } from "react";
import { getRandomInInterval } from "../../../shared/utils/getRandomInInterval";
import { DEFAULT_NOTE_SIZE } from "../../../shared/constants";

export const useNotePosition = (
  noteRef: React.RefObject<HTMLDivElement>,
  parentRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const boundaries = parentRef.current?.getBoundingClientRect();

    const posX = getRandomInInterval(
      0,
      (boundaries?.right ?? 0) - DEFAULT_NOTE_SIZE
    );

    const posY = getRandomInInterval(
      0,
      (boundaries?.top ?? 0) + DEFAULT_NOTE_SIZE
    );

    noteRef.current?.style.setProperty("top", `${posY}px`);
    noteRef.current?.style.setProperty("right", `${posX}px`);
  }, [noteRef, parentRef]);
};
