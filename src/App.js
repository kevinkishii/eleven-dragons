import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./elements/Navbar"
import Home from "./elements/Home"
import All from "./elements/All"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all" element={<All />} />
      </Routes>
    </Router>
  )
}

export default App
