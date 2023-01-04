import './App.css'; 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />}>

          </Route>
          <Route path='/cart' element={<Cart />}>

          </Route>
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
