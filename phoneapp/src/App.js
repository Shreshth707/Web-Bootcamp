import './App.css';
import {Suspense, lazy} from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Default from './components/Default';

const  Cart = lazy(() => import('./components/Cart'));
const  Details = lazy(() => import('./components/Details'));

function App() {
  return (
    <BrowserRouter>
       <Navbar /> 
       <Suspense fallback={<h1>Loading....</h1>}>
       <Routes>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/details/:id" element={<Details />}/>
          <Route path="/" element={<ProductList />}/>
          <Route path="*" element={<Default />}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
