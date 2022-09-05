import './App.css'
import { createContext } from 'react'
import NavBar from './component/NavBar'
import { useState } from 'react';
import Content from './component/Content';

export const ThemeContext = createContext(null);

function App() {
  const [Theme, setTheme] = useState('light')

  const ToggleTheme = () =>{
   setTheme(Theme === 'light' ? 'dark' : 'light') 
  }

  return (
    <ThemeContext.Provider value={{Theme, ToggleTheme}}>
      <div className="App" id={Theme}>
        <NavBar Theme={Theme} ToggleTheme={ToggleTheme} setTheme={setTheme} />
        <Content/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
