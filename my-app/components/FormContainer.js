import React, { useState } from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextArea";
import SubmitButton from "./SubmitButton";

function FormContainer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <FormInput
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <FormTextarea
        label="Message"
        name="message"
        value={formData.message}
        placeholder="Enter your message"
        rows="4"
        onChange={handleChange}
      />
      <SubmitButton />
    </form>
  );
}

export default FormContainer;
