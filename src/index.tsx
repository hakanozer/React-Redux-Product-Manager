import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// components import
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Settings from './Settings';
import Security from './Security';

// routes 
const routes =
<BrowserRouter>
  <Routes>
    <Route path='' element={ <Login/> } ></Route>
    <Route path='/dashboard' element={ <Security component={<Dashboard />} /> }></Route>
    <Route path='/settings' element={ <Security component={<Settings />} /> }></Route>
    <Route path='*' element={ <NotFound/> }></Route>
  </Routes>
</BrowserRouter>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( routes );
