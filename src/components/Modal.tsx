import classNames from "classnames";
import "../css/Modal.scss";
import { openAppstore } from "../util/ga";

interface ModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

function Modal({ isModalVisible, toggleModal }: ModalProps) {
  const onClickInstallBtn = () => {
    window.location.href =
      "https://apps.apple.com/kr/app/unknown-ocean/id1639595747";
    openAppstore();
  };

  return (
    <div
      className={classNames("modal-background", { hidden: !isModalVisible })}
      onClick={toggleModal}
    >
      <div
        className="modal-wrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="contents"></div>
        <div className="install-button" onClick={onClickInstallBtn}>
          앱 설치하기
        </div>
      </div>
    </div>
  );
}

export default Modal;
