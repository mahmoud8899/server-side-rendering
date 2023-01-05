
import React from "react";
import Button from 'react-bootstrap/Button';




export default function TheButton(props) {

    const { Title, ClassName,ClassContainer ,disabled ,onClick } = props






    return <div className={ClassContainer} >
        <button 
        className={ClassName} 
        disabled={disabled}
        onClick={onClick}
        
        >{Title}</button>
    </div>
}