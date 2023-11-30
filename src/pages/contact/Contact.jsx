import { useState } from "react";
import PageHeader from "../../components/pageHeader/PageHeader";
import "./Contact.scss";

import Swal from "sweetalert2";

import { createToast } from "../../helpers/helpers";

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !input.name ||
      !input.email ||
      !input.cell ||
      !input.pass ||
      !input.location ||
      !input.gender
    ) {
      createToast("All fields are required");
      Swal.fire({
        title: "Error!",
        text: "All fields are required",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      createToast("Data stable", "success");
      Swal.fire({
        // position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <PageHeader title="Contact" />
      <div className="container contact-container">
        <h1>Contact</h1>
        <hr />
        <div className="user-reg">
          <form onSubmit={handleFormSubmit}>
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
