import classNames from "classnames";
import { LAST_PAGE_NUM } from "../constant";
import "../css/MainContents.scss";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

interface MainContentsProps {
  pageNum: number;
  moveToSpecificPage: (num: number) => void;
}

function MainContents({ pageNum, moveToSpecificPage }: MainContentsProps) {
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
  return (
    <div className="main-contents">
      {renderMeatBall(pageNum)}
      {pageNum === 1 ? <FirstPage /> : <SecondPage />}
    </div>
  );
}

export default MainContents;
