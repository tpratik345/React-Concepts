import React from 'react'

type HorizontalPositions = 'left' | 'center' | 'right'

type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${HorizontalPositions}-${VerticalPosition}`, 'center-center'> | 'center'
}


function Toast({position} : ToastProps) {
  return (
    <div>Toast: {position}</div>
  )
}

export default Toast