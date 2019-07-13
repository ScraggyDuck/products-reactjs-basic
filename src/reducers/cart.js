import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('cart'));
var initialState = [

    {
        product: {
            id: 1,
            name: 'Iphone 7 plus',
            image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795425349',
            rating: 3,
            description: 'Sản phẩm do apple sản xuất',
            price: 500,
            inventory: 10
        },
        quantity: 5
    },
    {
        product: {
            id: 3,
            name: 'Xiaomi note 4S',
            image: 'https://cdn.tgdd.vn/Products/Images/42/84905/xiaomi-redmi-note-4-1-400x460.png',
            rating: 5,
            description: 'Sản phẩm do Trung Quốc sản xuất',
            price: 450,
            inventory: 20
        },
        quantity: 2
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return state;
        default:
            return state;
    }
};

export default cart;