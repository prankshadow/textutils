import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import ButtonType from "./ButtonType";
import Alert from "./Alert";

function TextArea(props) {
    const [value, setValue] = useState("");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000)
    }

    const handleUpperCase = () => {
        setValue(value.toUpperCase());
        showAlert("Successfully capitalized", "Success")
    }

    const handleOnChange = (event) => {
        setValue(event.target.value);
    }

    const handleLowerCase = () => {
        setValue(value.toLowerCase());
        showAlert("Succesfully lower cased", "Success")
    }

    const handleClear = () => {
        setValue("")
        showAlert("Successfully Cleared", "Success")
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        showAlert("Copied Successfully", "Success")
    }

    const handleExtraSpaces = () => {
        let newText = value.split(/[ ]+/);
        setValue(newText.join(" "));
        showAlert("Successfully removed extra spaces", "Success")
    }

    return (
        <><Alert alert={alert} />
            <div className='container'>
                <Form.Group className="mt-4 mb-2" controlId=" example form.ControlTextarea1">
                    <Form.Label>Type or paste your text here</Form.Label>
                    <Form.Control as="textarea" id="myBox" value={value} onChange={handleOnChange} rows={8} />
                </Form.Group>
                <p>{value.split(" ").filter((element) => { return element.length !== 0 }).length} words and {value.length} characters</p>

                <ButtonType
                    variant="info"
                    name="Convert to Capital Letters"
                    onClick={handleUpperCase}
                    className="my-1"
                    disabled={value.length === 0}
                />
                <ButtonType
                    variant="warning"
                    name="Convert to Small Letters"
                    onClick={handleLowerCase}
                    className="my-1"
                    disabled={value.length === 0}
                />
                <ButtonType
                    variant="danger"
                    name="Clear Text"
                    onClick={handleClear}
                    className="my-1"
                    disabled={value.length === 0}
                />
                <ButtonType
                    variant="success"
                    name="Copy Text"
                    onClick={handleCopy}
                    className="my-1"
                    disabled={value.length === 0}
                />
                <ButtonType
                    variant="dark"
                    name="Remove extra spaces"
                    onClick={handleExtraSpaces}
                    className="my-1"
                    disabled={value.length === 0}
                />

                <h2 className="mt-5 mb-5">Preview of your text (In single Line)</h2>
                <p>{value.length > 0 ? value : "Type something to preview here."}</p>
            </div>
        </>
    );
}

export default TextArea;
