import React, { children } from 'react'
import { LoadingIn } from '../Loading'


const FetchMaps = (props) => {
    const { Itme } = props




    return Itme && Itme?.length > Number(0) ?
        <>
            {children}
        </>
        : <LoadingIn color='danger' />




}


export default FetchMaps