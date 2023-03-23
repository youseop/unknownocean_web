import classNames from "classnames";
import "../css/Modal.scss";
import { gaOpenAppstore } from "../util/ga";
import queryString from "query-string";
const scan1 = require("../img/scan_01.png");
const scan2 = require("../img/scan_02.png");
const scan3 = require("../img/scan_03.png");
const scan4 = require("../img/scan_04.png");
const scan5 = require("../img/scan_05.png");
const scan6 = require("../img/scan_06.png");
const scan7 = require("../img/scan_07.png");
const scan8 = require("../img/scan_08.png");
const scan9 = require("../img/scan_09.png");
const scan10 = require("../img/scan_10.png");
const scan11 = require("../img/scan_11.png");

interface ModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

function Modal({ isModalVisible, toggleModal }: ModalProps) {
  const code = queryString.parse(window.location.search).code;
  const artistCode = code ? Number(code) : 1;
  const scanImg = [
    scan1,
    scan2,
    scan3,
    scan4,
    scan5,
    scan6,
    scan7,
    scan8,
    scan9,
    scan10,
    scan11,
  ];

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
        <img src={scanImg[artistCode - 1]} alt="" />
        <div className="install-button" onClick={onClickInstallBtn}>
          전시 관람하기
        </div>
      </div>
    </div>
  );
}

export default Modal;
