
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/ContactContext";
import ContactCard from "../components/ContactCard";

const ContactList = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center">
        
        
        <button
          className="agregar btn btn-success mb-4"
          onClick={() => navigate("/add")}
        >
          Agregar Contacto
        </button>

        {/* Contenedor vertical */}
        <div className="w-100" style={{ maxWidth: "600px" }}>
          {store.contacts.map((contact) => (
            <div className="mb-3" key={contact.id}>
              <ContactCard contact={contact} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;


