import React from "react";
import Button from 'react-bootstrap/Button';

function ButtonType(props) {
    return(
        <>
            <Button onClick={props.onClick} variant={props.variant}>{props.name}</Button>{' '}
        </>
    );
}

export default ButtonType;
