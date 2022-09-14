import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <ul>
          <li>
            <Link to="/all">Todos</Link>
          </li>
          <li>
            <Link to="/include">incluir</Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Navbar
