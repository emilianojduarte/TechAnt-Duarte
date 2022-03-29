//Componentes
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
//Estilos
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
