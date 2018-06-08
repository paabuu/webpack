import { combineReducers } from 'redux';

const initialState = [];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        default:
            return state;
    }
}

export function addTodo(todo) {
    console.log(todo);
    
    return {
        type: 'ADD_TODO',
        todo
    }
}

export default todos;