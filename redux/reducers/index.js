import { combineReducers } from  'redux';
import giftReducer from './giftReducer';
import inventoryReducer from './carinventoryReducertReducer';
import characterReducer from './inventoryReducer';
export default combineReducers({
    gift: giftReducer,
    inventory: inventoryReducer,
    character: characterReducer
})