import React from 'react'

type GreetProps = {
    name?: string
}

function Greet({name} : GreetProps) {
  return (
    <div>Hi {name}</div>
  )
}

export default Greet