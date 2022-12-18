import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import ButtonType from "./ButtonType";

function TextArea(props) {
    const [value, setValue] = useState("");

    const handleUpperCase = () => {
        setValue(value.toUpperCase());
    }

    const handleOnChange = (event) => {
        setValue(event.target.value);
    }

    const handleLowerCase = () => {
        setValue(value.toLowerCase());
    }

    return (
        <div className='container'>
            <Form.Group className="mt-4 mb-2" controlId=" example form.ControlTextarea1">
                <Form.Label>Type or paste your text here</Form.Label>
                <Form.Control as="textarea" value={value} onChange={handleOnChange} rows={8} />
            </Form.Group>
            <p>{value.length} characters</p>
            {/* text.split give 1 array jismai words honge */}
            <ButtonType
                variant="info"
                name="Convert to Capital Letters"
                onClick={handleUpperCase}
            />
            <ButtonType
                variant="warning"
                name="Convert to Small Letters"
                onClick={handleLowerCase}
            />
            <h2 className="mt-5 mb-5">Preview of your text (In single Line)</h2>
            <p>{value}</p>
        </div>
    );
}

export default TextArea;
