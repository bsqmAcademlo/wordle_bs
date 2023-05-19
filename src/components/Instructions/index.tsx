import "./styles.css";

interface Props {
    showInstructions: boolean;
    handleShowInstructions: () => void;
}

export const Instructions = ({
    handleShowInstructions,
    showInstructions,
}: Props) => {
    const data = {
        ej1: [
            {
                value: "G",
                classBox: "green",
            },
            {
                value: "A",
                classBox: null,
            },
            {
                value: "T",
                classBox: null,
            },
            {
                value: "O",
                classBox: null,
            },
            {
                value: "S",
                classBox: null,
            },
        ],

        ej2: [
            {
                value: "V",
                classBox: null,
            },
            {
                value: "A",
                classBox: null,
            },
            {
                value: "C",
                classBox: "yellow",
            },
            {
                value: "A",
                classBox: null,
            },
            {
                value: "L",
                classBox: null,
            },
        ],

        ej3: [
            {
                value: "C",
                classBox: null,
            },
            {
                value: "A",
                classBox: null,
            },
            {
                value: "N",
                classBox: null,
            },
            {
                value: "T",
                classBox: null,
            },
            {
                value: "O",
                classBox: "grey",
            },
        ],
    };

    const styleShowModal = showInstructions ? "modal modal__show" : "modal";

    return (
        <div className={styleShowModal}>
            <div className="intructions">
                <h2 className="center">Cómo jugar</h2>
                <p>Adivina la palabra oculta en cinco intentos.</p>
                <p>Cada intento debe ser una palabra válida de 5 letras.</p>
                <p>
                    Después de cada intento el color de las letras cambia para
                    mostrar qué tan cerca estás de acertar la palabra.
                </p>

                <p>
                    <b>Ejemplos</b>
                </p>

                <div className="boxes">
                    {data.ej1.map(({ classBox, value }, i) => (
                        <div
                            key={i}
                            className={
                                classBox
                                    ? `box ${classBox}`
                                    : "box box box_border"
                            }
                        >
                            {value}
                        </div>
                    ))}
                </div>

                <p>
                    La letra <b>G</b> está en la palabra y en la posición
                    correcta.
                </p>

                <div className="boxes">
                    {data.ej2.map(({ classBox, value }, i) => (
                        <div
                            key={i}
                            className={
                                classBox ? `box ${classBox}` : "box box_border"
                            }
                        >
                            {value}
                        </div>
                    ))}
                </div>

                <p>
                    La letra <b>C</b> está en la palabra pero en la posición
                    incorrecta.
                </p>

                <div className="boxes">
                    {data.ej3.map(({ classBox, value }, i) => (
                        <div
                            key={i}
                            className={
                                classBox ? `box ${classBox}` : "box box_border"
                            }
                        >
                            {value}
                        </div>
                    ))}
                </div>
                <p>
                    La letra <b>O</b> no está en la palabra.
                </p>

                <button
                    className="center btn__intructions"
                    onClick={() => handleShowInstructions()}
                >
                    JUGAR
                </button>
            </div>
        </div>
    );
};
