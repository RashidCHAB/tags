import React from 'react';
import { useState } from 'react';
import './App.css'
const Form = (props) => {
    const [text, setText] = useState('')
    const [error, setError] = useState(false)
    const [added, setAdded] = useState(false)
    const handleText = (newText, e) => {
        setText(newText)
        handleBlur(newText, e)
    }
    const handleSend = (e) => {
        e.preventDefault()
        setAdded(true)
        props.addTag(text)
        document.querySelector('button').disabled = true
        setText("")
    }
    const handleBlur = (newText, e) => {
        if (newText) {
            setError(false)
            setAdded(false)

            e.target.nextSibling.disabled = false
            e.target.className = 'input'
        }
        else {
            setError(true)
            e.target.nextSibling.disabled = true
            e.target.className = 'input error'
        }
    }
    const handleBtn = () => {

    }
    return (

        <form onSubmit={handleSend}>
            <input
                type='text'
                value={text}
                className='input'
                onChange={(e) => handleText(e.target.value, e)}
                onBlur={(e) => handleBlur(e.target.value, e)} />
            <button type='submit'
                disabled={true}
                onClick={handleBtn}>send</button>

            {error && <div className='errorD'>input hasn't bee empty</div>}
            {added && <div className='sended'>message succesfully sended</div>}

        </form>
    );
};

export default Form;