import React from 'react';
import Navbar from './components/navbar';
import './index.css';

import {HashRouter} from 'react-router-dom'

import Rotas from './rotas';


function App () {

  return(
    <HashRouter>
        <div className='container'>
          <Navbar />
          <Rotas />
        </div>
    </HashRouter>
  )
}

export default App;
