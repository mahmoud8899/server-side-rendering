import React ,{Fragment} from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import HomeImage from '../../../utlis/popular/1.jpg'
import TheButton from '../Button'


export default function CoverScreen(props) {

    const { } = props



    return <Fragment>

        <Row className='justify-content-center background-coloranther  padding '>

            <Col xs={11} sm={6} md={5} lg={4}>
            <div className='margin-Top' />
                <Image
                    src={HomeImage}
                    width='100%'
                    height='250px'
                    alt='food desgin'
                    className='Image border-radius box-shadow ImageSize'

                />
            </Col>
            <Col xs={11} sm={6} md={7} lg={6}>
            <div className='margin-Top' />

                <div className='text-align' >
                    <h1 className='TitleFontSize'> Food design  </h1>
                    <h1 className='TitleFontSize'>  Good food</h1>
                    <div className='flex flex-column'>
                        <span className='des' >
                            The tood palace is an neighborhood restaurent serving
                        </span>
                        <span className='des margin-bottom '>
                            seasonal global cuisine driven by the faire
                        </span>
                    </div>

                    <TheButton
                        Title='Explore Food Menu'
                        ClassName="background-Color whitecolor padding-half border-half  Button"


                    />



                </div>

            </Col>

        </Row>
    </Fragment>




}