import React from "react"
import Form from 'react-bootstrap/Form';

const TheInput = (props) => {

    const { Title, Type, placeholder, value,onChange } = props




    return (

     
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{Title}</Form.Label>
            <Form.Control
                type={Type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}

            />

        </Form.Group>

    )
}


export default TheInput