import { useWordleContext } from "../../hooks/useWordleContext";

import "./styles.css";

export const Modalword = () => {
    const { word, winner, handleSetWord } = useWordleContext();

    const classModalWordShow = winner
        ? "modalWorl modalWorl__show"
        : "modalWorl";

    return (
        <div className={classModalWordShow}>
            <div className="modalWord__info">
                {winner && (
                    <>
                        <h2>Palabra desbloqueada!!!</h2>
                        <p>
                            Haz desbloqueado una nueva palabra, esta palabra la
                            podras ver en la seccion de palabras{" "}
                            <span>
                                <i className="bx bxs-game"></i>
                            </span>
                        </p>
                        <span className="info__name">{word.name}</span>
                        <p className="info__desc">{word.desc}</p>
                        <i
                            className="bx bx-x icon__close"
                            onClick={() => handleSetWord()}
                        ></i>
                    </>
                )}
            </div>
        </div>
    );
};
