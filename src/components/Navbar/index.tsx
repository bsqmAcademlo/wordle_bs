import { useMemo, useState } from "react";
import { Wordex } from "../Wordex";
import "./styles.css";
import { useWordleContext } from "../../hooks/useWordleContext";
import { DarkMode } from "../DarkMode";
import { Instructions } from "../Instructions";

export const Navbar = () => {
    const [showWordex, setShowWordex] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);

    const { words } = useWordleContext();

    const wordsFind = useMemo(
        () => words.filter((word) => word.state),
        [words]
    );

    const handleShowInstructions = () => {
        setShowInstructions(!showInstructions);
    };

    return (
        <>
            <div className="content__navbar">
                <nav className="navbar">
                    <a href="#">WORDLBS</a>
                    <div className="navbar__icons">
                        <i
                            className="bx bx-info-circle"
                            onClick={() => handleShowInstructions()}
                        ></i>
                        <DarkMode />
                        <i
                            className="bx bxs-game"
                            onClick={() => setShowWordex(!showWordex)}
                        >
                            <span>{wordsFind.length}</span>
                        </i>
                    </div>
                </nav>
            </div>
            <Wordex showWordex={showWordex} />
            <Instructions
                showInstructions={showInstructions}
                handleShowInstructions={handleShowInstructions}
            />
        </>
    );
};
