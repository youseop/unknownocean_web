import classNames from "classnames";
import "../css/Modal.scss";

interface ModalProps {
  isModalVisible: boolean;
}

function Modal({ isModalVisible }: ModalProps) {
  return (
    <div className={classNames("modal", { hidden: !isModalVisible })}>
      modal
    </div>
  );
}

export default Modal;
