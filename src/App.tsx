import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Grid } from "./components/Grid";
import { AnimatedButton } from "./components/Button";
import { wait } from "./utils/wait";
import { MoveEnum } from "./types/MoveEnum";
import { generateMoves } from "./utils/generateMoves";
import { randomMove } from "./utils/randomMove";

function App() {
  const [isRedActive, setRedActive] = useState(false);
  const [isGreenActive, setGreenActive] = useState(false);
  const [isOrangeActive, setOrangeActive] = useState(false);
  const [isBlueActive, setBlueActive] = useState(false);
  const [movesArray, setMovesArray] = useState<MoveEnum[]>(generateMoves(1));
  const [moveCount, setMoveCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showingMove, setShowingMove] = useState(false);

  const handleClick = (move: MoveEnum) => {
    console.log(move);
    if (movesArray[moveCount] === move) {
      setMoveCount(moveCount + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const showMove = async () => {
    setShowingMove(true);
    for (const move of movesArray) {
      await wait(500);
      setButtonActiveStatus(move, true);
      await wait(150);
      setButtonActiveStatus(move, false);
    }
    setShowingMove(false);
  };

  const addMove = () => {
    setMovesArray([...movesArray, randomMove()]);
  };

  const setButtonActiveStatus = (move: MoveEnum, isActive: boolean) => {
    if (move === "blue") {
      setBlueActive(isActive);
    } else if (move === "green") {
      setGreenActive(isActive);
    } else if (move === "orange") {
      setOrangeActive(isActive);
    } else if (move === "red") {
      setRedActive(isActive);
    }
  };

  useEffect(() => {
    (async () => {
      if (moveCount >= movesArray.length - 1) {
        setMoveCount(0);
        addMove();
        await showMove();
      }
    })();
  }, [moveCount]);

  return (
    <Container>
      <Grid>
        <AnimatedButton
          disabled={isGameOver || showingMove}
          onClick={() => handleClick("red")}
          background="red"
          active={isRedActive}
        />
        <AnimatedButton
          disabled={isGameOver || showingMove}
          onClick={() => handleClick("green")}
          background="green"
          active={isGreenActive}
        />
        <AnimatedButton
          disabled={isGameOver || showingMove}
          onClick={() => handleClick("blue")}
          background="blue"
          active={isBlueActive}
        />
        <AnimatedButton
          disabled={isGameOver || showingMove}
          onClick={() => handleClick("orange")}
          background="orange"
          active={isOrangeActive}
        />
      </Grid>
    </Container>
  );
}

export default App;
