import { useMemo, useState } from "react";
import { Wordex } from "../Wordex";
import "./styles.css";
import { useWordleContext } from "../../hooks/useWordleContext";
import { DarkMode } from "../DarkMode";

export const Navbar = () => {
    const [showWordex, setShowWordex] = useState(false);

    const { words } = useWordleContext();

    const wordsFind = useMemo(
        () => words.filter((word) => word.state),
        [words]
    );

    return (
        <>
            <div className="content__navbar">
                <nav className="navbar">
                    <a href="#">WORDLBS</a>
                    <div className="navbar__icons">
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
        </>
    );
};
