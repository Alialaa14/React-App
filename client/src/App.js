import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router';
import Sale from './pages/sale/Sale';
import Home from './pages/home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/sale" element={<Sale />}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App