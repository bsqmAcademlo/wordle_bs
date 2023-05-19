/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import { useWordleContext } from "../../hooks/useWordleContext";
import { BoardItem } from "../BoardItem";

export const Board = () => {
    const { board, numberOfChange } = useWordleContext();

    return (
        <div className="board">
            {board.map((row, indexRow) => {
                return (
                    <div key={indexRow} className="board__row">
                        {row.map((col) => (
                            <BoardItem
                                disableInput={indexRow === numberOfChange}
                                key={col.id}
                                id={col.id}
                                stateLetter={col.stateLetter}
                                letterGuess={col.letterGuess}
                            />
                        ))}
                    </div>
                );
            })}
        </div>
    );
};
