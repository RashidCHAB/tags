import { useState } from 'react';
import './app.css';

function App() {
  const [error, setError] = useState(false)
  const [text, setText] = useState("")
  const [hasAdd, setAdded] = useState(false)
  const handleText = (e) => {
    setText(e.target.value)
    handleBlur(e)
  }
  const handleBlur = (e) => {
    if (!text) {
      setError(true)
      e.target.className = 'error'
      setAdded(false)
      e.target.nextSibling.disabled = true
    }
    if (text) {
      setError(false)
      e.target.className = ''
      e.target.nextSibling.disabled = false
    }
  }

  const submit = (e) => {
    e.preventDefault()

    if (text) {
      setAdded(true)
      setText("")
    }

  }
  return (

    <div className='main' >
      <form action="" onSubmit={submit}>
        <input type="text" name="text" id="" placeholder='input product name' className='' onBlur={handleBlur} onChange={handleText} value={text} />
        <button className='button' disabled={true}>send</button>

      </form>
      {error && <p className='errorText'>Input hasn't be empty</p>}
      {hasAdd === true ? <p className='succesText'>Message send succesfully</p > : null}
    </div>
  );
}

export default App;
