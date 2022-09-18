import { useState } from "react";

const AuthModal = ({setShowModal, modalType, setModalType}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [errMsg, setErrorMessage] = useState(null);

  const handleXclick = () => {
    setShowModal(false);
  }

  const handleAuthFormSubmit = (event) => {
    event.preventDefault();
    try{
      if(modalType === 0 && !(password === confirmPassword)) {
        setErrorMessage("Password need to match");
        return;
      }
      console("OK!")
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="auth-modal">
      <div  className={"close-icon-container"}>
        <span onClick={handleXclick} className="close-icon">X</span>
      </div>
      <h2>{modalType===0 ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <form onSubmit={handleAuthFormSubmit}>
        <div className="input-group">
          <label>Your Email</label>
          <input 
            type="email"
            id="email-input"
            name="email-input"
            placeholder="EMAIL"
            required={true}
            onChange={(e) => {setEmail(e.target.value);}}
          />
        </div>
        
        <div className="input-group">
          <label>Your Password</label>
          <input 
            type="password"
            id="password-input"
            name="password-input"
            placeholder="PASSWORD"
            required={true}
            onChange={(e) => {setPassword(e.target.value);}}
          />
        </div>
        {
          modalType === 0 &&
          <div className="input-group">
            <label>Repeat Password</label>
            <input 
              type="password"
              id="password-check"
              name="password-check"
              placeholder="RETYPE PASSWORD"
              required={true}
              onChange={(e) => {setConfirmPassword(e.target.value);}}
            />
          </div>
        }
        <p className="error">{errMsg}</p>
        <div className="input-group">
          <input type="submit" value="Submit" className="secondary-button"/>
        </div>
        <hr />
        <h2>GET THE OFFICAL APP</h2>
      </form>
    </div>
  );
}

export default AuthModal;