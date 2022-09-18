const Nav = ({authToken, showModal, setShowModal, setModalType}) => {
  const handleLoginClick = () => {
    setShowModal(true);
    setModalType(1);
  }

  return (
    <nav>
      <div className="logo-container">
        <h1 className="test-logo"><span>🍚</span>BanAnComChua</h1>
      </div>
      {
        !authToken && 
        <div>
          <button className="nav-button" onClick={handleLoginClick} disabled={showModal}>
            Log in
          </button>
        </div>
      }
    </nav>
  );
}

export default Nav;