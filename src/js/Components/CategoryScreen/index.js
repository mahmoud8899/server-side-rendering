import React, { Suspense } from "react"
import { Col, Image, Row } from "react-bootstrap"
import { LoadingIn } from "../Loading"
import { CategoryImage } from '../../../utlis/data'
import SwiperPage from '../Swiper/index'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { SwiperSlide } from 'swiper/react'
import { SwiperOfSize } from '../Swiper/SettingSwiper';

const CategoryScreen = (props) => {

    const { Category } = props



    return (

        <Suspense fallback={<LoadingIn color='danger' />} >
            <Row className='justify-content-center background-coloranther  padding ' >

                <SwiperPage
                    spaceBetween={50}
                    slidesPerView={3}
                    breakpoints={SwiperOfSize}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >

                    {Category?.length > Number(0) ? Category && Category?.map((item, index) => (

                        <SwiperSlide key={index}>
                            <div className='text-align  border-radius  overFlow background-Color ImageSize Onemargin-top'>
                                <Image src={CategoryImage(item?.name)} width='100%' height='200' />
                                <h1 className='TitleFontSize'>{item?.name}</h1>
                            </div>
                        </SwiperSlide>
                    )) : <p>loading....</p>}


                </SwiperPage>




            </Row>
        </Suspense>

    )
}



export default CategoryScreen