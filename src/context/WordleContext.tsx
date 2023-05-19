/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useEffect, useState } from "react";
import { interfaceBoard, interfaceWord } from "../interfaces";
import { words as dataWords } from "../constants";
import { generateWord, updateLocalStorage } from "../helpers";

interface interfaceInitialState {
    word: interfaceWord;
    words: interfaceWord[];
    board: {
        id: number;
        letterCorrect: string;
        letterGuess: string;
        stateLetter: string;
    }[][];
    numberOfChange: number;
    winner: boolean;
    handleSetWord: () => void;
    handleSetBoard: (id: number, valueLetter: string) => void;
    handleNumberOfChange: () => void;
    handleRestAplication: () => void;
}

export const WordleContext = createContext({} as interfaceInitialState);

const generateBoard = (word: interfaceWord) => {
    const newBoard = [0, 1, 2, 3, 4].map((_, indexRow) =>
        word.name.split("").map((col, indexCol) => ({
            id: +`${indexRow}${indexCol}`,
            stateLetter: "null",
            letterCorrect: col,
            letterGuess: "",
        }))
    );

    return newBoard;
};

export const WordProvider = ({ children }: any) => {
    const [word, setWord] = useState<interfaceWord>(
        JSON.parse(localStorage.getItem("wordle_word")!) ?? generateWord()
    );

    const [words, setWords] = useState<interfaceWord[]>(
        JSON.parse(localStorage.getItem("wordle_words")!) ?? dataWords
    );

    const [board, setBoard] = useState<interfaceBoard[][]>(
        JSON.parse(localStorage.getItem("wordle_board")!) ?? generateBoard(word)
    );

    const [numberOfChange, setNumberOfChange] = useState(
        JSON.parse(localStorage.getItem("worle_numberOfChange")!) ?? 0
    );

    const [winner, setWinner] = useState(false);

    useEffect(() => {
        JSON.parse(localStorage.getItem("wordle_board")!) ??
            setBoard(generateBoard(word));
    }, [word]);

    const handleSetWord = () => {
        setWinner(false);
        const newWord = generateWord();
        setWord(newWord);
        updateLocalStorage("wordle_word", newWord);
    };

    const handleSetBoard = (id: number, valueLetter: string) => {
        const newBoard = board.map((row) =>
            row.map((col) =>
                col.id === id
                    ? {
                          ...col,
                          letterGuess: valueLetter,
                      }
                    : col
            )
        );

        updateLocalStorage("wordle_board", newBoard);
        setBoard(newBoard);
    };

    const handleNumberOfChange = () => {
        if (board[numberOfChange].some((char) => char.letterGuess === "")) {
            return alert("Debes de llenar todas");
        }

        const newBoard = board.map((row, indexRow) => {
            if (indexRow === numberOfChange) {
                return row.map((col) => {
                    if (col.letterCorrect === col.letterGuess) {
                        return {
                            ...col,
                            stateLetter: "green",
                        };
                    }

                    if (word.name.includes(col.letterGuess)) {
                        return {
                            ...col,
                            stateLetter: "yellow",
                        };
                    }

                    return {
                        ...col,
                        stateLetter: "grey",
                    };
                });
            }
            return row;
        });

        setBoard(newBoard);
        updateLocalStorage("wordle_board", newBoard);

        if (
            newBoard[numberOfChange].every((col) => col.stateLetter === "green")
        ) {
            const newWords = words.map((itemWord) =>
                itemWord.id === word.id ? { ...word, state: true } : itemWord
            );

            setWords(newWords);
            updateLocalStorage("wordle_words", newWords);
            setNumberOfChange(0);
            updateLocalStorage("worle_numberOfChange", 0);
            localStorage.removeItem("wordle_board");
            setWinner(true);
            return;
        }

        setNumberOfChange(numberOfChange + 1);
        updateLocalStorage("worle_numberOfChange", numberOfChange + 1);

        if (numberOfChange === 5) return alert("cagaste we");
    };

    const handleRestAplication = () => {
        const newWord = generateWord();
        setWord(newWord);
        updateLocalStorage("wordle_word", newWord);
        setNumberOfChange(0);
        updateLocalStorage("worle_numberOfChange", 0);
        localStorage.removeItem("wordle_board");
    };

    const store: interfaceInitialState = {
        words,
        word,
        board,
        numberOfChange,
        winner,
        handleSetWord,
        handleSetBoard,
        handleNumberOfChange,
        handleRestAplication,
    };

    return (
        <WordleContext.Provider value={store}>
            {children}
        </WordleContext.Provider>
    );
};
