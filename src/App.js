import "./App.css";
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Card from './components/Card.js' //This needs to be imported into main instead. 
import Footer from './components/Footer.js'


function App() {
  return (
    <div className="App">

    <Navbar />
    <Header />
    {/* <Header />
    <Header />
    <Header />
    <Header />
    <Header />
    <Header /> */}
    <Main />
    <Footer />

    

       

      
    </div>
  );
}

export default App;
