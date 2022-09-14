import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./elements/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App
