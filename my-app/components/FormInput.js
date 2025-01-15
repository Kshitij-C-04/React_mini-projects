import React from "react";

function FormInput({ label, type, name, value, placeholder, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default FormInput;
