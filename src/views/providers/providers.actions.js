import axios from 'axios';
import uuid from 'uuid';

const URL = 'http://localhost:4000';


export const SAVE_PROVIDER = 'SAVE_PROVIDER';

export const saveProvider = provider => async dispatch => {
    try {

        provider.id = uuid.v4()
        const response = await axios.post(`${URL}/api/provider`, provider);
        console.log(response);

        //if (response.status == 200) {
			dispatch({ type: SAVE_PROVIDER, provider: provider });
		//}

        return response;

    } catch (e) {
        if(e.response) {
            return e.response
        }
    }
}


export const UPDATE_PROVIDER = 'UPDATE_PROVIDER';

export const updateProvider = provider => async dispatch => {
    try {

        const response = await axios.put(`${URL}/api/provider`, provider);
        console.log(response);

        //if (response.status == 200) {
			dispatch({ type: SAVE_PROVIDER, provider: provider });
		//}

        return response;

    } catch (e) {
        if(e.response) {
            return e.response
        }
    }
}



export const DELETE_PROVIDER = 'DELETE_PROVIDER';

export const deleteProvider = provider => async dispatch => {
    try {

        const response = await axios.delete(`${URL}/api/provider/${provider.id}`);
        console.log(response);

        if (response.status == 200) {
			dispatch({ type: DELETE_PROVIDER, id: provider.id });
		}


        return response;

    } catch (e) {
        if(e.response) {
            return e.response
        }
    }
}


export const GET_PROVIDERS = 'GET_PROVIDERS';

export const getProviders = () => async dispatch => {
    try {

        const response = await axios.get(`${URL}/api/providers`);

        console.log(response);

        //if (response.status == 200) {
		//	dispatch({ type: GET_PROVIDERS, providers:  response.data});
		//}

        return response;

    } catch (e) {
        if(e.response) {
            return e.response
        }
    }
}