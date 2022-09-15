import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Users from "./Components/Users"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Users" element={<Users />} />
      </Routes>
    </Router>
  )
}

export default App
