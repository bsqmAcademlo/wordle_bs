import { useWordleContext } from "../../hooks/useWordleContext";
import "./styles.css";

export const VerifyWord = () => {
    const { handleNumberOfChange, numberOfChange, handleRestAplication } =
        useWordleContext();

    return numberOfChange < 5 ? (
        <button
            className="btn btn__verify"
            onClick={() => handleNumberOfChange()}
        >
            Verificar palabra
        </button>
    ) : (
        <button
            className="btn btn__reload"
            onClick={() => handleRestAplication()}
        >
            Volver a iniciar
        </button>
    );
};
