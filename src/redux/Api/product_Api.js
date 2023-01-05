import axios from './axios'
import {
    AppendProductError,
    ProductsLoading,
    AppendProductsWithUserId,
    AppenNumberNextPages,

} from '../features/product_action'

import { ThereIsNoConnectionToTheServer } from './ThereIsNoConnectionToTheServer'


// to restaurant -Public
// pagnation products...
// append.... 

export const PorudtsActionPaganationPublic = (user = 'lunch', WhichNumber = Number(1)) => async dispatch => {

    // console.log('user',user, 'number', WhichNumber)
    // const user = 'lunch'
    // const WhichNumber = Number(1)
    // console.log('dfhgdisghidghodishgosdhogidfg',user)
    let calculatedPage = WhichNumber[user]
    // console.log('calculatedPage',  calculatedPage === undefined)
    let nextRequestPage = calculatedPage === undefined ? Number(1) : calculatedPage

    // console.log('ddd',calculatedPage , nextRequestPage)


    if (nextRequestPage) {


        try {


            dispatch(ProductsLoading())

            const { data } = await axios.get(`/api/product/showfood/${user}/?pageNumber=${nextRequestPage}`)

            const HandelData = data?.product

            dispatch(AppendProductsWithUserId({ user, HandelData }))

            // console.log('show action',user, data.product)


            const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page

            // console.log('show my', typeof nextpage)
            // console.log('show ', nextpage)
            // console.log('user id ',user)

            dispatch(AppenNumberNextPages({ user, nextpage }))
            // console.log('show action',user, nextpage)
            return
        } catch (error) {


            ThereIsNoConnectionToTheServer(
                dispatch,
                error,
                AppendProductError

            )




        }
    }


}
