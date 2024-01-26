export type TPositionReference = "start" | "center" | "end"

export type TAnchorReference = {
  vertical: TPositionReference
  horizontal: TPositionReference
}

export type TContentReference = {
  vertical: TPositionReference
  horizontal: TPositionReference
}
