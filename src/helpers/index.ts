/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { words } from "../constants";
import { interfaceWord } from "../interfaces";

export const generateWord = () => {
    const wordsInLocal: interfaceWord[] = JSON.parse(
        localStorage.getItem("wordle_words")!
    );

    let wordsPlay = null;

    if (wordsInLocal) {
        wordsPlay = wordsInLocal.filter((word) => !word.state);
    } else {
        wordsPlay = words.filter((word) => !word.state);
    }

    const indexRamdon = Math.trunc(Math.random() * wordsPlay.length);
    const word = wordsPlay[indexRamdon];
    updateLocalStorage("wordle_word", word);
    updateLocalStorage("wordle_words", wordsInLocal);
    return word;
};

export function updateLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}
