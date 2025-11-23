import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ThemeToggleBtn from './components/ThemeToggleBtn'

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App

