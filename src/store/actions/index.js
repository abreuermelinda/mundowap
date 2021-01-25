import axios from 'axios';
import {LOGIN_USER} from './types';
import { api } from '../../services';
import { saveToken, getToken, getHeaders, cleanToken } from './localStorage';
import errorHandling from './errorHandling';


export const handleLogin = ({ account, username, password }, callback) => {
    return function (dispatch) {
        axios.post(api + '/users/token', { account, username, password })
            .then((response) => {
                console.log(response.data);
                saveToken(response.data);
                dispatch({type: LOGIN_USER, payload: response.data});
            })
            .catch((err) => callback(errorHandling(err)))
    }
}

export const getUser = () => {
    return function (dispatch) {
        if(getToken()){
        axios.get(api + '/users/{user_id}/widgets', getHeaders())
            .then((response) => {
                console.log(response.data);
                saveToken(response.data);
                dispatch({type: LOGIN_USER, payload: response.data});
            })
            .catch((err) => {
                cleanToken();
            })
        }
    }
}