import { MoveEnum } from "../types/MoveEnum";
import { randomMove } from "./randomMove";

export const generateMoves = (numberOfMoves: number) => {
  const movesArray: MoveEnum[] = [];
  for (let i = 0; i < numberOfMoves; i++) {
    movesArray.push(randomMove());
  }
  return movesArray;
};
