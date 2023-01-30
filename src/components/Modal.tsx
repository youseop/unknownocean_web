import classNames from "classnames";
import "../css/Modal.scss";

interface ModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

function Modal({ isModalVisible, toggleModal }: ModalProps) {
  return (
    <div
      className={classNames("modal-background", { hidden: !isModalVisible })}
      onClick={toggleModal}
    >
      <div className="modal-wrapper">
        <div className="main-contents"></div>
        <div className="install-button">설치하기</div>
      </div>
    </div>
  );
}

export default Modal;
