import { useState } from "react";
import { useNavigate } from "react-router";

var exp = /^\S+@\S+\.\S+$/;

export default function FirstPage({ setFormData }) {
  const navigate = useNavigate();
  const [formValues, setformvalues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setErrors] = useState({});
  const handlechange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formValues, [name]: value });
  };
  const validate = () => {
    const newErrors = {};

    if (!formValues.username) {
      newErrors.username = "Username is required.";
    }
    if (!formValues.email) {
      newErrors.email = "Email is required.";
    } else if (!exp.test(formValues.email)) {
      console.log("email write ");
      newErrors.email = "Email address is invalid.";
    }
    if (!formValues.password) {
      newErrors.password = "Password is required.";
    } else if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted Successfully", formValues);
      localStorage.setItem("formData", JSON.stringify(formValues));
      setFormData({ ...formValues }); // Update parent state
      setformvalues({ email: "", username: "", password: "" });
      setErrors({});
        navigate("/second");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          User name:
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handlechange}
          ></input>
          <p style={{ color: "red" }}>{error.username}</p>
        </div>
        <div>
          Email:
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handlechange}
          ></input>
          <p style={{ color: "red" }}>{error.email}</p>
        </div>
        <div>
          Password:
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handlechange}
          ></input>
          <p style={{ color: "red" }}>{error.password}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
