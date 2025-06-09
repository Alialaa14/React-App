import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router';
import Sale from './pages/sale/Sale';
import Home from './pages/home/Home';
import Categories from "./pages/Categories/Categories"
import Category from "./pages/Category/Category"


const App = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/sale" element={<Sale />}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
        <Route path="categories/category/:id" element={<Category/>}/>
        
      </Routes>
     
    </BrowserRouter>
  );
}

export default App