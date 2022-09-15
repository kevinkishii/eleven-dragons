import React, { useEffect, useState } from "react"
import "./Modal.css"
import { schema } from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

const Modal = ({ closeModal, addNewItem, currentItems }) => {
  const [newPerson, setNewPerson] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
    id: 0,
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewPerson({ ...newPerson, [name]: value })
  }

  const addItem = async (e) => {
    const person = {
      name: newPerson.name,
      email: newPerson.email,
      gender: newPerson.gender,
      status: newPerson.status,
      id: new Date().getTime().toString(),
    }
    addNewItem([person, ...currentItems])
    setNewPerson({
      name: "",
      email: "",
      gender: "",
      status: true,
      id: 0,
    })
    closeModal(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  register("name", {
    onChange: handleChange,
  })
  register("email", {
    onChange: handleChange,
  })
  register("status", {
    onChange: handleChange,
  })

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalHeader">
          <div></div>
          <a
            onClick={() => {
              closeModal(false)
            }}
            style={{ fontSize: "2rem" }}
          >
            x
          </a>
        </div>
        <div className="modalBody">
          <form onSubmit={handleSubmit(addItem)}>
            <div>
              <div className="formElement">
                <div>
                  <label htmlFor="name">Name</label>
                </div>
                <div>
                  <input
                    id="name"
                    name="name"
                    value={newPerson.name}
                    type="text"
                    {...register("name")}
                  />
                  <p>{errors?.name?.message}</p>
                </div>
              </div>
              <div className="formElement">
                <div>
                  <label htmlFor="email">E-mail</label>
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    value={newPerson.email}
                    type="text"
                    {...register("email")}
                  />
                  <p>{errors?.email?.message}</p>
                </div>
              </div>
              <div className="formElement">
                <div>
                  <label htmlFor="status">Status</label>
                </div>
                <div>
                  <select
                    id="status"
                    name="status"
                    value={newPerson.status}
                    type="text"
                    {...register("status")}
                  >
                    <option value="">Selecione o status</option>
                    <option value="active">ativo</option>
                    <option value="inactive">Inativo</option>
                  </select>
                  <p>{errors?.status?.message}</p>
                </div>
              </div>
              <div>
                <div>
                  <button type="submit">Adicionar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
