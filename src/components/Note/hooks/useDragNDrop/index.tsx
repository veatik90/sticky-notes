import { useEffect, useRef } from "react";
import { HEADER_HEIGHT } from "../../../../shared/constants";
import { UseDragNDropParams } from "./interfaces";
import { setBorderColor } from "./utils";

export function useDragNDrop(params: UseDragNDropParams) {
  const { refs, id, deleteNote, savePosition, isActive, position } = params;
  const { noteRef, trashZoneRef, innerRef, parentRef } = refs;
  const isClicked = useRef<boolean>(false);

  const offsets = useRef({ offsetX: 0, offsetY: 0 });
  const notePosition = useRef({ x: position?.x ?? 0, y: position?.y ?? 0 });
  const trazhZoneTop = useRef(0);
  const canDelete = useRef(false);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      const boundaries = noteRef?.current?.getBoundingClientRect();
      const boundariesTrash = trashZoneRef?.current?.getBoundingClientRect();

      const offsetX = e.clientX - (boundaries?.left ?? 0);
      const offsetY = e.clientY - (boundaries?.top ?? 0) + HEADER_HEIGHT;
      offsets.current.offsetX = offsetX;
      offsets.current.offsetY = offsetY;

      trazhZoneTop.current = boundariesTrash?.top ?? 0;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      offsets.current.offsetX = 0;
      offsets.current.offsetY = 0;
      trazhZoneTop.current = 0;
      if (canDelete.current) {
        deleteNote(id);
      }
      canDelete.current = false;
      setBorderColor(trashZoneRef, "inherit");
      if (isActive) {
        savePosition(notePosition.current.x, notePosition.current.y);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;
      const noteBottom = noteRef?.current?.getBoundingClientRect().bottom ?? 0;

      if (noteBottom > trazhZoneTop.current) {
        if (!canDelete.current) {
          setBorderColor(trashZoneRef, "#ff6f3c");
          canDelete.current = true;
        }
      } else {
        if (canDelete.current) {
          setBorderColor(trashZoneRef, "inherit");
          canDelete.current = false;
        }
      }

      notePosition.current.x = e.clientX - offsets.current.offsetX;

      notePosition.current.y = e.clientY - offsets.current.offsetY;

      noteRef.current?.style.setProperty("top", `${notePosition.current.y}px`);
      noteRef.current?.style.setProperty("left", `${notePosition.current.x}px`);
    };

    innerRef.current?.addEventListener("mousedown", onMouseDown);
    innerRef.current?.addEventListener("mouseup", onMouseUp);
    parentRef.current?.addEventListener("mousemove", onMouseMove);
    parentRef.current?.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      innerRef.current?.removeEventListener("mousedown", onMouseDown);
      innerRef.current?.removeEventListener("mouseup", onMouseUp);
      parentRef.current?.removeEventListener("mousemove", onMouseMove);
      parentRef.current?.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, [
    noteRef,
    parentRef,
    innerRef,
    trashZoneRef,
    deleteNote,
    id,
    savePosition,
    isActive,
  ]);
}
