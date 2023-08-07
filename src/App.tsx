import Menu from './components/menu/menu';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Galeria from './pages/galeria/galeria';
import Home from './pages/home';
import Header from './components/header/header';
import Footer from './components/footer';
import NotFound from './pages/notFound';
import Historia from './pages/historia';
import QuizApp from './pages/quiz';

function App() {
  let imgLogo = 'james-webb.png'
  let altLogo = "Telescopio James Webb"
  let titleLogo = 'James Webb'

  let linkedin = 'https://www.linkedin.com/in/monaracalado/'
  let github = 'https://github.com/monaracalado/'
  
  return (
    <>
    <BrowserRouter>
    <Header src={imgLogo} alt={altLogo} span={titleLogo}>
      <Menu/>
    </Header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/galeria' element={<Galeria />} />
      <Route path='/historia' element={<Historia/>} />
      <Route path='/quiz' element={<QuizApp/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
    <Footer linkedin={linkedin} github={github}/>
    </BrowserRouter>
    </>
  );
}

export default App;
