import Menu from './components/menu/menu';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Galeria from './pages/galeria/galeria';
import Home from './pages/home';
import Header from './components/header/header';

function App() {
  return (
    <>
    <h1>Testando</h1>
    <Header>
      
    </Header>
    <Menu/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/galeria' element={<Galeria />} />
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
