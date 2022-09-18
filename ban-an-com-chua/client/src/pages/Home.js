import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";

const Home = () => {
  // 0: sign up, 1: login
  const [modalType, setModalType] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
    setModalType(0);
  }

  return (
    <div className="overlay">
    <Nav setShowModal={setShowModal} showModal={showModal} setModalType={setModalType}/>
    <div className="home">
      <h1 className="title">Hỏi người ấy ăn cơm chưa?</h1>
      <button className={"primary-button"} onClick={handleClick}>
        {authToken ? "Sign out": "Create account"}
      </button>
    </div>
    <div>
      {
        showModal && 
        (<AuthModal setShowModal={setShowModal} modalType={modalType} setModalType={setModalType}/>)
      }
    </div>
    </div>
  );
}

export default Home;