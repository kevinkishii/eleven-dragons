import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <header>
        <Link className="link" to="/">
          Home
        </Link>
        <ul>
          <li>
            <Link className="link" to="/all">
              Usuarios
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Navbar
