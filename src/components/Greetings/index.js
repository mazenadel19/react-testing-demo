import React, { useState } from 'react'
import Output from '../Output'

const Greetings = () => {
  const [state, setState] = useState(false)

  function handleClick(){
    setState(true)
  }

  return (
    <div>
        <h1>Hello World!</h1>
        {state && <Output>changed!</Output>}
        {!state && <Output>It`s Good To See You</Output>}
        <button onClick={handleClick}>change text</button>
    </div>
  )
}

export default Greetings