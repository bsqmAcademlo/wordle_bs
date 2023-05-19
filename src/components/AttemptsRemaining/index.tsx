import "./styles.css";
import { useWordleContext } from "../../hooks/useWordleContext";

export const AttemptsRemaining = () => {
    const { numberOfChange } = useWordleContext();

    return (
        <div className="attemptsRemaining">
            te quedan <span>{5 - numberOfChange}</span>
        </div>
    );
};
