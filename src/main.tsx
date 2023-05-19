import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { WordProvider } from "./context/WordleContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <WordProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </WordProvider>
);
