import React, {
    createContext,
    useMemo,
    useRef,
    useState,
} from "react";

export const AppContext = createContext();

export default function Context({ children }) {
    const [message, setMessage] = useState(null);
    const textInputRef = useRef(null);

    const clearText = () => {
        textInputRef.current.clear();
    };

    const appContextValue = useMemo(
        () => ({ message, setMessage, clearText, textInputRef }),
        [message, setMessage, clearText, textInputRef]
    );
    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    );
}
