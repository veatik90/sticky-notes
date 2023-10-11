import { useLayoutEffect } from "react";
import { getRandomInInterval } from "../../../../shared/utils/getRandomInInterval";
import { DEFAULT_NOTE_SIZE } from "../../../../shared/constants";
import { UseNoteInitParams } from "./interfaces";

export const useNoteInit = (params: UseNoteInitParams) => {
  const { refs, position, sizes, savePosition } = params;

  const { noteRef, parentRef } = refs;

  const { width, height } = sizes;

  useLayoutEffect(() => {
    noteRef.current?.style.setProperty("width", `${width}px`);
    noteRef.current?.style.setProperty("height", `${height}px`);

    if (position?.x && position.y) {
      noteRef.current?.style.setProperty("top", `${position.y}px`);
      noteRef.current?.style.setProperty("left", `${position.x}px`);
    } else {
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
      noteRef.current?.style.setProperty("left", `${posX}px`);
      savePosition(posX, posY);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteRef, parentRef, savePosition]);
};
