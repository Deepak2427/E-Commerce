import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import ProductDetail from './Component/ProductDetail';
import SearchItems from './Component/SearchItems';
import Card from './Component/Card';
import { useState } from 'react';
import { items } from './Component/Data';


const App = () => {
  const [data, setData] = useState([...items])
  const [card, setCard] = useState([])
  return (
    <>
    <Router>
      <Navbar setData={setData} />
      <Routes>
        <Route path='/' element={<Product card={card} setCard={setCard} items={data}/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/search/:term' element={<SearchItems/>} />
        <Route path='/card' element={<Card/>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
