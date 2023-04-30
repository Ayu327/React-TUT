import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Footer.scss"
import "./styles/contact.scss"
import Contact from "./component/Contact";
function App() {
  return (
 <Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>

  </Routes>
<Footer/>
 </Router>
  )
  ;
}

export default App;
