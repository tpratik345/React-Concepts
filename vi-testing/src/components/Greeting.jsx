import React from 'react'

function Greeting({name}) {
  return (
    <h1>Hi {name || 'World'}!</h1>
  )
}

export default Greeting