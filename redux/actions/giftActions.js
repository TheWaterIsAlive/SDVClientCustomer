import { FETCH_GIFT } from './types';
import { getGift } from '../../data';
export const fetchGift = () => dispatch => {
    const gift = getGift();
     dispatch({
        type: FETCH_GIFT,
        payload: gift
    })
}