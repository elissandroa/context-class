import { createContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
    const context = createContext(TitleColorContext);

    if(!context){
        console.log("Conext não encontrado");
    }

    return context;
}