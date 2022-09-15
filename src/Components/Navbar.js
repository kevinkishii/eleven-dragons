import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <header>
        <Link className="link" to="/">
          <h1>Home</h1>
        </Link>
        <ul>
          <li>
            <Link className="link" to="/Users">
              <h3>Usuários</h3>
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Navbar
