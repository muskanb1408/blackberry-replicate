import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import Third from './components/Third';





function App() {
  return (
    <div className="container">
     <Navbar />
     <Body />
     <Third />
     <Footer />
    
    </div>
  );
}

export default App;
