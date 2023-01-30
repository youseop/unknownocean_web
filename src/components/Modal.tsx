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
        <div className="contents"></div>
        <a
          className="install-button"
          href="https://apps.apple.com/kr/app/unknown-ocean/id1639595747"
        >
          앱 설치하기
        </a>
      </div>
    </div>
  );
}

export default Modal;
