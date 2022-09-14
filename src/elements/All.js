import React from "react"
import { useState } from "react"
import { useFetch } from "../Hooks/useFetch"

const url = "https://gorest.co.in/public/v2/users"

const All = () => {
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const { loading, items } = useFetch(url)

  let filteredResponse = items
    .filter((person) => {
      if (search == "") {
        return person
      } else if (person.name.toLowerCase().includes(search.toLowerCase())) {
        return person
      }
    })
    .filter((person) => {
      if (activeFilter == "all") {
        return person
      } else if (activeFilter == person.status) {
        return person
      }
    })

  return (
    <>
      <section>
        <div>
          <h1>All users</h1>
          <input
            type="text"
            placeholder="Pesquisar"
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
        </div>
        {loading ? (
          <h2>Loading</h2>
        ) : (
          <div>
            {filteredResponse.map((person, key) => {
              return (
                <div key={key}>
                  <h5>{person.name}</h5>
                  <h5>{person.email}</h5>
                  <h5>{person.gender}</h5>
                  <h5>{person.status}</h5>
                </div>
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}

export default All
