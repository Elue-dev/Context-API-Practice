import React, { useState } from 'react';
import './App.css';
import ThemeContext from './contexts/themeContext';
import MainContainer from './MainContainer';

function App() {

  const [theme, setTheme] = useState('Blue');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        <h1>App Component</h1>
        <button onClick={(e)=>setTheme(theme === 'Blue'? 'Red' : 'Blue')}>
          {theme === 'Blue' ? 'Switch to Red' : 'Switch to Blue'}
        </button>
        <MainContainer />
    </ThemeContext.Provider>
  );
}

export default App;
