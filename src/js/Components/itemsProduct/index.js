import React, { Suspense, useEffect } from "react";
import { Row, Image } from 'react-bootstrap'
import { ImageUrl } from "../../../utlis/data";
import TheButton from "../Button";
import { useDispatch, useSelector } from "react-redux";
import SwiperPage from '../Swiper/index'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react'
import { SwiperOfSize } from '../Swiper/SettingSwiper';
import { LoadingIn } from "../Loading";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { useNavigate } from 'react-router-dom'



const ItemsProduct = (props) => {
    const { TheName } = props


    const navigation = useNavigate()


    // --------- Product middag och lunch    ---------    Start here ---------------------------------
    const TheProducts = useSelector(state => state.Products?.allProducts[TheName]) || []







    return <Row className='justify-content-center background-coloranther  padding'>

        <h1 className="cursor TitleFontSize text-align tWOmargin-bottom">Most Popular Items</h1>

        <Suspense fallback={<LoadingIn color='danger' />} >
            <SwiperPage
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={SwiperOfSize}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {TheProducts && TheProducts?.map((item, index) => (
                    <SwiperSlide key={index}>

                        <div className='border-radius background-first overFlow box-shadow ImageSize'>
                            <Image
                                src={`${ImageUrl}${item?.image}`}
                                className='ItemImage border-radius'
                                alt={item?.name}

                            />

                            <div className='padding'>
                                <div className='flexRow Align-items justify-content-between'>
                                    <span className='des text-transform'  >{item?.name}</span>
                                    <span className='des text-transform'>+ 8.5</span>
                                </div>
                                <div className='flexRow Align-items justify-content-between Onemargin-top' >
                                    <div className='padding-half background-Color border-half cursor'>
                                        <span className='des text-transform whitecolor' > add to cart</span>
                                    </div>
                                    <span className='des text-transform color-all' >{item?.prices} kr</span>
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>
                ))}

            </SwiperPage>

        </Suspense>




        <div className='text-align ' >
            <TheButton
                Title='See more Recipes'
                ClassName="background-Color whitecolor  padding-half border-half  Button margin-Top"
                onClick={() => navigation('/product/')}
            />
            <div className='margin-Top ' />
        </div>









    </Row>

}

export default ItemsProduct