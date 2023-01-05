import axios from './axios';
import {
    Privateloading,
    PrivateData,
    PrivateError,
} from '../features/AuthAction'


// Logoin 
export const loginInAction = (user) => async dispatch => {

    const CondationUrl = `/api/user/login/`
    try {

        dispatch(Privateloading())
        const { data } = await axios.post(CondationUrl, user)
        dispatch(PrivateData({
            data: data.data,
            token: data.token
        }));
    } catch (error) {


        return dispatch(PrivateError(error.message));

    }

}



// singUp 
export const SingUpAction = user => async dispatch => {

    try {

        dispatch(Privateloading());
        const { data } = await axios.post(`/api/user/create/`, user)
        dispatch(PrivateData(data));
    } catch (error) {
        return dispatch(PrivateError(error.message));

    }




}

