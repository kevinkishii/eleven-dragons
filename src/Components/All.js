import React from "react"
import { useState } from "react"
import { useFetch } from "../Hooks/useFetch"
import { motion } from "framer-motion"

import Modal from "./Modal"

const url = "https://gorest.co.in/public/v2/users"

const All = () => {
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const { loading, items, setItems } = useFetch(url)
  const [openModal, setOpenModal] = useState(false)
  console.log(items)

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
          <h1>Todos os usuários</h1>
          <div>
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
          <motion.div className="itemsGrid">
            {filteredResponse.map((person, key) => {
              return (
                <motion.div
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                  }}
                  inicial={{
                    scale: 0,
                    opacity: 0,
                    y: "50%",
                  }}
                  exit={{
                    scale: 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  layout
                  className="item"
                  key={key}
                >
                  <h5>{person.name}</h5>
                  <h5>{person.email}</h5>
                  <h5>{person.gender}</h5>
                  <h5>{person.status}</h5>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </div>
    </>
  )
}

export default All