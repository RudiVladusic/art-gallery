import { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 1000);
  }, [closeModal]);
  return (
    <div className="modal">
      <p>{modalContent || ""}</p>
    </div>
  );
};

export default Modal;
