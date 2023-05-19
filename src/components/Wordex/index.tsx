import { useWordleContext } from "../../hooks/useWordleContext";
import "./styles.css";

interface Props {
    showWordex: boolean;
}

export const Wordex = ({ showWordex }: Props) => {
    const { words } = useWordleContext();

    const classWordexShow = showWordex
        ? "container__wordex show__wordex"
        : "container__wordex";

    return (
        <div className={classWordexShow}>
            <h2>
                Wordex {words.filter((word) => word.state).length} /{" "}
                {words.length}
            </h2>
            <div className="wordex">
                {words.map((word) => {
                    return word.state ? (
                        <div key={word.id} className="wordex__item">
                            <span>{word.name}</span>
                            <i className="bx bx-show"></i>
                        </div>
                    ) : (
                        <i key={word.id} className="bx bx-question-mark"></i>
                    );
                })}
            </div>
        </div>
    );
};
