import Modal from "react-modal";

export default function ImageModal({ isOpen, isClose, modalImage }) {
  Modal.setAppElement("#root");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      //   onAfterOpen={afterOpenModal}
      style={customStyles}
      //   contentLabel="Example Modal"
    >
      <img src={modalImage} alt="" width={900} />
    </Modal>
  );
}
