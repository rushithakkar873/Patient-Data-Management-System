import { useContext } from "react";
import GlobalStateContext from "./GlobalStateContext";

export const useGlobalState = () => useContext(GlobalStateContext);