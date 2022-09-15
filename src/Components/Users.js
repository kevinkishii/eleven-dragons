import React from "react"
import { useState } from "react"
import { useFetch } from "../Hooks/useFetch"

import Modal from "./Modal"

const url = "https://gorest.co.in/public/v2/users"

const Users = () => {
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const { loading, items, setItems } = useFetch(url)
  const [openModal, setOpenModal] = useState(false)

  let filteredResponse = items
    .filter((person) => {
      if (search === "") {
        return person
      } else if (person.name.toLowerCase().includes(search.toLowerCase())) {
        return person
      } else {
        return null
      }
    })
    .filter((person) => {
      if (activeFilter === "all") {
        return person
      } else if (activeFilter === person.status) {
        return person
      } else {
        return null
      }
    })

  return (
    <>
      <div className="hero">
        {openModal && (
          <Modal
            closeModal={setOpenModal}
            addNewItem={setItems}
            currentItems={items}
          />
        )}
        <div className="displayHeader">
          <h1 style={{ fontWeight: "bold", fontSize: "5rem" }}>Usuários</h1>
          <div className="filters">
            <input
              type="text"
              placeholder="Pesquisar por Nome"
              onChange={(event) => {
                setSearch(event.target.value)
              }}
            />
            <select
              onChange={(option) => {
                setActiveFilter(option.target.value)
              }}
            >
              <option value="all">Todos</option>
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
            <button
              onClick={() => {
                setOpenModal(true)
              }}
            >
              Adicionar
            </button>
          </div>
        </div>
        {loading ? (
          <div className="centerTitle">
            <h2>Carregando</h2>
          </div>
        ) : (
          <div className="itemsGrid">
            {filteredResponse.map((person, key) => {
              return (
                <div className="item" key={key}>
                  <table>
                    <tr>
                      <td>
                        <h1>NOME</h1>
                      </td>
                      <td>
                        <h5>{person.name}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h1>EMAIL</h1>
                      </td>
                      <td>
                        <h5>{person.email}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h1>STATUS</h1>
                      </td>
                      <td>
                        <h5>{person.status}</h5>
                      </td>
                    </tr>
                  </table>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default Users
