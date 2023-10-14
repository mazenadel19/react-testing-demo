import React, { useState } from 'react'

const Greetings = () => {
  const [state, setState] = useState(false)

  function handleClick(){
    setState(true)
  }

  return (
    <div>
        <h1>Hello World!</h1>
        {/* <p>{state? "changed!":"It`s Good To See You"}</p> */}
        {state && <p>changed!</p>}
        {!state && <p>It`s Good To See You</p>}
        <button onClick={handleClick}>change text</button>
    </div>
  )
}

export default Greetings