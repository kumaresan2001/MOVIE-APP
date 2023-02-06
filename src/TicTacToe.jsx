import { NotListedLocation } from "@mui/icons-material";
import { useState } from "react";
import Button from "@mui/material/Button";

export function TicTacToe() {
  const [board, setboard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isTrue, setIsture] = useState(true);
  const handClick = (index) => {
    if (!winner) {
      const boardcopy = [...board];
      boardcopy[index] = isTrue ? "x" : "o";
      setboard(boardcopy);
      setIsture(!isTrue);
    }
  };
  const decidewinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const winner = decidewinner(board);
  const restart = () => {
    setboard(Array(9).fill(null));
    setIsture(true);
  };
  return (
    <div className="tic">
      <h1> TicTacToe Game</h1>
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handClick(index)} />
        ))}
      </div>
      <Button variant="containd" onClick={restart}>
        Restart
      </Button>
      {winner ? <h1>The winner is:{winner}</h1> : null}
    </div>
  );
}
function GameBox({ val, onPlayerClick }) {
  const styles = {
    color: val === "x" ? "green" : "red",
  };
  return (
    <div style={styles} onClick={onPlayerClick} className="game-box">
      {val}
    </div>
  );
}
