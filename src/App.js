import React from 'react';
import './App.css';
import Movies from './Movies';
import { MovieProvider } from './contexts/MovieContext';
import Nav from './Nav';
import Input from './Input';

function App() {

  return (
      <MovieProvider>
        <div className='App'>
          <Nav />
          <Input />
          <Movies />
       </div>
    </MovieProvider>
  );
}

export default App;
