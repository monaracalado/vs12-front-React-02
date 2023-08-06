import Menu from './components/menu/menu';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Galeria from './pages/galeria/galeria';
import Home from './pages/home';
import Header from './components/header/header';
import Footer from './components/footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header src={"james-webb.png"} alt={"Telescopio James Webb"} span={'James Webb'}>
      <Menu/>
    </Header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/galeria' element={<Galeria />} />
    </Routes>
    <Footer linkedin='https://www.linkedin.com/in/monaracalado/' github='https://github.com/monaracalado/'/>
    </BrowserRouter>
    </>
  );
}

export default App;
