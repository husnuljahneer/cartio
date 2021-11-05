import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Main from './components/Main.js'
import Hero from './components/Hero.js'

function App() {
  return (
   <>
   <div className="bg">
   <Header />
   <Main />
   </div>
   <Hero />
   <Footer />
   </>
  );
}

export default App;
  