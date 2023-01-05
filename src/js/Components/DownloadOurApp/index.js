import React , {Fragment} from "react";
import { Row, Col, Image } from 'react-bootstrap'
import Phone from '../../../utlis/popular/phone.webp'
import App from '../../../utlis/popular/app.png'
import Google from '../../../utlis/popular/google.png'


export default function DownloadOurApp() {





    return <Fragment>
        <Row className='justify-content-center background-first '>

            <Col xs={12} sm={6} md={4} lg={4}>

                <Image
                    src={Phone}
                    width='100%'
                    height='300px'
                    alt='download app'

                />
            </Col>


            <Col xs={12} sm={6} md={6} lg={6}>


                <div className='text-align cover'>
                    <h1 className="cursor TitleFontSize" >Simple Way To Order Your Food</h1>
                    <span>
                        ning you see on the counter or in
                    </span>

                    <div className='flexRow justify-content-center Align-items'>
                        <Image
                            src={App}
                            className='IMAGRaPP'
                            alt='download app'

                        />
                        <Image
                            src={Google}
                            className='IMAGRaPP'
                            alt='download app'

                        />
                    </div>
                </div>

            </Col>

        </Row>

    </Fragment>
}