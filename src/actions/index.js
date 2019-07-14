import * as types from '../constants/ActionType';

export const addToCart = (product, quantity) => ({
    type: types.ADD_TO_CART,
    product,
    quantity
});

export const changeMessage = message => ({
    type: types.CHANGE_MESSAGE,
    message
});