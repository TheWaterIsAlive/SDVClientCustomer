import { FETCH_GIFT } from '../actions/types';const initialState = {
    items: []
};
export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_GIFT:
            return {
                ...state,
                items:action.payload
            }
        default:
            return state
    }
}