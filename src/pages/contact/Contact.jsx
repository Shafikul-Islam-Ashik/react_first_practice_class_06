import { useState } from "react";
import PageHeader from "../../components/pageHeader/PageHeader";
import "./Contact.scss";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    cell: "",
    pass: "",
    location: "",
    gender: "",
  });

  const handleInputValue = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <PageHeader title="Contact" />
      <div className="container contact-container">
        <h1>Contact</h1>
        <hr />
        <div className="user-reg">
          <form action="">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={input.name}
              onChange={handleInputValue}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={handleInputValue}
            />
            <input
              type="text"
              placeholder="Cell"
              name="cell"
              value={input.cell}
              onChange={handleInputValue}
            />
            <select
              name="location"
              value={input.location}
              onChange={handleInputValue}
            >
              <option value="">--Select--</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Khulna">Khulna</option>
              <option value="Barishal">Barishal</option>
              <option value="Sylhet">Sylhet</option>
            </select>

            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleInputValue}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleInputValue}
                />
                Female
              </label>
            </div>
            <input
              type="text"
              placeholder="Password"
              name="pass"
              value={input.pass}
              onChange={handleInputValue}
            />
            <button>Create Now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
