import React from 'react';
import { ReactSortable } from "react-sortablejs";

const List = ({state, dispatch}) => {
    const handleToggle = id => {
        dispatch({type: 'TOGGLE', payload: { id }});
    }

    const handleRemove = id => {
        dispatch({type: 'REMOVE', payload: { id }});
    }

    const setList = newState => {
        dispatch({type: 'SET_LIST', payload: { list: newState }});
    }

    return (
        <div className="content">
            {console.log(state)}

            <ReactSortable
                tag="ul"
                className="list"
                list={state.items}
                setList={(newState) => setList(newState)}
            >
            {
                state.items.map(item => {
                    return <li onClick={() => handleToggle(item.id)} key={item.id} className={item.completed ? 'completed' : ''}>
                        {/* {item.completed ? <span className="completed">&#9745;</span> : <span></span>} */}
                        <span>{item.name}</span>
                        <button type="button" onClick={() => handleRemove(item.id)}>&times;</button>
                    </li>
                })
            }
            </ReactSortable>
        </div>
    )
}

export default List;