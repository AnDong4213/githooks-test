import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name] = useState('小米');
  // var aa = 99;

  return (
    <div className='App'>
      <header className='App-header'>
        <img alt='logo' className='App-logo' src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          rel='noopener noreferrer'
          target='_blank'
        >
          Learn React
        </a>
      </header>
      <div>
        <p>LOGO</p>
        <img alt='logo' className='App-logo' src={logo} />
        <span>{name}</span>
        <p>LOGO</p>
        <p>LOGO</p>
      </div>
    </div>
  );
}

export default App;
