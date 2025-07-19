import Header from "./components/Header";
import Hero from "./components/Hero";
import './App.css'
import Companies from "./components/Companies";
// import Residencies from "./components/Residencies";
import Value from "./components/Value";
import Contact from "./components/Contact";
// import Getstarted from "./components/Getstarted";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
          <Header />
          <Hero />
      </div>

      <Companies/>
      <Value/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
 
  );
}

export default App;
