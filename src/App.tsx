import "./css/App.scss";
import Header from "./components/Header";
import Pages from "./components/Pages";
import MainButton from "./components/MainButton";
import Modal from "./components/Modal";
import { useState } from "react";
import { LAST_PAGE_NUM } from "./constant";

function App() {
  const [pageNum, setPageNum] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onClickMainBtn = () => {
    if (pageNum + 1 >= LAST_PAGE_NUM) {
      if (!isModalVisible) toggleModal();
    } else {
      setPageNum(pageNum + 1);
    }
  };

  const moveToSpecificPage = (num: number) => {
    setPageNum(num);
  };

  return (
    <div className="main-wrapper">
      <Header />
      <Pages pageNum={pageNum} moveToSpecificPage={moveToSpecificPage} />
      <MainButton onClickMainBtn={onClickMainBtn} />
      <Modal isModalVisible={isModalVisible} />
    </div>
  );
}

export default App;
