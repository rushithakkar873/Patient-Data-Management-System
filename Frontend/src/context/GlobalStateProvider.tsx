import { ReactNode, useReducer } from "react";
import GlobalStateContext from "./GlobalStateContext";
import {globalStateReducer, initialState} from "./globalStateReducer";

const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalStateProvider;