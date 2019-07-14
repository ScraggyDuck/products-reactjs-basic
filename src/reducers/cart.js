import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var index = -1;
    var {product} = action;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, product);
            var result = [...state];
            if(index !== -1){
                result[index] = {
                    ...result[index],
                    quantity: result[index].quantity + 1
                }
            }
            else {
                result.push({
                    product,
                    quantity: 1
                });
            }
            localStorage.setItem('cart', JSON.stringify(result));
            return result;
        default:
            return state;
    }
};

var findIndex = (cart, product) => {
    var index = -1;
    if(cart.length > 0){
        for(var i = 0; i < cart.length; i++)
            if( cart[i].product.id === product.id){
                index = i;
                break;
            }
    }
    return index;
}

export default cart;