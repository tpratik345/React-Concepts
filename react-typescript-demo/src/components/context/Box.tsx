import React, { useContext } from 'react'
import { ThemContext } from './ThemeContext'

function Box() {
    const  theme = useContext(ThemContext)
  return (
    <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text}}>Box</div>
  )
}

export default Box