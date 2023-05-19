import { useEffect, useState } from "react";
import { updateLocalStorage } from "../../helpers";

export const DarkMode = () => {
    const dark = localStorage.getItem("wordle_darkmode");

    const [isDark, setIsDark] = useState(dark ? JSON.parse(dark) : false);

    useEffect(() => {
        if (dark ? JSON.parse(dark) : false) {
            document.body.classList.add("darkMode");
        } else {
            document.body.classList.remove("darkMode");
        }
    }, [dark]);

    const handleIsDark = () => {
        setIsDark(!isDark);

        document.body.classList.toggle("darkMode")
            ? updateLocalStorage("wordle_darkmode", true)
            : updateLocalStorage("wordle_darkmode", false);
    };

    return (
        <>
            {isDark ? (
                <i className="bx bx-sun" onClick={() => handleIsDark()}></i>
            ) : (
                <i className="bx bx-moon" onClick={() => handleIsDark()}></i>
            )}
        </>
    );
};
