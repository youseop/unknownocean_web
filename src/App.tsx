import "./css/App.scss";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import { LAST_PAGE_NUM } from "./constant";
import MainContents from "./components/Pages";
import { initGa } from "./util/ga";
import { isAppInstalled, openUnknownOceanApp } from "./util/unknownoceanApp";

function App() {
  const [isUnknownOceanInstalled, setIsUnknownOceanInstalled] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    initGa();
    if (isAppInstalled("unknownocean")) {
      console.log("Unknown Ocean app is installed");
      setIsUnknownOceanInstalled(true);
    } else {
      console.log("Unknown Ocean app is not installed");
    }
  }, []);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const moveToSpecificPage = (num: number) => setPageNum(num);

  const onClickMainBtn = () => {
    if (pageNum + 1 >= LAST_PAGE_NUM) {
      if (isUnknownOceanInstalled) {
        openUnknownOceanApp();
      } else if (!isModalVisible) toggleModal();
    } else {
      setPageNum(pageNum + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <MainContents
          pageNum={pageNum}
          moveToSpecificPage={moveToSpecificPage}
          onClickMainBtn={onClickMainBtn}
          isUnknownOceanInstalled={isUnknownOceanInstalled}
        />
      </div>
      <Modal isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </>
  );
}

export default App;
