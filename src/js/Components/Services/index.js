import React, { Fragment } from 'react'
import { Row } from 'react-bootstrap'
import { AwesomeServices, CheckOutIcons } from '../../../utlis/data'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react'
import { SwiperOfSize } from '../Swiper/SettingSwiper';
import SwiperPage from '../Swiper/index'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Services(props) {



    return <Fragment>
        <Row className='justify-content-md-center background-first '>
            <div className='margin-Top ' />

            <h1 className="cursor TitleFontSize text-align tWOmargin-bottom">Our Awesome Services</h1>
            <div className='margin-Top ' />
            <SwiperPage
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={SwiperOfSize}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={(e) => console.log('slide change',e)} 
            >


                {AwesomeServices && AwesomeServices?.map((item, Index) => {
                    return <SwiperSlide key={Index}>

                        <div className='text-align ImageSize'>

                            {CheckOutIcons(item?.icon)}

                            <h1 className="cursor TitleFontSize Onemargin-top margin-bottom">{item?.name}</h1>
                            <span className='des'>{item?.des}</span>
                        </div>

                    </SwiperSlide>
                })}


            </SwiperPage>

        </Row>
    </Fragment>
}