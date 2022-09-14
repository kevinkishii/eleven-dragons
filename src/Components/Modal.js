import React, { useEffect, useState } from "react"
import "./Modal.css"
import { schema } from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"

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
          <h3>Modal</h3>
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
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={newPerson.name}
              type="text"
              {...register("name")}
            />
            <p>{errors?.name?.message}</p>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              value={newPerson.email}
              type="text"
              {...register("email")}
            />
            <p>{errors?.email?.message}</p>
            <label htmlFor="gender">Genero</label>
            <input
              id="gender"
              name="gender"
              value={newPerson.gender}
              type="text"
              onChange={handleChange}
            />
            <label htmlFor="status">Status</label>
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
            <button type="submit">Adicionar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
