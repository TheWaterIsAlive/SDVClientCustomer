import { ADD_TO_INVENTORY, EMPTY_INVENTORY, REMOVE_FROM_INVENTORY } from '../actions/types';


const initialState = {
    inventory: [],
    //total: 0,
}

export default function(state=initialState, action) {
    switch(action.type){
        case ADD_TO_INVENTORY:
            return {
                ...state,
                inventory: [action.payload, ...state.inventory],
               // total: state.total + action.payload.cost
            }
        case EMPTY_INVENTORY:
            return {
                ...state,
                inventory: [],
               // total: 0
            }
        case REMOVE_FROM_INVENTORY:
            return {
                ...state,
                inventory: state.inventory.filter((item, i) => i !== action.payload.index),
                //total: state.total - action.payload.item.cost
            }
        default:
            return state
    }
}