// Modal.js
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.getElementById("modal");

const ModalWrapper = ({ children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>
  );
};

const Modal = ({ children }) => {
  let element = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  });
  return createPortal(<ModalWrapper>{children}</ModalWrapper>, element);
};

export default Modal;
