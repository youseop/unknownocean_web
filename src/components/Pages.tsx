import classNames from "classnames";
import { LAST_PAGE_NUM } from "../constant";
import "../css/MainContents.scss";
import MainButton from "./MainButton";

interface MainContentsProps {
  pageNum: number;
  moveToSpecificPage: (num: number) => void;
  onClickMainBtn: () => void;
}

function MainContents({
  pageNum,
  moveToSpecificPage,
  onClickMainBtn,
}: MainContentsProps) {
  const renderMeatBall = (pageNum: number) => {
    const arr = new Array(LAST_PAGE_NUM);
    for (let i = 0; i < arr.length; i++) arr[i] = i;

    return (
      <div className="meatball-wrapper">
        {arr.map((_, i) => {
          return (
            <div
              key={i}
              className={classNames("meatball", {
                current: i === pageNum,
              })}
              onClick={() => {
                moveToSpecificPage(i);
              }}
            ></div>
          );
        })}
      </div>
    );
  };

  const renderFirstPage = () => {
    return <div className="page">firstPage</div>;
  };

  const renderSecondPage = () => {
    return <div className="page">secondPage</div>;
  };

  return (
    <div className="main-contents">
      {pageNum === 0 ? renderFirstPage() : renderSecondPage()}
      {renderMeatBall(pageNum)}
      <MainButton onClickMainBtn={onClickMainBtn} />
    </div>
  );
}

export default MainContents;
