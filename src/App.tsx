import "./css/App.scss";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useState } from "react";
import { LAST_PAGE_NUM } from "./constant";
import MainContents from "./components/Pages";
import { initGa } from "./util/ga";

function App() {
  initGa();

  const [pageNum, setPageNum] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

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
  };

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <MainContents
          pageNum={pageNum}
          moveToSpecificPage={moveToSpecificPage}
          onClickMainBtn={onClickMainBtn}
        />
      </div>
      <Modal isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </>
  );
}

export default App;
