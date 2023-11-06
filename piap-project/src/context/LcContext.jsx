import { createContext, useState } from "react";

export const LcContext = createContext();

export const LcContextProvider = ({ children }) => {
    const [curso, setCurso] = useState("");
    const [numQuestion, setNumQuestion] = useState(0);

    return (
        <LcContext.Provider value={{ curso, setCurso, numQuestion, setNumQuestion }}>
            {children}
        </LcContext.Provider>
    );
};
