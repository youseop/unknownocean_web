import classNames from "classnames";
import { LAST_PAGE_NUM } from "../constant";
import "../css/Pages.scss";

interface PagesProps {
  pageNum: number;
  moveToSpecificPage: (num: number) => void;
}

function Pages({ pageNum, moveToSpecificPage }: PagesProps) {
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
    return <>firstPage</>;
  };

  const renderSecondPage = () => {
    return <>secondPage</>;
  };

  return (
    <div className="pages">
      {pageNum === 0 ? renderFirstPage() : renderSecondPage()}
      {renderMeatBall(pageNum)}
    </div>
  );
}

export default Pages;
