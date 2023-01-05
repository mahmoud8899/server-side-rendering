
// handel error ....
// option  not connect from server and error fail data from castem

import { PrivateData } from "../features/AuthAction"

// import { Action_logout } from "./AuthAction"

// testing. .....
export function ThereIsNoConnectionToTheServer(dispatch, error,PthError) {

    // console.log('show params.',

    // error, ShowError
    // )

    if (error.message === 'Network Error') {


        console.log('Network Error')
        return dispatch(PthError('not fund 404'))


    } else {
        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message

        if (message === 'Not authorized' || message === 'token failed') {
            console.log('Not authorized')

            dispatch(PrivateData({
                data: {},
                token: '333'
            }))

            return

        }


        // console.log('404',error)
        return dispatch(PthError(message))
    }
}