import React, { useEffect } from "react";

export default function Modal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalIsOpen]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button type="button" onClick={openModal} className="bg-red-500">
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            padding: "0px",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
      >
        <div className="grid grid-cols-1 divide-y">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </Modal>
    </div>
  );
}
