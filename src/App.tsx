import "./css/App.scss";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { LAST_PAGE_NUM } from "./constant";
import MainContents from "./components/MainContents";
import { initGa, gaVisitWebsiteTest, gaClickMainButton } from "./util/ga";
import MainButton from "./components/MainButton";
import { initAmplitude, logAmplitudeEvent } from "./util/amplitude";

function App() {
  const [pageNum, setPageNum] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    initGa();
    initAmplitude();
    gaVisitWebsiteTest();
  }, []);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const moveToSpecificPage = (num: number) => setPageNum(num);

  const onClickMainBtn = () => {
    if (pageNum + 1 >= LAST_PAGE_NUM) {
      if (!isModalVisible) {
        toggleModal();
        logAmplitudeEvent("open_modal");
      }
    } else {
      setPageNum(pageNum + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      logAmplitudeEvent("go_to_second_page");
    }
    gaClickMainButton();
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Unknown Ocean</title>
      </Helmet>
      <div className="main-wrapper">
        <MainContents
          pageNum={pageNum}
          moveToSpecificPage={moveToSpecificPage}
        />
        <MainButton onClickMainBtn={onClickMainBtn} />
      </div>
      <Modal isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </>
  );
}

export default App;
