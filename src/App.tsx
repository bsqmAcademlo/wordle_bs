import { AttemptsRemaining } from "./components/AttemptsRemaining";
import { Board } from "./components/Board";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { VerifyWord } from "./components/VerifyWord";
import { Modalword } from "./components/modalWord";

export const App = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Board />
                <VerifyWord />
                <AttemptsRemaining />
            </Container>
            <Modalword />
        </>
    );
};
