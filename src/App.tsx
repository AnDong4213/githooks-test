import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('小米');
  var aa = 99;

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <div>
        <p>LOGO</p>
        <img src={logo} className='App-logo' alt='logo' />
        <span>{name}</span> <p>LOGO</p> <p>LOGO</p> <p>LOGO</p>
        <p>LOGO</p>
        <p>LOGO</p>
      </div>
    </div>
  );
}

export default App;
