import {LOGIN_USER} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case LOGIN_USER:
            return{
                ...state,
                usuario: action.payload.user,
                logado: true
            }
        default:
            return state;
    }
}