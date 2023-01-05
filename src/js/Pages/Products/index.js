
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'



// fetch data....
// const loadData = dispatch => {

// }


const Products = (props) => {

    const dispatch = useDispatch()



    return <Container>
        <Row>
            <Col xs={12} sm={12} md={6} lg={6}>

                <h1>Product....</h1>

            </Col>
        </Row>
    </Container>
}



export default {
    element: Products,



};