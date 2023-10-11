export type Note = {
  id: string;
  text: string;
  width: number;
  height: number;
  zIndex: number;
  posX?: number;
  posY?: number;
};

export type Position = {
  x?: number;
  y?: number;
};

export type Size = {
  width: number;
  height: number;
};
