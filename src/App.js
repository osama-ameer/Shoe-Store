import ButtonAppBar from './components/ButtonAppBar';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home  from './components/Home';
import  Product  from './components/Product';
import  ProductIndex  from './components/ProductIndex';
import  ProductDetails  from './components/ProductDetails';


function App() {
  return (
    <Router>
    <ButtonAppBar />

    

    <Routes>
    
    <Route path="/" element={<Product/>} >
      <Route path="/" element={<ProductIndex />}> </Route>
      <Route path=":productID" element={<ProductDetails />}></Route>
    </Route>
    
    </Routes>

    </Router>
      
  );
}

export default App;
