import { useEffect } from "react";
import { throttle } from "../../../shared/utils/throttle";

export function useNoteResize(
  noteRef: React.RefObject<HTMLDivElement>,
  saveSizes: (width: number, height: number) => void
) {
  useEffect(() => {
    const note = noteRef?.current;

    if (!note) return;

    const observer = new ResizeObserver(
      throttle((entries) => {
        const { width, height } = (entries as ResizeObserverEntry[])[0]
          .contentRect;
        saveSizes(width, height);
      }, 200)
    );

    observer.observe(note);
    return () => {
      observer.disconnect();
    };
  }, [noteRef, saveSizes]);
}
