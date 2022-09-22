export const INITIAL_STATE = {
    items: []
};

export const listReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LIST':
            return {
                items: action.payload.list
            }
        case 'ADD':
            return {
                items: [
                    ...state.items,
                    { 
                        id: state.items.length,
                        name: action.payload.name,
                        completed: action.payload.completed
                    }
                ]
            }
        case 'TOGGLE':
            return {
                items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.completed = !item.completed;
                    }
                    return item;
                })
            }
        case 'REMOVE':
            return {
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}