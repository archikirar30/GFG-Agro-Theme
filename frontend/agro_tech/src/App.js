import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog'
import Shop from './Components/Shop'
import Cart from './Components/Cart'
import Portfolio from './Components/Portfolio'
import Register from './Components/Register';

function App() {
  return (
    <div className="App">

      <Header></Header>
      
      <Routes>
        <Route path='/' element={ <Welcome /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/shop' element={ <Shop /> } />
        <Route path='/blog' element={ <Blog /> } />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/portfolio' element={ <Portfolio /> } />
        <Route path='/authenticate' element={ <Register /> } />
      </Routes>
      
      <Footer></Footer>
      
    </div>
  );
}

export default App;
