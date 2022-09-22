import React, { createContext } from 'react';
import { listReducer, INITIAL_STATE } from './reducers/listReducer';

export const listContext = createContext();

export const listProvider = ({children}) => {
    const [state, dispatch] = useReducer(listReducer, JSON.parse(localStorage.getItem('list')) || INITIAL_STATE);

    return (
        <>
        </>
    )
}