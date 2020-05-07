import { ADD_TO_INVENTORY, REMOVE_FROM_INVENTORY, EMPTY_INVENTORY } from './types';
export const addToInventory = (item) => dispatch => {
    dispatch({
        type: ADD_TO_INVENTORY,
        payload: item
    })
}
export const removeItem = (item) => dispatch => {
    dispatch({
        type: REMOVE_FROM_INVENTORY,
        payload: item
    })
}
export const emptyInventory = () => dispatch => {
    dispatch({
        type: EMPTY_INVENTORY
    })
}