import React from 'react'

type ButtonProps = {
  varient: 'primary' | 'secondary'
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>
// Omit will resting children type to only string and omit ReactNode type

function CustomButton({varient, children, ...rest} : ButtonProps) {
  return (
    <button className={`${varient}`} {...rest}>{children}</button>
  )
}

export default CustomButton