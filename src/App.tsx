import "./css/App.scss";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import { LAST_PAGE_NUM } from "./constant";
import MainContents from "./components/MainContents";
import { initGa, gaVisitWebsiteTest, gaClickMainButton } from "./util/ga";
import MainButton from "./components/MainButton";
import Header from "./components/Header";

function App() {
  const [pageNum, setPageNum] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    initGa();

    gaVisitWebsiteTest();
  }, []);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const moveToSpecificPage = (num: number) => setPageNum(num);

  const onClickMainBtn = () => {
    if (pageNum + 1 >= LAST_PAGE_NUM) {
      if (!isModalVisible) toggleModal();
    } else {
      setPageNum(pageNum + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    gaClickMainButton();
  };

  return (
    <>
      <div className="main-wrapper">
        <Header />
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
