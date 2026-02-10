import React from 'react'
import type Greet from './Greet'

function ExtractComponent(props: React.ComponentProps<typeof Greet>) {
  return (
    <div>{props.name}</div>
  )
}

export default ExtractComponent