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
  return (
    <div className="main-contents">
      {pageNum === 0 ? <FirstPage /> : <SecondPage />}
    </div>
  );
}

export default MainContents;
