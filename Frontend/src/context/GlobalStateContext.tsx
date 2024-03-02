import { createContext } from 'react';
import { initialState } from './globalStateReducer';
import { GlobalState, GlobalStateAction } from '../types';

const GlobalStateContext = createContext<{
	state: GlobalState;
	dispatch: React.Dispatch<GlobalStateAction>;
}>({
	state: initialState,
	dispatch: () => null,
});

export default GlobalStateContext;
