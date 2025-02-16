import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/ContactContext";

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await actions.addContact(contact);
    navigate("/"); // Redirigir a la lista de contactos después de agregar
  };

  return (
    <div className="container mt-5">
      <h2>Agregar Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={contact.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
};

export default AddContact;