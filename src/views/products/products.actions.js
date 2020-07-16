import axios from 'axios';

const URL = 'https://igti-segunda-aula.herokuapp.com';


export const SAVE_PRODUCT = 'SAVE_PRODUCT';

export const saveProduct = product => async dispatch => {
    try {

        const response = await axios.post(`${URL}/api/product`, product);
        console.log(response);

        if (response.status == 200) {
			dispatch({ type: SAVE_PRODUCT, product: response.data });
		}

        return response;

    } catch (e) {
        if(e.response) {
            return e.response
        }
    }
}


export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const updateProduct = product => async dispatch => {
    try {

        const response = await axios.put(`${URL}/api/product`, product);
        console.log(response);

        if (response.status == 200) {
			dispatch({ type: SAVE_PRODUCT, product: response.data });
		}

        return response;

    } catch (e) {
        if(e.response) {
            return e.response
        }
    }
}



export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const deleteProduct = product => async dispatch => {
    try {

        const response = await axios.delete(`${URL}/api/product/${product._id}`);
        console.log(response);

        if (response.status == 200) {
			dispatch({ type: DELETE_PRODUCT, id: product._id });
		}


        return response;

    } catch (e) {
        if(e.response) {
            return e.response
        }
    }
}


export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => async dispatch => {
    try {

        const response = await axios.get(`${URL}/api/products`);

        console.log(response);

        if (response.status == 200) {
			dispatch({ type: GET_PRODUCTS, products: response.data});
		}

        return response;

    } catch (e) {
        if(e.response) {
            return e.response
        }
    }
}