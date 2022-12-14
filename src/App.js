import "./App.css";
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer_animation from './components/Footer_animation'
import Footer from './components/Footer.js'


function App() {
  return (
    <div className="App">

    <Navbar />
    <Header />
    <Main />
    <Footer_animation />
    <Footer />
      
    </div>
  );
}

export default App;
