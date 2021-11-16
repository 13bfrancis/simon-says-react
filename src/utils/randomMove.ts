import { MoveEnum } from "../types/MoveEnum";

export function randomMove(): MoveEnum {
  const randomNumber = Math.floor(Math.random() * 4);

  if (randomNumber === 0) return "blue";
  else if (randomNumber === 1) return "green";
  else if (randomNumber === 2) return "orange";
  else if (randomNumber === 3) return "red";

  throw new Error("Number outside of range");
}
