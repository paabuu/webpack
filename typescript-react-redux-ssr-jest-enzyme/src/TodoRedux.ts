import { combineReducers } from 'redux';

const initialState = [];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { text: action.text, id: state.length, done: false }];
            break;
        case 'TOGGLE_TODO':
            return state.map(item => {
                if (item.id === action.todo.id) {
                    return {
                        ...action.todo,
                        done: !action.todo.done
                    }
                }
                return item;
            });
            break;
        default:
            return state;
    }
}

export function addTodo(text: string) {
    return {
        type: 'ADD_TODO',
        text
    }
}

export interface Todo {
    text: string,
    id: number,
    done: boolean
}

export function toggleTodo(todo: Todo) {
    return {
        type: 'TOGGLE_TODO',
        todo
    }
}

export default todos;