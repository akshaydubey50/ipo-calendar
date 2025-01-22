import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { useIPO } from "../hook/useIPO";
import { IpoDetails } from "../types";

interface IPOHookReturn {
    currentItem: IpoDetails;
    setCurrentItem: (item: IpoDetails|null) => void;
    isDetailShowed: boolean,
    setIsDetailShowed: (value: boolean) => void;
}

interface IPOContextType {
    isReady: boolean;
    ipoHook: IPOHookReturn;
}

export const IPOModuleContext = createContext<IPOContextType | undefined>(undefined);

export function IPOModuleProvider({ children }: { children: ReactNode }) {
    const [isReady, setIsReady] = useState(false);
    const ipoHook = useIPO();  // Using the hook directly

    useEffect(() => {
        setIsReady(true);
    }, []);

    const contextValue: IPOContextType = {
        isReady,
        ipoHook
    };

    return (
        <IPOModuleContext.Provider value={contextValue}>
            {isReady ? children : <p>Not ready</p>}
        </IPOModuleContext.Provider>
    );
}

export const useIPOModuleContext = () => {
    const context = useContext(IPOModuleContext);

    if (context === undefined) {
        throw new Error("useIPOModuleContext must be used within a IPOModuleProvider");
    }

    return context;
};