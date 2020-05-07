import { ADD_CHARACTER } from './types';
export const addCharacter = (data) => dispatch => {
    dispatch({
        type: ADD_CHARACTER,
        payload: data
    })
}