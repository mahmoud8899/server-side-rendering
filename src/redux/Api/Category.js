import axios from './axios'
import {
    CategoryLoading,
    CategoryLists,
    CategoryError,
} from '../features/CategoryAction'
import { PorudtsActionPaganationPublic } from './product_Api'

import { ThereIsNoConnectionToTheServer } from './ThereIsNoConnectionToTheServer'


// Method -- GET
// get all category List
// GET // URL : // /api/category/show/
export const CategoryList = () => async dispatch => {


    // console.log('yes...')

    try {
        dispatch(CategoryLoading())
        const { data } = await axios.get(`/api/category/show/`)

        dispatch(CategoryLists(data))

        const user = 'middag'
        const WhichNumber = Number(1)
        // fetch 
        return dispatch(PorudtsActionPaganationPublic(user, WhichNumber))
    } catch (error) {
       dispatch(PorudtsActionPaganationPublic(user, WhichNumber))
        ThereIsNoConnectionToTheServer(
            dispatch,
            error,
            CategoryError,
        )



    }


}

