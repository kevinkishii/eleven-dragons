import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import All from "./Components/All"

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
