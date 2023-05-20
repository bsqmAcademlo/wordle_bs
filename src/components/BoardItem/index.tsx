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
        value = value.toLowerCase();
        handleSetBoard(id, value);
        setValueInput(value);
    };

    return (
        <input
            type="text"
            maxLength={1}
            value={valueInput}
            onChange={(e) => handleBoardItem(id, e.target.value)}
            className={`board__row--col ${
                disableInput ? "board__row--enable" : "board__row--disable"
            } ${getColorLetter[stateLetter]}`}
            disabled={!disableInput}
        />
    );
};
