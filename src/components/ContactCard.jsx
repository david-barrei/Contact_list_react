import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/ContactContext";

const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div className="me-3">
            <h5 className="card-title mb-3">{contact.name}</h5>
            <div className="mb-2">
              <i className="bi bi-geo-alt me-2 text-muted"></i>
              <span className="text-muted">{contact.address}</span>
            </div>
            <div className="mb-2">
              <i className="bi bi-telephone me-2 text-muted"></i>
              <span className="text-muted">{contact.phone}</span>
            </div>
            <div>
              <i className="bi bi-envelope me-2 text-muted"></i>
              <span className="text-muted">{contact.email}</span>
            </div>
          </div>
          
          {/* Botones flotantes a la derecha */}
          <div className="d-flex flex-column">
            <Link
              to={`/edit/${contact.id}`}
              className="btn btn-link text-warning p-0 mb-1"
            >
              <i className="bi bi-pencil-square fs-5"></i>
            </Link>
            <button
              className="btn btn-link text-danger p-0"
              onClick={() => actions.deleteContact(contact.id)}
            >
              <i className="bi bi-trash fs-5"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;