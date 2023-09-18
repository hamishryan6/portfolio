import { Children, ReactNode, createContext, useContext, useState } from "react";
import { JsxElement } from "typescript";
import { modalStateContext } from "./types";

const modalContext = createContext<modalStateContext | undefined>(undefined)

export const useModalContext = () => {
    const modalState = useContext(modalContext)

    if (modalState === undefined) { throw new Error('Context is undefined') }
    else { return modalState }
}

export default modalContext