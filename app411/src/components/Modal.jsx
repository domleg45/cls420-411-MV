import { React } from "react";
import { t } from "i18next";

import "./Modal.css";

export const Modal = ({ onSubmit, onCancel, closeModal, children }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal(t("modal.closed"));
      }}
    >
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal(t("modal.closed"))}
        >
          <p className="close">&times;</p>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <button
            type="submit"
            className="btn btn-submit"
            onClick={() => onSubmit(t("modal.submited"))}
          >
            {t("modal.submit")}
          </button>
          <button
            type="submit"
            className="btn btn-cancel"
            onClick={() => onCancel(t("modal.canceled"))}
          >
            {t("modal.cancel")}
          </button>
        </div>
      </div>
    </div>
  );
};