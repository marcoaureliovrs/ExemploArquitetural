import { 
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCTS,
    SAVE_PRODUCT,
} from './products.actions';

const INITIAL_STATE = {
	_id: '',
    productName: '',
    price:0,
    description:'',
    img_url:'',
}

const products = (state = [], action) => {
	switch (action.type) {
        case SAVE_PRODUCT:
            const newProvider = {
                _id: action.product.id,
                productName: action.product.productName,
                price: action.product.price,
                description: action.product.description,
                img_url: action.product.img_url,
            }
            return [...state, newProvider]
		case UPDATE_PRODUCT:
            return state.map(product => {
                if(product.id === action.product.id) {
                    return action.product;
                }
                return product; 
            });
        case DELETE_PRODUCT:
            return state.filter(product => {
                return product.id !== action.id;
            });
        case GET_PRODUCTS:
            return action.products 
        default:
			return state;
	}
}

export { products }