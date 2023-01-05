import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PorudtsActionPaganationPublic } from '../../../redux/Api/product_Api'



const ProductFetch = (props) => {
    const { TheName } = props
    const dispatch = useDispatch()


    console.log('TheName',props)



    // --------- Product middag och lunch    ---------    Start here ---------------------------------
    const TheProducts = useSelector(state => state.Products?.allProducts[TheName]) || []

    useEffect(() => {

        async function CheckLength() {
            console.count('fetch')
            if (TheProducts?.length === Number(0)) {
                await dispatch(PorudtsActionPaganationPublic(Number(1), TheName))
            }

        }
        CheckLength()


    }, [TheName, dispatch, TheProducts?.length])





}

export default ProductFetch