import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';
import Portfolio from './Components/Portfolio';
import Shop from './Components/Shop';
import Singleportfolio from './Components/Singleportfolio';
import Singlepost from './Components/Singlepost';
import Shopdetail from './Components/Shopdetail';

function App() {
  return (
    <div className="App">
      
      <Header></Header>

      <Welcome></Welcome>

      <Footer></Footer>

      <About></About>

      <Blog></Blog>

      <Contact></Contact>

      <Checkout></Checkout>

      <Cart></Cart>

      <Portfolio></Portfolio>  

      <Shop></Shop>

      <Shopdetail></Shopdetail>

      <Singleportfolio></Singleportfolio>

      <Singlepost></Singlepost>


    </div>
  );
}

export default App;
