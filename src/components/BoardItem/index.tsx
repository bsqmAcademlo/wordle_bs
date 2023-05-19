import { useEffect, useState } from "react";
import { getColorLetter } from "../../constants";
import { useWordleContext } from "../../hooks/useWordleContext";
import "./styles.css";

interface Props {
    id: number;
    stateLetter: string;
    letterGuess: string;
    disableInput: boolean;
}

export const BoardItem = ({
    stateLetter,
    id,
    disableInput,
    letterGuess,
}: Props) => {
    const [valueInput, setValueInput] = useState(letterGuess);
    const { handleSetBoard } = useWordleContext();

    useEffect(() => {
        setValueInput(letterGuess);
        return setValueInput(letterGuess);
    }, [letterGuess]);

    const handleBoardItem = (id: number, value: string) => {
        handleSetBoard(id, value.toLowerCase());
    };

    return disableInput ? (
        <input
            type="text"
            className={`board__row--col board__row--enable ${getColorLetter[stateLetter]}`}
            onBlur={(e) => handleBoardItem(id, e.target.value)}
            maxLength={1}
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
        />
    ) : (
        <input
            disabled
            type="text"
            className={`board__row--col board__row--disable ${getColorLetter[stateLetter]}`}
            onBlur={(e) => handleBoardItem(id, e.target.value)}
            max={1}
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
        />
    );
};
