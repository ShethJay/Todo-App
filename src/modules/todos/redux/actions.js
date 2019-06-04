import * as actionTypes from './actionTypes';

export const addTodo = (title) => {
    return{
        type: actionTypes.ADD_TODO,
        payload: title.toUpperCase()
    }
}
export const removeTodo = (id) => {
    return{
        type: actionTypes.REMOVE_TODO,
        payload: id
    }
}
export const checkTodo = (id, isChecked) => {
    return{
        type: actionTypes.CHECK_TODO,
        payload: {id,isChecked}
    }
}
export const updateTodo = (id, todo) => {
    return{
        type: actionTypes.UPDATE_TODO,
        payload: {id, todo}
    }
}
export const showAll = () => {
    return{
        type: actionTypes.SHOW_ALL,
    }
}
export const isActive = () => {
    return{
        type: actionTypes.IS_ACTIVE,
        
    }
}
export const isComplete = () => {
    return{
        type: actionTypes.IS_COMPLETE,
        
    }
}
     