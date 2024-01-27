import { React } from "react";

import "./Modal.css";

export const Modal = ({ onSubmit, onCancel, closeModal, children }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal a été fermé");
      }}
    >
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal("Modal a été fermé")}
        >
          <p className="close">&times;</p>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <button
            type="submit"
            className="btn btn-submit"
            onClick={() => onSubmit("Bouton Soumettre a été cliqué")}
          >
            Soumettre
          </button>
          <button
            type="submit"
            className="btn btn-cancel"
            onClick={() => onCancel("Annuler Soumettre a été cliqué")}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};