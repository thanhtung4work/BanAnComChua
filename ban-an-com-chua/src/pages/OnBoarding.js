import { useState } from "react";
import Nav from "../components/Nav";

const OnBoarding = () => {
  const authToken = true;


  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <Nav 
      authToken={authToken} 
      setShowModal={() => {}} 
      showModal={false}
    />
    <div className="onboarding">
      <h2>CREATE ACCOUNT</h2>
      <form action="" onSubmit={handleFormSubmit}>

        <div className="input-group">
          <section>
            <label htmlFor="full_name">Full Name</label>
            <input type="text" 
              id="full_name"
              name="full_name"
              placeholder="your full name"
              required={true}
            />
          </section>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
    </>
  );
}

export default OnBoarding;