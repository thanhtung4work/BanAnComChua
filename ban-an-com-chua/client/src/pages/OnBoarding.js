import { useState } from "react";
import Nav from "../components/Nav";

const OnBoarding = () => {
  const authToken = true;
  const [formData, setFormData] = useState({
    user_id: 0,
    full_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: true,
    gender: "male",
    gender_interest: "woman-gender-interest",
    email: "",
    url: "" ,
    about: "",
    matches: []
  });

  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData)
  }

  const handleChange = (e) => {
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let name = e.target.name;
    
    setFormData((prevState) => ({
      ...prevState, [name]: value
    }));
  }

  return (
    <>
    <Nav 
      authToken={authToken} 
      setShowModal={() => {}} 
      showModal={false}
    />
    <hr />
    <h2>CREATE ACCOUNT</h2>
    <div className="onboarding">
      <form action="" onSubmit={handleFormSubmit} className="onboaring-form" id="onboarding-form">
        <div className="input-group">
          <section>
            <label htmlFor="full_name">Full Name</label>
            <input type="text" 
              id="full_name"
              name="full_name"
              placeholder="your full name"
              value={formData.full_name}
              required={true}
              onChange={handleChange}
            />

            <label>DoB</label>
            <input type="number"
              className="birthday-input"
              id="dob_day"
              name="dob_day"
              placeholder="DD"
              value={formData.dob_day}
              required={true}
              max={31}
              min={1}
              onChange={handleChange}
            />
            <input type="number" 
              className="birthday-input"
              id="dob_month"
              name="dob_month"
              placeholder="MM"
              required={true}
              value={formData.dob_month}
              max={12}
              min={1}
              onChange={handleChange}
            />
            <input type="number" 
              className="birthday-input"
              id="dob_year"
              name="dob_year"
              placeholder="YYYY"
              value={formData.dob_year}
              required={true}
              min={1800}
              onChange={handleChange}
            />
          </section>

          <section>
            <label>Gender</label>
            <select name="gender" id="gender" onChange={handleChange} value={formData.gender}>
              <option value="male" defaultValue>MALE</option>
              <option value="female">FEMALE</option>
              <option value="other">OTHER</option>
            </select>

            <label>Show gender on my profile</label>
            <input 
              type="checkbox" 
              name="show_gender" 
              id="show_gender" 
              checked={formData.show_gender}
              onChange={handleChange}
            />
          </section>

          <section>
            <label>SHOW ME:</label>
            <label htmlFor="man-gender-interest">Man</label>
            <input 
              type="radio" 
              name="gender_interest" 
              id="man-gender-interest" 
              value="man-gender-interest"
              onChange={handleChange}
              checked={formData.gender_interest === "man-gender-interest"}
            />
            
            <label htmlFor="woman-gender-interest">Woman</label>
            <input 
              type="radio" 
              name="gender_interest" 
              id="woman-gender-interest" 
              value="woman-gender-interest"
              onChange={handleChange}
              checked={formData.gender_interest === "woman-gender-interest"}
            />
            
            <label htmlFor="every-gender-interest">Everyone</label>
            <input 
              type="radio" 
              name="gender_interest" 
              id="every-gender-interest" 
              value="every-gender-interest"
              onChange={handleChange}
              checked={formData.gender_interest === "every-gender-interest"}
            />
          </section>

          <section>
            <label>Profile photo</label>
            <input 
              type="url" 
              id="url"
              name="url"
              onChange={handleChange}
              required={true}
            />
          </section>

          <section>
            <label htmlFor="about">About me</label>
            <br />
            <textarea 
              name="about" 
              id="about" 
              cols="50" 
              rows="5" 
              placeholder="Something about you..." 
              form="onboarding-form"
              onChange={handleChange}
              value={formData.about}
            >
            </textarea>
          </section>

          <section><input type="submit" value="submit" className="secondary-button"/></section>
        </div>
      </form>
      <div className="profile-picture-container">
        <img src={formData.url} alt="Your Profile" className="profile-picture"/>
      </div>
    </div>
    </>
  );
}

export default OnBoarding;