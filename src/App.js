import React, { useContext, useEffect, useReducer } from 'react';
import Header from './components/Header';
import List from './components/List';
import { listReducer, INITIAL_STATE } from './reducers/listReducer';
import './app.css';

const App = () => {
    const [state, dispatch] = useReducer(listReducer, JSON.parse(localStorage.getItem('list')) || INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(state));
    }, [state]);

    const handleSubmit = (e, inputRef) => {
        e.preventDefault();
        dispatch({
            type: 'ADD', 
            payload: { 
                name: inputRef.current.value, 
                completed: false
            }
        });

        inputRef.current.value = '';
    }

    return (
        <div className="container">
            <Header handleSubmit={handleSubmit} />
            <List state={state} dispatch={dispatch} />
        </div>
    )
}

export default App;