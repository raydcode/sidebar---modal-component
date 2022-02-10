import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, toggleModal } = useGlobalContext();
  console.log("---------> ~ Modal ~ isModalOpen", isModalOpen);
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className="modal-container">
        <h3>Dialog</h3>
        <button
          className="close-modal-btn"
          onClick={() => toggleModal(isModalOpen)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
