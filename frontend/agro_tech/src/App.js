import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      
      <Header></Header>

      <Welcome></Welcome>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
