export const setBorderColor = (
  ref: React.RefObject<HTMLDivElement>,
  color: string
) => {
  ref.current?.style.setProperty("border-color", color);
};
