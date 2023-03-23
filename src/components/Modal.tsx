import classNames from "classnames";
import "../css/Modal.scss";
import { gaOpenAppstore } from "../util/ga";
import { artistCode, scanImgs } from "../util/artistInfo";

interface ModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

function Modal({ isModalVisible, toggleModal }: ModalProps) {
  const onClickInstallBtn = () => {
    window.location.href =
      "https://apps.apple.com/kr/app/unknown-ocean/id1639595747";
    gaOpenAppstore();
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
        <div className="title">{"전시 관람 방법"}</div>
        <span className="text">
          <span className="small-text">
            {`언노운오션 앱에서 포스터를 스캔하면
`}
            <span className="orange-text">{`AR `}</span>
            {`전시를 관람할 수 있습니다. 
전시 관람하기 버튼을 눌러 앱을 다운로드 받아주세요.`}
          </span>
        </span>
        <img src={scanImgs[artistCode]} alt="" />
        <div className="install-button" onClick={onClickInstallBtn}>
          전시 관람하기
        </div>
      </div>
    </div>
  );
}

export default Modal;
