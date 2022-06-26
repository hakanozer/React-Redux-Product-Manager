import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// components import
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Settings from './Settings';
import Security from './Security';
import Detail from './Detail';
import { Provider } from 'react-redux';
import { store } from './useRedux/AppStore';

// routes 
const routes =
<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='' element={ <Login/> } ></Route>
      <Route path='/dashboard' element={ <Security component={<Dashboard />} /> }></Route>
      <Route path='/settings' element={ <Security component={<Settings />} /> }></Route>
      <Route path='/detail' element={ <Security component={<Detail />} /> }></Route>
      <Route path='*' element={ <NotFound/> }></Route>
    </Routes>
  </BrowserRouter>
</Provider>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( routes );
