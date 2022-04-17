//Componentes
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import SocialNetworks from './components/SocialNetworks/SocialNetworks';
//Pages
import Home from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import ItemDetailPage from './pages/ItemDetailPage';
import CategoryPage from './pages/CategoryPage';
//Estilos
import './App.css';
//context
import {ThemeProvider} from './context/ThemeContext';
import {CartProvider} from './context/CartContext';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/category' element={<CategoryPage/>}/>
              <Route path='/category/:id' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailPage/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
            <SocialNetworks/>
            <Footer/>
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
