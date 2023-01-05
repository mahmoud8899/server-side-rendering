import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CoverScreen from '../../Components/CoverScreen'
import Services from '../../Components/Services/index'
import DownloadOurApp from '../../Components/DownloadOurApp'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryList } from '../../../redux/Api/Category'
import CategoryScreen from '../../Components/CategoryScreen'
import ItemsProduct from '../../Components/itemsProduct/index'
import FetchProduct from '../../Components/itemsProduct/FetchProduct'







let loadData = (dispatch) => dispatch(CategoryList())




const Home = () => {


    const TheName = 'middag'

    const dispatch = useDispatch()


    // loadData(TheName)

    // fetch data.... 
    useEffect(() => {
        loadData(dispatch)
        // LoadingProduct(dispatch)

    }, [])


    const Category = useSelector((state) => state.category.AllCategory)






    return <Container fluid >





        <CoverScreen />
        <div className='margin-Top ' />
        <div className='margin-Top ' />




        <CategoryScreen
            Category={Category}
        />
        <Services />
        <div className='margin-Top ' />

        <ItemsProduct TheName={TheName} />

        <div className="margin-Top" />
        <DownloadOurApp />
    </Container>
}


export default {
    element: Home,
    loadData,


};