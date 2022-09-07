import './App.css'
import { createContext } from 'react'
import NavBar from './component/NavBar'
import { useState } from 'react';
import Content from './component/Content';
import ScrollToTop from 'react-scroll-to-top';

// createContext is use to pass data to all the element it's been called
export const ThemeContext = createContext(null);

function App() {
  // Theme use State is use for the light and dark mode
  const [Theme, setTheme] = useState('light')

  // ToggleTheme function is where the looping for light and dark mode been called
  const ToggleTheme = () =>{
   setTheme(Theme === 'light' ? 'dark' : 'light') 
  }

  return (
    // ThemeContext.Provider pass the Theme and toggleTheme
    <ThemeContext.Provider value={{Theme, ToggleTheme}}>
      {/* id={Theme} works when the toggleTheme is true */}
      <div className="App" id={Theme}>
        <NavBar Theme={Theme} ToggleTheme={ToggleTheme} setTheme={setTheme} />
        <Content/>
        {/* ScrollToTop is a react dependencies for scrolling */}
        <ScrollToTop
         smooth
         color='var(--button-color)'
        />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
