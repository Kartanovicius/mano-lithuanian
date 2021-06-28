import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';
import themeContext from './context/themeContext';

function Main(){
  const [theme, setTheme] = useState('bg-black text-white')
  return(
    <React.StrictMode>
      <themeContext.Provider value={{theme, setTheme}}>
       <App />
      </themeContext.Provider>
    </React.StrictMode>
  )
}
ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
