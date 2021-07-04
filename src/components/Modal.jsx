import { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 750);
  }, [closeModal]);
  return <div className="modal">{modalContent || ""}</div>;
};

export default Modal;
