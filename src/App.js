import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./component/Header";
import Home from "./component/Home";
import "./styles/App.scss"
import "./styles/Header.scss"
function App() {
  return (
 <Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
 </Router>
  )
  ;
}

export default App;
