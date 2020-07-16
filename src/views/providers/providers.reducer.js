import {
    UPDATE_PROVIDER,
    DELETE_PROVIDER,
    GET_PROVIDERS,
    SAVE_PROVIDER,
} from '../../store/actions';

const INITIAL_STATE = {


    id: '',
    fantasy_name: '',
    real_name: '',
    cnpj: '',
    address: '',
    city: '',
}

const providers = (state = [], action) => {
    switch (action.type) {
        case SAVE_PROVIDER:
            const newProvider = {
                id: action.provider.id,
                antasy_name: action.provider.antasy_name,
                real_name: action.provider.real_name,
                cnpj: action.provider.cnpj,
                address: action.provider.address,
                city: action.provider.city,
                create_date: action.provider.create_date,
                update_date: action.provider.update_date,
            }
            return [...state, newProvider]
        case UPDATE_PROVIDER:
            return state.map(provider => {
                if (provider.id === action.provider.id) {
                    return action.provider;
                }
                return provider;
            });
        case DELETE_PROVIDER:
            return state.filter(provider => {
                return provider.id !== action.id;
            });
        case GET_PROVIDERS:
            return action.providers
        default:
            return state;
    }
}

export { providers }