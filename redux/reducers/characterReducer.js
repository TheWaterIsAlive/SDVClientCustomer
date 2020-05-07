import { ADD_CHARACTER } from '../actions/types';const initialState = {
        character: {
        items: [],
        customer: {}
    }
}
export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                order: {customer: action.payload.customer, items: action.payload.inventoryItems}
            }
        default:
            return state
    }
}