import { useContext } from "react";
import { WordleContext } from "../context/WordleContext";

export const useWordleContext = () => {
    return useContext(WordleContext);
};
