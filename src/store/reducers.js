import { combineReducers } from 'redux';

import { providers } from '../views/providers/providers.reducer';
import { products } from '../views/products/products.reducer';

export default combineReducers({
    providers,
    products,
});